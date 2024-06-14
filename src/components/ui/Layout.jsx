const Layout = ({ maxWidth, children }) => {
  return (
    <div
      className={`
      px-4 ${maxWidth}  mx-auto container 
    `}
    >
      {children}
    </div>
  );
};
export default Layout;
