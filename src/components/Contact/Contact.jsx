import getData from '../../utils/getData';
import CustomBtn from '../ui/CustomBtn';

const Contact = () => {
  const { title, desc, btn } = getData()['section-eight'];

  return (
    <section className="md:bg-custom-yellow" id="contact">
      <div className="flex flex-col items-center text-center max-w-[800px] mx-auto gap-3">
        <h2 className="subtitle">{title}</h2>
        <p className="paragraph w-[90%]">{desc}</p>
        <CustomBtn>
          <a href={btn.href} target="_blank">
            {btn.text}
          </a>
        </CustomBtn>
      </div>
    </section>
  );
};
export default Contact;
