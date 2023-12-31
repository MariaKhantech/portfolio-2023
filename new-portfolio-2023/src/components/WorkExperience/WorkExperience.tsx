import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../ExperienceCard/ExperienceCard';

type Props = {};
//check put scroll smooth
function WorkExperience({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='h-screen flex relative overflow-hidden flex-col text-lft md:text-left md:flex-row max-w-full px-10 
			justify-evenly mx-auto items-center'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>
				Experience
			</h3>

			<div className='mt-[130px] w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
				{/* ExperienceCards */}
				<ExperienceCard />
				{/* ExperienceCards */}
				<ExperienceCard />
				{/* ExperienceCards */}
				<ExperienceCard />
			</div>
		</motion.div>
	);
}

export default WorkExperience;
