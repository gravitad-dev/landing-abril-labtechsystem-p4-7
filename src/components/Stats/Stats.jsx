import createUid from '../../utils/createUid';
import getData from '../../utils/getData';

const Stats = () => {
  const { stats } = getData()['section-five'];
  return (
    <section className='bg-custom-blue/gray-900 text-custom-yellow ' id='stats'>
      <div className='flex flex-wrap gap-4 items-center justify-around'>
        {stats.map((s) => (
          <div
            key={createUid()}
            className=' flex flex-col  items-center'
            data-aos='fade-up'
          >
            <h3 className='text-[40px] md:text-[45px] font-semibold'>
              {s.number}
            </h3>
            <p className='paragraph md:text-[18px]'>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Stats;
