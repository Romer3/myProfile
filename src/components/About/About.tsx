import { motion } from 'framer-motion';
import Image from 'next/image';
import { variants } from '@/animations/variants';

import GradientText from '../GradientText';
import { about } from './data';
import Link from "next/link";

const About = () => {
  return (
    <div className='mt-2 w-screen'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='fill-blue-500'
      >
        <path
          fillOpacity='1'
          d='M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,58.7C672,43,768,53,864,74.7C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      {/* content */}
      <div className='-my-px scroll-mt-24 bg-blue-500 text-base-100' id='about'>
        <div className='container mx-auto space-y-10 px-6 md:px-12 lg:px-56'>
          {/* title */}
          <motion.div
            variants={variants}
            initial='fromBottom'
            whileInView='toTop'
            viewport={{ once: true }}
            className='flex w-full justify-center text-3xl font-black'
          >
            About
          </motion.div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='flex justify-center'>
              <motion.div
                variants={variants}
                initial='fromBottom'
                whileInView='toTop'
                viewport={{ once: true }}
                className='avatar'
              >
                <div className='group relative aspect-square h-fit w-36 rounded-full bg-base-100 md:w-5/6'>
                  <div>
                    <Image
                      src='/ava.jpg'
                      width={500}
                      height={500}
                      className='absolute transition-all duration-500 ease-in-out group-hover:translate-y-4 group-hover:translate-x-0.5 md:group-hover:translate-x-2 group-hover:scale-125 md:group-hover:translate-y-6'
                      alt='photo'
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={variants}
              initial='fromBottom'
              whileInView='toTop'
              viewport={{ once: true }}
              className='flex flex-col justify-start space-y-4 text-justify'
            >

              <p>
                Hi everyone, my name is{' '}
                <GradientText
                  from='from-rose-600'
                  to='to-indigo-600'
                  style='inline font-bold'
                >
                  Roma Herasymov
                </GradientText>
                . I'm a Developer.
              </p>
              {about.description.map((value, i) => {
                return (
                  <span key={i}>
                    <p>{value}</p>
                  </span>
                );
              })}
              <Link href='https://drive.google.com/file/d/1HXKBjnDOAxh9F7RAGU4WgzWLVKm5cc31/view?usp=sharing'>
                <a
                    className='flex justify-center items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 mt-6 space-x-2 w-fit'
                    target='_blank'
                >
                  <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-5 w-5'
                  >
                    <path d='M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z' />
                  </svg>
                  <span>Download CV</span>
                </a>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='fill-blue-500 [fillRule:evenodd] [clipRule:evenodd] [strokeLinejoin:round] [strokeMiterlimit:1.41421]'
      >
        <path d='M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,186.7C672,181,768,203,864,208C960,213,1056,203,1152,208C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
      </svg>
    </div>
  );
};

export default About;
