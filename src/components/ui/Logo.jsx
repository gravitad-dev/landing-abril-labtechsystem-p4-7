import getData from '../../utils/getData';

const Logo = ({ inFooter }) => {
  const { logo } = getData();
  return (
    <a className='btn btn-ghost text-xl' href='/'>
      {inFooter ? (
        <img src={logo.footer} alt='svg logo' className='w-[130px]' />
      ) : (
        <img src={logo.nav} alt='svg logo' />
      )}
    </a>
  );
};
export default Logo;
