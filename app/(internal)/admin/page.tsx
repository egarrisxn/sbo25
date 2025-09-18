import { redirect } from "next/navigation";
import {
  adminApproveComment,
  adminDeleteComment,
} from "@/app/_actions/internal";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ActionButton } from "@/components/shared/action-button";
import { AdminNewsletterForm } from "@/components/resend/admin-form";
import { createClient } from "@/lib/supabase/server";

const ADMIN = process.env.ADMIN_USER_ID;

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !ADMIN?.includes(user.id)) {
    redirect("/");
  }

  const { data: comments } = await supabase
    .from("community_comments")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className='mx-auto grid min-h-dvh w-full place-items-center p-6 md:p-10'>
      <div className='w-full max-w-2xl space-y-6'>
        <h1 className='text-2xl font-bold'>Admin Dashboard</h1>

        <Card className='p-6'>
          <AdminNewsletterForm />
        </Card>

        <h1 className='text-2xl font-bold'>Comment Moderation</h1>
        <ul className='space-y-4'>
          {comments?.map((comment) => (
            <li key={comment.id}>
              <Card>
                <CardHeader>
                  <CardTitle className='text-xl font-bold tracking-tight'>
                    {comment.name || "Anonymous"}
                  </CardTitle>
                  <CardDescription className='text-xs font-medium tracking-tight'>
                    {new Date(comment.created_at).toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground'>
                    {comment.message}
                  </p>
                </CardContent>
                <CardFooter className='gap-4'>
                  {!comment.approved && (
                    <ActionButton
                      action={adminApproveComment}
                      id={comment.id}
                      label='✅ Approve'
                      confirm
                      className='text-link-85 cursor-pointer text-sm font-medium transition-colors hover:text-link'
                    />
                  )}
                  <ActionButton
                    action={adminDeleteComment}
                    id={comment.id}
                    label='🗑 Delete'
                    confirm
                    className='cursor-pointer text-sm font-medium text-destructive/85 transition-colors hover:text-destructive'
                  />
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
