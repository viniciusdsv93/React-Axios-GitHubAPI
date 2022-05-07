import React, { useState, useEffect } from "react";
import Header from "../header";
import ProfileCard from "../profileCard";
import ReposCard from "../reposCard";
import * as S from "./styled";
import { GithubContext } from "../../context/context";

function Layout() {
	const [userData, setUserData] = useState({
		showRepos: false,
		name: "",
		username: "",
		followers: 0,
		following: 0,
		avatarUser: "",
		repos: [],
	});

	useEffect(() => {
		userData.repos.map((item) => console.log(item));
	}, [userData.repos]);

	return (
		<S.Wrapper>
			<GithubContext.Provider value={{ userData, setUserData }}>
				<Header />
				<ProfileCard />
				{userData.showRepos === false ? <div></div> : <ReposCard />}
			</GithubContext.Provider>
		</S.Wrapper>
	);
}

export default Layout;
