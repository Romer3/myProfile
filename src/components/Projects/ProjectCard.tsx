import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { trackEvent } from '@/lib/analytics/trackEvent';

import { IProjectCard } from './index.d';

const ProjectCard = ({
  variants,
  name,
  description,
  picture,
  repoLink,
  isFirstRender,
}: IProjectCard) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonClickable, setIsButtonClickable] = useState(false);
  const _name = name.replace(/\s+/g, '-');

  const onHover = () => {
    setTimeout(() => {
      setIsButtonClickable(true);
    }, 100);
    setIsHovered(true);
  };

  const onLeave = () => {
    setIsButtonClickable(false);
    setIsHovered(false);
  };

  return (
    <motion.div
      key={name}
      variants={variants}
      initial='fromLeft'
      whileInView='toRight'
      exit='exitToRight'
      transition={{
        duration: isFirstRender ? 1.5 : 0.75,
        type: 'tween',
        ease: 'backInOut',
      }}
      viewport={{ once: true }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={`relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg transition duration-500 ease-in-out ${
          isHovered && 'ring ring-[#3ABFF8]'
        }`}
      >
        <div
          className={`absolute inset-0 z-10 grid aspect-video h-full w-full place-items-center rounded-2xl bg-base-200/90 px-4 py-3 text-center text-base-content transition duration-500 ${
            isHovered ? 'opacity-1' : 'opacity-0'
          }`}
        >
          <div>
            <p className='text-xl font-bold'>{name}</p>
            <p className='text-sm font-light'>{description}</p>
            <div onClick={() =>
                trackEvent(_name + '-repo-link', 'click')
              }
            >
              <Link href={repoLink}>
                <a
                  className={`group btn btn-outline btn-xs mt-1.5 ${
                    isButtonClickable || 'pointer-events-none'
                  }`}
                  target='_blank'
                >
                  Open
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={`/projects/${picture}`}
          className={`inset-0 aspect-video ${
            isHovered && 'scale-125'
          } rounded-2xl transition duration-500 ease-in-out`}
          layout='fill'
          alt={`${name} thumbnail`}
          placeholder='blur'
          blurDataURL='/placeholder.webp'
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
