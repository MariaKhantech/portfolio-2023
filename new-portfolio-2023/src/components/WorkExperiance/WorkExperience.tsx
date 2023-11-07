import React from 'react';
import { motion } from 'framer-motion';
import ExperianceCard from '../ExperienceCard/ExperienceCard';

type Props = {};
//check put scroll smooth
function WorkExperiance({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='h-screen flex relative overflow-hidden text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center flex-col'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>
				Experiance
			</h3>

			<div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
				{/* ExperianceCards */}
				<ExperianceCard />
				{/* ExperianceCards */}
				<ExperianceCard />
				{/* ExperianceCards */}
				<ExperianceCard />
			</div>
		</motion.div>
	);
}

export default WorkExperiance;
