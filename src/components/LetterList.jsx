import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LetterCard from './LetterCard';
import Form from './Form';
import styled from 'styled-components';

export default function LetterList() {
	const navigate = useNavigate();
	const [comment, setComment] = useState([]);

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const createdAt = new Date().toLocaleString();
		const nickname = e.target.nickname.value;
		const content = e.target.content.value;
		const writedTo = e.target.writedTo.value;

		if (!nickname || !content) {
			return null;
		}

		const commentObj = { id: crypto.randomUUID(), createdAt, nickname, content, writedTo };

		if (commentObj) {
			setComment([commentObj, ...comment]);
			localStorage.setItem('comments', JSON.stringify([commentObj, ...comment]));
		}

		e.target.reset();
	};

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('comments')) || [];

		setComment(data);
	}, []);

	const handleCardClick = (id) => {
		navigate(`/detail/${id}`);
	};

	return (
		<SectionList>
			{/* <Form onSubmitHandler={onSubmitHandler} /> */}
			<Form onSubmitHandler={onSubmitHandler} />
			<ListWrapper>
				{comment.map((card) => (
					<div key={card.id} onClick={() => handleCardClick(card.id)}>
						<LetterCard id={card.id} nickname={card.nickname} createdAt={card.createdAt} writedTo={card.writedTo} content={card.content} />
					</div>
				))}
				{/* {comment.map((card) => (
					<Link to={`detail/${card.id}`} key={card.id}>
						<LetterCard id={card.id} nickname={card.nickname} createdAt={card.createdAt} writedTo={card.writedTo} content={card.content} />
					</Link>
				))} */}
			</ListWrapper>
		</SectionList>
	);
}

const SectionList = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ListWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 20px;
	width: 680px;
	border-radius: 5px;
	align-items: center;
	justify-content: center;
`;
