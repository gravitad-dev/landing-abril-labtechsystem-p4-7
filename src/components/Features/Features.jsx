import getData from '../../utils/getData';

const Features = () => {
  const { title, desc, img } = getData()['section-seven'];
  return (
    <section
      className='
    grid grid-cols-1 md:grid-cols-2 md:justify-between  gap-10 md:gap-0
    *:max-h-[500px]
    '
      id='features'
    >
      <div className='max-w-[500px]  flex flex-col justify-center'>
        <h2 className='subtitle'>{title}</h2>
        <p className='paragraph'>{desc}</p>
      </div>
      <figure className='w-full md:flex md:justify-end'>
        <img
          src={img.url}
          alt={img.alt}
          className='w-full md:w-[70%] h-full  object-contain'
        />
      </figure>
    </section>
  );
};
export default Features;
