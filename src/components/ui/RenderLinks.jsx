import data from '../../data.json';

const RenderLinks = () => {
  const MENU_LINKS = data.MENU_LINKS;
  return (
    <>
      {MENU_LINKS.map(({ href, text, isExternal }) => (
        <li key={crypto.randomUUID()} className='hover:text-custom-blue-800'>
          {isExternal ? (
            <a href={href} target='_blank' rel='noreferrer'>
              {text}
            </a>
          ) : (
            <a href={href}>{text}</a>
          )}
        </li>
      ))}
    </>
  );
};
export default RenderLinks;
