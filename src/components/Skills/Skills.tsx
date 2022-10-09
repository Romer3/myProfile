import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { variants } from '@/animations/variants';

import { skills } from './data';
import SkillBox from './SkillBox';

const About = () => {
    const [category] = useState<string[]>([
        ...new Set(skills.map((value) => value.type)),
    ]);
    const [activeTab, setActiveTab] = useState(category[0]);
    const [isFirstRender, setIsFirstRender] = useState(true);

    const handleTabClick = (name: string) => {
        setActiveTab(name);
        if (isFirstRender) setIsFirstRender(false);
    };

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
            <div className='-my-px scroll-mt-24 bg-blue-500 text-base-100' id='skills'>
                <div className='container mx-auto space-y-20 px-10 md:h-[32rem] lg:h-[42rem] md:px-10 lg:px-48'>
                    <motion.div
                        variants={variants}
                        initial='fromBottom'
                        whileInView='toTop'
                        viewport={{ once: true }}
                        className='flex w-full justify-center text-3xl font-black'
                    >
                        Skills
                    </motion.div>
                    <div className='space-y-8'>
                        <motion.div
                            variants={variants}
                            initial='fromBottom'
                            whileInView='toTop'
                            viewport={{ once: true }}
                            className='tabs flex flex-nowrap justify-start overflow-x-auto lg:justify-center'
                        >
                            {category.map((value) => (
                                <a
                                    onClick={() => handleTabClick(value)}
                                    className={`tab tab-bordered ${
                                        activeTab === value && 'tab-active'
                                    } shrink-0 space-x-2 transition-all duration-500 umami--click--${value.replace(
                                        /\s+/g,
                                        '-'
                                    )}-tab`}
                                    key={value}
                                >
                                    <span>{value}</span>
                                    <span className={`badge badge-outline badge-sm`}>
                    {skills.filter((e) => e.type === value).length}
                  </span>
                                </a>
                            ))}
                        </motion.div>
                        <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
                            <AnimatePresence>
                                {skills
                                    .filter((value) => value.type === activeTab)
                                    .map((value) => (
                                        <div
                                            className='tooltip'
                                            data-tip={value.title}
                                            key={value.title}
                                        >
                                            <SkillBox
                                                title={`${value.title}`}
                                                icon={value.icon}
                                                variants={variants}
                                                key={value.title}
                                            />
                                        </div>
                                    ))}
                            </AnimatePresence>
                        </div>
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