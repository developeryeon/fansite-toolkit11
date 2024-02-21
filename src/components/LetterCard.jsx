import styled from 'styled-components';

export default function LetterCard({ createdAt, nickname, content, writedTo }) {
	return (
		<ListWrap>
			<ListArticle>
				<h3>{nickname}</h3>
				<p>{createdAt}</p>
				<p>{writedTo}</p>
			</ListArticle>
			<ListText>{content}</ListText>
		</ListWrap>
	);
}

const ListWrap = styled.li`
	display: flex;
	flex-direction: column;
	color: #fff;
	font-family: 'BookkGothic-Bd';
	font-size: 20px;
	margin: 10px;
	padding: 2rem;
	width: 650px;
	border-radius: 10px;
	box-shadow: 1px 8px 5px lightgray;
	background-color: black;
	cursor: pointer;
	&:hover {
		transition: all 0.5s;
		transform: scale(1.1);
	}
`;

const ListArticle = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 12px;
`;

const ListText = styled.div`
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;
