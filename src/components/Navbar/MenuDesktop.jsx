import RenderLinks from '../ui/RenderLinks';

const MenuDesktop = () => {
  return (
    <ul className="fixed menu menu-vertical lg:menu-horizontal bg-white rounded-box">
      {RenderLinks()}
    </ul>
  );
};
export default MenuDesktop;
