import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {};

function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			'Hi, my name is Maria Khan',
			'LoveToIceSkate.tsx',
			'<InnovativeAndCreative />',
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<>
			<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
				<BackgroundCircles />
				<Image
					className='relative rounded-full h-32 w-32 mx-auto object-cover'
					src='/selfie.jpg'
					width={500}
					height={500}
					alt='photo of maria khan'
				/>
				<div className='z-20'>
					<h2 className='mt-5 text-sm uppercase text-gray-400 pb2 tracking-[15px]'>
						Software Engineer
					</h2>
					<h1 className='text-5xl lg:text-5xl font-semibold scroll-px-10'>
						<span className='mr-5'>{text}</span>
						<Cursor cursorColor='#F7AB0A' />
					</h1>

					<div className='pt-5'>
						<Link href='#about'>
							<button className='heroButton'>About</button>
						</Link>
						<Link href='#experience'>
							<button className='heroButton'>Experience</button>
						</Link>
						<Link href='#skills'>
							<button className='heroButton'>Skills</button>
						</Link>
						<Link href='#projects'>
							<button className='heroButton'>Projects</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero;
