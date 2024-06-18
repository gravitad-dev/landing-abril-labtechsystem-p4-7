import createUid from '../../utils/createUid';
import getData from '../../utils/getData';

import { FaCheck } from 'react-icons/fa6';

const Info = () => {
  const { title, list, img } = getData()['section-three'];

  return (
    <section
      className='flex flex-col gap-5 md:flex-row md:justify-between md:items-center'
      id='info'
    >
      <div className='text-left'>
        <h2 className='subtitle'>{title}</h2>
        <ul className='mt-10 grid grid-cols-1 gap-5'>
          {list.map((item) => (
            <li className='flex gap-2 items-center' key={createUid()}>
              <FaCheck />
              <p className='max-w-[500px]'>
                <b>{item.split(':')[0]}:</b>
                {item.split(':')[1]}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <figure className='w-full h-[400px]  flex md:justify-end'>
        <img
          src={img.url}
          alt={img.alt}
          className='h-full object-contain rounded-md'
        />
      </figure>
    </section>
  );
};
export default Info;
