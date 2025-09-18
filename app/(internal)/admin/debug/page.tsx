import { createClient } from "@/lib/supabase/server";

export default async function AdminDebugPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("Supabase user", user);

  return <pre className='p-4'>{JSON.stringify(user, null, 2)}</pre>;
}
