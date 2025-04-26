const Layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {


    return ( 
        <div>
             layout private {children}
        </div>
     );
}
 
export default Layout;