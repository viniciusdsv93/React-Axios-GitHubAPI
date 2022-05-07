import styled from "styled-components";

export const ProfileCardDiv = styled.div`
	background-color: #eee;
	border-radius: 10px;
	height: auto;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 20px;
`;

export const ProfileCardData = styled.div`
	background-color: #fff;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 15px;
	gap: 15px;
`;

export const ProfileAvatar = styled.img`
	width: 100px;
	border-radius: 50%;
	margin: 10px;
`;

export const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 12px;
	padding: 10px 0;
`;

export const StatusCount = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 10px;
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5px;
	}
`;
