import createUid from '../../utils/createUid';
import getData from '../../utils/getData';
import CustomBtn from '../ui/CustomBtn';

const Hero = () => {
  const { title, desc, companies, img } = getData()['section-one'];

  return (
    <section
      className='grid gap-[60px] md:gap-0 md:grid-cols-2 md:justify-between pt-[90px]'
      id='home'
    >
      {/* text */}
      <div className='w-full max-w-[500px] max-h-[500px] flex flex-col justify-center  gap-4'>
        <h1 className='font-bold text-[40px] text-balance'>{title}</h1>
        <p className='w-[90%] paragraph'>{desc}</p>
        <CustomBtn>
          <a href='blog.com' target='_blank' rel='noreferrer'>
            Know more
          </a>
        </CustomBtn>

        {/* companies logos */}
        {/* <div className='flex flex-col gap-4 mt-5 lg:flex-row lg:items-center'>
          <p className='paragraph text-custom-blue/gray-600 max-w-[135px]'>
            {companies.title}
          </p>
          <div className='flex flex-wrap justify-start gap-5'>
            {companies.logos.map((logo) => (
              <img
                key={createUid()}
                src={logo.src}
                alt={logo.alt}
                className='w-[40px] h-[40px] object-contain aspect-square'
              />
            ))}
          </div>
        </div> */}
      </div>
      {/* img */}
      <figure className='max-h-[500px] w-full'>
        <img
          src={img.url}
          alt={img.alt}
          className='w-full h-full object-contain  rounded-md'
        />
      </figure>
    </section>
  );
};
export default Hero;
