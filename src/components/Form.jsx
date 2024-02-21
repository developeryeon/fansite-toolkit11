import React from 'react';
import styled from 'styled-components';

export default function Form({ onSubmitHandler }) {
	return (
		<FormContainer onSubmit={onSubmitHandler}>
			<FormInput>
				<FormLabel>닉네임</FormLabel>
				<UserID type="text" placeholder="닉네임을 적어보세요" maxLength={10} name="nickname"></UserID>
			</FormInput>
			<FormInput>
				<FormLabel>내용</FormLabel>
				<UserMsg type="text" placeholder="최대 190자 이내로 적어주세요" maxLength={190} name="content"></UserMsg>
			</FormInput>
			<FormInput>
				<FormSelectClick>어떤 멤버에게 보낼까요?</FormSelectClick>
				<FormSelectName name="writedTo">
					<option name="유재석" value={'유재석'}>
						유재석
					</option>
					<option name="하하" value={'하하'}>
						하하
					</option>
					<option name="주우재" value={'주우재'}>
						주우재
					</option>
					<option name="이이경" value={'이이경'}>
						이이경
					</option>
					<option name="박진주" value={'박진주'}>
						박진주
					</option>
					<option name="이미주" value={'이미주'}>
						이미주
					</option>
				</FormSelectName>
			</FormInput>
			<FormSubmitBtn type="submit">등록하기</FormSubmitBtn>
		</FormContainer>
	);
}

const FormContainer = styled.form`
	background-color: palevioletred;
	color: #fff;
	width: 700px;
	padding: 1.7rem;
	border-radius: 12px;
	margin: 3.7rem;
	box-shadow: 5px 8px 10px gray;
`;

const FormInput = styled.section`
	display: flex;
	margin-bottom: 0.85rem;
`;

const FormLabel = styled.label`
	width: 100px;
	display: flex;
	align-items: center;
	font-size: 22px;
	font-family: 'BookkGothic-Bd';
`;

const UserID = styled.input`
	width: 100%;
	padding: 10px 12px;
	border-radius: 10px;
	border: none;
	margin: 10px;
`;

const UserMsg = styled.textarea`
	width: 100%;
	height: 6.5rem;
	border-radius: 10px;
	border: none;
	resize: none;
	margin: 10px;
`;

const FormSelectClick = styled.label`
	font-size: 22px;
	font-family: 'BookkGothic-Bd';
`;

const FormSelectName = styled.select`
	display: flex;
	width: 240px;
	margin-left: 50px;
	height: 35px;
	text-align: center;
	border-radius: 5px;
`;

const FormSubmitBtn = styled.button`
	display: flex;
	background-color: #fff;
	border-radius: 5px;
	width: 90px;
	height: 35px;
	align-items: center;
	justify-content: center;
	border: none;
	cursor: pointer;
	&:hover {
		background-color: lightskyblue;
		color: #fff;
	}
`;
