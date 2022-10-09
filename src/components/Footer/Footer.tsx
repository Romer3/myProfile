const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='w-screen bg-dark'>
          <p className='flex text-xs justify-center font-semibold text-slate-400'>
            © {currentYear} Roma Herasymov • All Rights Reserved
          </p>
      </div>
  );
};

export default Footer;
