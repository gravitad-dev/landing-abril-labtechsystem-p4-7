import getData from '../../utils/getData';

const Projects = () => {
  const { title, projectImg, projectTitle, projectDesc } =
    getData()['section-projects'];
  return (
    <section id='project'>
      <h2 className='subtitle'>{title}</h2>

      <div
        className='mt-10 rounded-md overflow-hidden shadow-md h-[350px] md:h-[500px] relative'
        data-aos='fade-down'
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)),
          url(${projectImg.url})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div
          className=' 
        absolute inset-0 z-1 flex flex-col justify-center items-center text-center
        text-custom-white px-4
        '
        >
          {/* <h3 className='font-semibold text-[30px]'>{projectTitle}</h3> */}
          <p className='paragraph max-w-[600px] max-auto lg:text-[18px]'>
            {projectDesc}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Projects;
