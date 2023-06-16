import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface ISingleActionButton {
    onClick: () => void,
    icon: React.ReactNode,
    text: string
}

const SingleActionButton: React.FC<ISingleActionButton> = ({ onClick, icon, text }) => {

    const [isClicked, setIsClicked] = useState(false);

    const tapMotion = {
        tap: {
            scale: 1.2,
            transition: {
                duration: 0.1
            }
        }
    }

    return(
        <motion.div className='flex space-x-2 px-2 md:px-4 py-2 cursor-pointer sm:hover:bg-gray-900 sm:active:bg-none active:bg-gray-900 active:text-blue-500 sm:hover:text-blue-500 transition rounded-full' 
            onClick={() => {
                setIsClicked(!isClicked);
                onClick();
            }}>
            <motion.div variants={tapMotion} animate={isClicked ? 'tap' : ""} onAnimationComplete={() => setIsClicked(false)}>
                {icon}
            </motion.div>
            <span>{text}</span>
        </motion.div>
    )
}

export default SingleActionButton;