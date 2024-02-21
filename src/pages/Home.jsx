import React from 'react';
import Header from '../components/Header';
import LetterList from '../components/LetterList';
import Profile from './Profile';

export default function Home() {
	return (
		<div>
			<Header />
			<LetterList />
		</div>
	);
}
