"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type { ServerActionResult } from "@/lib/types";
import { SITE_URL } from "@/lib/env";

//! AUTH ACTIONS

export async function userLogout() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  revalidatePath("/community", "layout");
  redirect("/");
}

export async function authWithDiscord() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "discord",
    options: {
      redirectTo: `${SITE_URL}/api/auth/callback`,
    },
  });

  if (error) throw new Error(`Error signing in: ${error.message}`);

  if (data.url) {
    redirect(data.url);
  }
}

export async function authWithTwitch() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "twitch",
    options: {
      redirectTo: `${SITE_URL}/api/auth/callback`,
    },
  });

  if (error) throw new Error(`Error signing in: ${error.message}`);

  if (data.url) {
    redirect(data.url);
  }
}

//! USER ACTIONS

export async function getUserData() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let suggestedName: string | null = null;

  if (user && user.user_metadata) {
    if (
      user.app_metadata?.provider === "discord" &&
      user.user_metadata?.preferred_username
    ) {
      suggestedName = user.user_metadata.preferred_username;
    } else {
      suggestedName =
        user.user_metadata.full_name ||
        user.user_metadata.user_name ||
        user.user_metadata.name ||
        null;
    }
    if (suggestedName) suggestedName = suggestedName.trim();
  }

  let commentsQuery = supabase
    .from("community_comments")
    .select("*")
    .order("created_at", { ascending: false });

  if (user) {
    commentsQuery = commentsQuery.or(`approved.eq.true,user_id.eq.${user.id}`);
  } else {
    commentsQuery = commentsQuery.eq("approved", true);
  }

  const { data: comments, error: commentsError } = await commentsQuery;

  if (commentsError) {
    console.error("Error fetching comments:", commentsError.message);
  }

  return { user, suggestedName, comments };
}

export async function userSubmitComment(
  _prevState: ServerActionResult | undefined,
  formData: FormData
): Promise<ServerActionResult> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: undefined,
      message: "You must be logged in to leave a comment.",
    };
  }

  let finalName: string | null = null;

  if (user.user_metadata) {
    if (
      user.app_metadata?.provider === "discord" &&
      user.user_metadata?.preferred_username
    ) {
      finalName = user.user_metadata.preferred_username;
    } else {
      finalName =
        user.user_metadata.full_name ||
        user.user_metadata.user_name ||
        user.user_metadata.name ||
        null;
    }
    if (finalName) finalName = finalName.trim();
  }

  const message = formData.get("message") as string;

  if (!message || message.trim() === "") {
    return { success: false, message: "Message cannot be empty." };
  }

  const { error } = await supabase.from("community_comments").insert({
    user_id: user.id,
    name: finalName,
    message: message,
    approved: false,
  });

  if (error) {
    console.error("Error submitting comment:", error.message);
    return {
      success: false,
      message:
        "Failed to submit comment due to a server error. Please try again.",
    };
  }

  revalidatePath("/community");

  return {
    success: true,
    message: "Comment submitted successfully! Awaiting admin approval.",
  };
}

//! ADMIN ACTIONS

export async function adminApproveComment(
  _prevState: ServerActionResult | undefined,
  commentId: string
): Promise<ServerActionResult> {
  const supabaseAdmin = createAdminClient();

  const { error } = await supabaseAdmin
    .from("community_comments")
    .update({ approved: true })
    .eq("id", commentId);

  if (error) {
    console.error("Error approving comment:", error.message);
    return { success: false, message: "Failed to approve comment." };
  }

  revalidatePath("/admin");
  revalidatePath("/community");

  return { success: true, message: "Comment approved successfully!" };
}

export async function adminDeleteComment(
  _prevState: ServerActionResult | undefined,
  commentId: string
): Promise<ServerActionResult> {
  const supabaseAdmin = createAdminClient();

  const { error } = await supabaseAdmin
    .from("community_comments")
    .delete()
    .eq("id", commentId);

  if (error) {
    console.error("Error deleting comment:", error.message);
    return { success: false, message: "Failed to delete comment." };
  }

  revalidatePath("/admin");
  revalidatePath("/community");

  return { success: true, message: "Comment deleted successfully!" };
}
