import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function BackgroundCircles({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
			}}
			transition={{
				duration: 1.5,
			}}
			className='relative flex justify-center items-center'
		>
			<div className='absolute border border-[#376e6f] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
			<div className='border border-[#376e6f] rounded-full h-[300px] w-[300px] mt-52 animate-ping absolute' />
			<div className='border border-[#376e6f] rounded-full h-[400px] w-[400px] mt-52 animate-ping absolute' />
			<div className='rounded-full border border-[#DA7B93] opacity-20 h-[750px] w-[750px] mt-52 animate-pulse absolute' />
			<div className='border border-[#376e6f] rounded-full h-[600px] w-[600px] mt-52 animate-ping absolute' />
		</motion.div>
	);
}

export default BackgroundCircles;
