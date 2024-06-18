import getData from '../../utils/getData';
import { FaArrowRightLong, FaJetFighter } from 'react-icons/fa6';

const Meet = () => {
  const { title, desc, img, btn } = getData()['section-four'];
  return (
    <section
      className='flex flex-col md:flex-row gap-10 md:justify-between md:items-center'
      id='meet'
    >
      <div className='flex flex-col gap-5 relative z-2  md:order-2 max-w-[600px]'>
        <FaJetFighter className='absolute top-[-10px] right-[20px] text-[30px] z-1 text-custom-yellow' />
        <h2 className='subtitle'>{title}</h2>
        <p className='paragraph'>{desc}</p>
        {/* <a
          href={btn.href}
          className=' text-custom-blue-800 font-semibold
        flex items-center gap-2 hover:underline
        '
        >
          {btn.text}
          <FaArrowRightLong />
        </a> */}
      </div>
      <figure className='md:h-[500px]'>
        <img
          src={img.url}
          alt={img.alt}
          className='w-full h-full object-contain md:object-cover'
        />
      </figure>
    </section>
  );
};
export default Meet;
