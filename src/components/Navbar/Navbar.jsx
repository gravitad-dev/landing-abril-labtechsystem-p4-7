import Logo from '../ui/Logo';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

const Navbar = () => {
  return (
    <div className="navbar text-custom-blue/gray-900 bg-white w-full fixed z-50">
      <div className="navbar-start">
        <Logo />
      </div>

      <div className="navbar-end lg:hidden">
        <MenuMobile />
      </div>
      <div className="navbar-end hidden lg:flex">
        <MenuDesktop />
      </div>
    </div>
  );
};
export default Navbar;
