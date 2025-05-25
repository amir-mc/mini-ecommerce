import {
  SignInButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import AuthClient from './auth-client';

async function Auth() {
    const user = await currentUser();
    const isAdmin = user?.privateMetadata?.isAdmin as boolean | undefined;
    
    return (
        <div>
            <SignedIn>
              <AuthClient isAdmin={isAdmin} /> 
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
        </div>
    )
}
export default Auth;