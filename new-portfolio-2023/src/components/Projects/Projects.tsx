import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
	const projects: Array<number> = [1, 2, 3, 4, 5];
	return (
		<div
			className='h-screen relative flex overflow-hidden flex-col text-left 
        md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>
				Projects
			</h3>

			<div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
				{projects.map((project, index) => (
					<div
						className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
						key={index}
					>
						<motion.img
							initial={{ y: -300, opacity: 0 }}
							transition={{ duration: 1.5 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src='https://store-images.s-microsoft.com/image/apps.36150.9007199266246365.5f5918c8-1cad-43a1-9523-4881587f9bda.9e9360fd-9a9d-406b-ab9e-6e06e278596e?h=1080'
							alt=''
						/>
						<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
							<h4 className='text-4xl font-semibold text-center'>
								<span className='underline decoration-[#DA7B93]'>
									{' '}
									Case Study {index + 1} of {projects.length}:
								</span>{' '}
								UPS clone
							</h4>
							<p className='text-lg text-center md:text-left'>
								Lorem ipsum is placeholder text commonly used in the graphic,
								print, and publishing industries for previewing layouts and
								visual mockups.
							</p>
						</div>
					</div>
				))}
			</div>
			<div className='w-full absolute top-[30%] bg-[#DA7B93]/10 left-0 h-[500px] -skew-y-12'></div>
		</div>
	);
}

export default Projects;
