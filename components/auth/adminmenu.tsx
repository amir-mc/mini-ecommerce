'use client'

import { UserButton } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";

const Adminmenu = () => {
    return ( 
        <UserButton>
            <UserButton.MenuItems>
                <UserButton.Link
                label="Dashboard"
                labelIcon={<LayoutDashboard/>}
                href="/dashboard"
                >

                </UserButton.Link>
            </UserButton.MenuItems>
        </UserButton>
            
     );
}
 
export default Adminmenu;