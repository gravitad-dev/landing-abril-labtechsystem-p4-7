import getData from '../../utils/getData';

const Logo = ({ inFooter }) => {
  const { logo } = getData();

  return (
    <a className='  text-xl' href='/'>
      <img src={logo.footer} alt='svg logo' className='w-[50px] rounded-sm' />
    </a>
  );
};
export default Logo;
