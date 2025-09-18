import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>;
}) {
  const params = await searchParams;

  return (
    <div className='mx-auto grid min-h-dvh w-full place-items-center p-6 md:p-10'>
      <div className='w-full max-w-md'>
        <Card>
          <CardHeader>
            <CardTitle className='text-xl font-bold tracking-tight'>
              Sorry, something went wrong.
            </CardTitle>
          </CardHeader>
          <CardContent>
            {params?.error ? (
              <p className='text-sm text-muted-foreground'>
                Code error: {params.error}
              </p>
            ) : (
              <p className='text-sm text-muted-foreground'>
                An unspecified error occurred.
              </p>
            )}
          </CardContent>
          <CardFooter className='flex items-center justify-end'>
            <Link
              href='/auth'
              className='cursor-pointer text-sm font-medium text-link/85 transition-colors hover:text-link'
            >
              Try again?
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
