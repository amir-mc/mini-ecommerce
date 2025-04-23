const Layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  => {
    return ( 
        <div>
            Layout
            {children}
        </div>
     );
}
 
export default Layout;