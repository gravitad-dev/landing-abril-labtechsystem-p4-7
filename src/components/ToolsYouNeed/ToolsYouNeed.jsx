import getData from '../../utils/getData';

const ToolsYouNeed = () => {
  const { title, desc, img } = getData()['section-two'];

  return (
    <section className='flex flex-col gap-8' id='tools'>
      <div className='text-left md:text-center'>
        <h2 className='subtitle'>{title}</h2>
        <p className='paragraph mt-2 max-w-[360px] md:mx-auto'>{desc}</p>
      </div>
      <figure className='rounded-md overflow-hidden shadow-md md:h-[600px] mx-auto'>
        <img
          src={img.url}
          alt={img.alt}
          className='w-full h-full object-cover'
        />
      </figure>
    </section>
  );
};
export default ToolsYouNeed;
