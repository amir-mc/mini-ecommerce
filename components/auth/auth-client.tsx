'use client';

import { UserButton } from "@clerk/nextjs";
import Adminmenu from "./adminmenu";

interface AuthClientProps {
  isAdmin?: string;
}

const AuthClient = ({ isAdmin }: AuthClientProps) => {
  return isAdmin ? <Adminmenu /> : <UserButton />;
};

export default AuthClient;
