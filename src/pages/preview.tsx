const Preview = () => {
  const mode = {
    dev: 'http://localhost:3000',
    prod: 'https://my-profil-dalu4vhb5-romer228.vercel.app',
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
