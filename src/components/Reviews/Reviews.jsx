import getData from '../../utils/getData';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import createUid from '../../utils/createUid';

const Reviews = () => {
  const { title, reviews } = getData()['section-six'];
  return (
    <section id='reviews'>
      <h2 className='subtitle'>{title}</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          780: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        className='py-[100px]'
      >
        {reviews.map((r) => (
          <SwiperSlide>
            <div
              key={createUid()}
              className='
                      shadow-md w-full  p-4  rounded-md 
                  '
            >
              <div className='w-full  min-h-[150px] flex items-center'>
                <p className='paragraph text-center italic'>"{r.comment}"</p>
              </div>
              <div className='flex items-center gap-4 justify-start mt-8'>
                <img
                  className='w-[60px] h-[60px] rounded-full object-cover'
                  src={r.img}
                  alt={r.name}
                />
                <div>
                  <h4 className='font-semibold'>{r.name}</h4>
                  <p className='paragraph'>{r.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Reviews;
