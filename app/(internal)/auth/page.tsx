import { authWithDiscord, authWithTwitch } from "@/app/_actions/internal";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DiscordIcon } from "@/components/icons/discord";
import { TwitchIcon } from "@/components/icons/twitch";

export default function AuthPage() {
  return (
    <div className='mx-auto grid min-h-dvh w-full place-items-center p-6 md:p-10'>
      <div className='w-full max-w-sm'>
        <Card className='bg-white dark:bg-muted'>
          <CardHeader className='space-y-2 py-2 text-center'>
            <CardTitle className='text-4xl font-bold tracking-tight'>
              Welcome back!
            </CardTitle>
            <CardDescription className='text-sm text-muted-foreground'>
              Log in to your account to continue.
            </CardDescription>
          </CardHeader>
          <CardContent className='flex flex-row items-center justify-center gap-3 px-6 pt-3 sm:gap-4'>
            <form action={authWithDiscord}>
              <Button type='submit' className='w-full cursor-pointer'>
                <DiscordIcon />
                Discord
              </Button>
            </form>
            <form action={authWithTwitch}>
              <Button type='submit' className='w-full cursor-pointer'>
                <TwitchIcon />
                Twitch
              </Button>
            </form>
          </CardContent>
          <CardFooter className='flex items-center justify-center px-6 pt-4'>
            <p className='text-center text-sm'>
              &copy; {new Date().getFullYear()} Sway Bae Official 2025 by{" "}
              <a
                href='https://egxo.dev'
                className='cursor-pointer pl-0.5 font-medium text-link/80 transition-colors hover:text-link'
              >
                egxo.dev
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
