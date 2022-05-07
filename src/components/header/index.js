import React, { useContext, useState } from "react";
import { GithubContext } from "../../context/context";
import api from "../../services/api";
import Button from "../button";
import * as S from "./styled";

const Header = () => {
	const context = useContext(GithubContext);
	const [inputValue, setInputValue] = useState("");

	const getUserData = () => {
		api.get(`/users/${inputValue}`).then((response) => {
			context.setUserData({
				showRepos: false,
				name: response.data.name,
				username: response.data.login,
				followers: response.data.followers,
				following: response.data.following,
				avatarUser: response.data.avatar_url,
				repos: [],
			});
		});
	};

	return (
		<S.HeaderDiv>
			<S.Input
				type='text'
				placeholder="Enter the user's name..."
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<Button
				onClickHandler={() => {
					getUserData();
					setInputValue("");
				}}
				content={"Search"}
			/>
		</S.HeaderDiv>
	);
};

export default Header;
