import {
  SignInButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import AuthClient from './auth-client';

interface MyMetadata {
  isAdmin?: string;
}

async function Auth() {
  const user = await currentUser();
  const metadata = user?.privateMetadata as MyMetadata;

  const isAdmin = metadata.isAdmin;

  return (
    <div>
      <SignedIn>
        <AuthClient isAdmin={isAdmin} />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}

export default Auth;
