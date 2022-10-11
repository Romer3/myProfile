const Preview = () => {
  const mode = {
    dev: 'herasymov-3agv39c33-romer228.vercel.app',
    prod: 'herasymov-3agv39c33-romer228.vercel.app',
  };
  return (
    <iframe
      src={mode.dev}
      width='1366'
      height='768'
    ></iframe>
  );
};

export default Preview;
