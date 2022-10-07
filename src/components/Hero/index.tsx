import { motion } from 'framer-motion';
import Image from 'next/image';
import { variants } from '@/animations/variants';
import GradientText from '../GradientText';
import SocialMediaIcons from '../SocialMediaIcons';
const Hero = () => {

  const handleArrow = () => {
    document.querySelector('#about')!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div
      className='hero top-0 -mt-20 min-h-screen w-screen bg-gradient-to-bl from-blue-500/10 via-base-100 to-base-100 pb-px'
      id='hero'
    >
      <div className='hero-content'>
        <div className='max-w-md px-4 md:max-w-3xl lg:max-w-5xl'>
          <div className='grid grid-cols-1 items-center gap-x-4 md:grid-cols-2'>
            <motion.div
              variants={variants}
              initial='fromLeft'
              animate='toRight'
            >
              <h1 className='text-2xl font-bold md:text-4xl'>Hi, my name is</h1>
              <h1 className='bg-gradient-to-l from-green-500 to-green-800 bg-clip-text py-2 text-4xl font-extrabold text-transparent md:text-6xl'>
                Roma Herasymov
              </h1>
              <p className='pt-2 pb-4 font-medium md:text-xl'>
                I'm a{' '}
                <GradientText
                  from='from-rose-400'
                  to='to-violet-600'
                  style='inline font-semibold'
                >
                  Developer
                </GradientText>{' '}
                from Israel
              </p>
              <div className='text-base-content'>
                <SocialMediaIcons
                  variants={variants}
                  initial='hidden'
                  animate='visible'
                  transition={{
                    duration: 1,
                  }}
                />
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial='fromBottom'
              animate='toTop'
              className='hidden md:flex'
            >
              <Image
                src='/illustration3.svg'
                height={500}
                width={500}
                objectFit='scale-down'
              />
            </motion.div>
          </div>
          <motion.div
            variants={variants}
            initial='startFade'
            animate='endFade'
            className='grid place-items-center'
            onClick={handleArrow}
          >

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
