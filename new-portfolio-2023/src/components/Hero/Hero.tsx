import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {};

function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			'Welcome to my portfolio',
			'I am a full stack developer',
			'Innovative and creative',
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<>
			<h1>
				<span>{text}</span>
				<Cursor cursorColor='#F7AB0A' />
			</h1>
		</>
	);
}

export default Hero;
