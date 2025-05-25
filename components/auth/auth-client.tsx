// auth-client.tsx
'use client';

import { UserButton } from "@clerk/nextjs";
import Adminmenu from "./adminmenu";

interface AuthClientProps {
  isAdmin?: boolean;
}

const AuthClient = ({ isAdmin }: AuthClientProps) => {
  return isAdmin ? <Adminmenu /> : <UserButton />;
};

export default AuthClient;