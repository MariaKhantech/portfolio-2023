import { motion } from 'framer-motion';

type Props = {};

function ExperienceCard({}: Props) {
	return (
		<article
			className='flex flex-col rounded-lg items-center space-y-7 
        flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] 
		p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-300 overflow-hidden'
		>
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.5 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className='w-32 h-32 rounded-full md:rounded-full xl:h-[200px] xl:w-[200px]
                object-cover object-center'
				src='/libertymutual.png'
				alt='Picture of the author'
			/>

			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>Software Engineer</h4>
				<p className='font-bold text-2xl mt-1'>Liberty Mutual</p>
				<div className='flex space-x-2 my-2'>
					{/* tech used */}
					<img
						src='https://miro.medium.com/v2/resize:fit:600/1*W02WEmR0_JeJXfLWN2zHwQ.png'
						alt=''
						className='w-10 h-10'
					/>
					<img
						src='https://cloudacademy.com/wp-content/uploads/2017/03/azure-apps.png'
						alt=''
						className='w-8 h-8'
					/>
					<img
						src='https://files.raycast.com/nwt9ncojkvwmjfkaada8upafvpnu'
						alt=''
						className='w-8 h-8'
					/>
				</div>
				<p className='uppercase py-5 text-gray-300'>
					Started 01/1/2021-PRESENT
				</p>
				<ul className='list-disc space-y-4 ml-5 text-lg'>
					<li>
						Summary points Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.
					</li>
					<li>
						Summary points Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.{' '}
					</li>
					<li>
						{' '}
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Summary points
					</li>
					<li>
						Summary points Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.{' '}
					</li>
					<li>
						Summary points Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.{' '}
					</li>
				</ul>
			</div>
		</article>
	);
}

export default ExperienceCard;
