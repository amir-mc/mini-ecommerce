
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Adminmenu from './adminmenu';

 async function Auth() {
    const user =await currentUser()
    const isAdmin= user?.privateMetadata?.isAdmin;
    return(
        <div>
            <SignedIn>
              {isAdmin ? <Adminmenu/> :<UserButton />}
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            
        </div>
    )
}
export default Auth