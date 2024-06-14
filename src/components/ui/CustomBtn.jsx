const CustomBtn = ({ children }) => {
  return (
    <button
      className='
    btn bg-custom-orange border-none text-custom-white
    w-full max-w-[200px]
    '
    >
      {children}
    </button>
  );
};
export default CustomBtn;
