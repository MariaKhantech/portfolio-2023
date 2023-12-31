import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
	return (
		// fade affect not working need to come back to fix this
		// motion.div my affect is not working, please look at the code below to see what the issues?
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 4 }}
			className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>
				About
			</h3>

			<motion.img
				className='-mb-20 md:0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{ duration: 1.5 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				src='https://images.pexels.com/photos/4262414/pexels-photo-4262414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
			/>
			<div className='space-y-10 px-0 md:px-10'>
				<h4 className='text-4xl font-semibold'>
					Here is a{' '}
					<span className='underline decoration-[#DA7b93]/50'>little</span>{' '}
					background
				</h4>
				<p className='text-base'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</motion.div>
	);
}

export default About;
