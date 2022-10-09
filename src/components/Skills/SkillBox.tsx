import { motion } from 'framer-motion';
import { ISkillBox } from './index.d';

const SkillBox = ({
                      title,
                      icon,
                      variants
                  }: ISkillBox) => (
    <motion.div
        variants={variants}
        initial='fromLeft'
        whileInView='toRight'
        exit='exitToRight'
        transition={{
            type: 'tween',
            ease: 'backInOut',
        }}
        viewport={{ once: true }}
    >
        <div
            className={`space-y-2 rounded-2xl bg-base-200 p-6 lg:p-6 shadow shadow-base-content/20 transition duration-500 hover:bg-base-300 w-full aspect-square flex justify-center items-center relative`}
        >
                <img
                    src={`/icons/${icon}`}
                    alt={title}
                    className={`object-contain h-12 md:h-12 lg:h-24`}
                />

        </div>
    </motion.div>
);

export default SkillBox;