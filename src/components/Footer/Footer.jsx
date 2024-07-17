import SocialButtons from "../Socials";
import Logo from "../ui/Logo";
import RenderLinks from "../ui/RenderLinks";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-custom-blue/gray-900 text-custom-white mt-20">
      <aside>
        <Logo inFooter />
        <ul className="flex flex-wrap justify-center gap-4 my-4">
          {RenderLinks()}
        </ul>
        <SocialButtons />
        <p>
          Copyright © {new Date().getFullYear()} - Todos los derechos reservados
        </p>
      </aside>
    </footer>
  );
};
export default Footer;
