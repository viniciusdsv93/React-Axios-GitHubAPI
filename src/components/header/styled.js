import styled from "styled-components";

export const HeaderDiv = styled.div`
	background-color: #eee;
	border-radius: 10px;
	height: auto;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 15px;
	padding: 15px;
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);

	@media (max-width: 500px) {
		flex-direction: column;
	}
`;

export const Input = styled.input`
	padding: 5px 15px;
	background-color: #fff;
	width: 80%;
	border-radius: 5px;
	border: none;
`;

export const Button = styled.button`
	background-color: #12bd48;
	color: #fff;
	border-radius: 5px;
	border: none;
	flex: 1;
	padding: 5px 15px;
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
`;
