import React, { useContext } from "react";
import { GithubContext } from "../../context/context";
import Button from "../button";
import api from "../../services/api";
import * as S from "./styled";

const ProfileCard = () => {
	const context = useContext(GithubContext);

	const getUserRepos = () => {
		api.get(`/users/${context.userData.username}/repos`).then((response) => {
			context.setUserData({
				...context.userData,
				repos: response.data,
				showRepos: true,
			});
		});
	};

	return (
		<S.ProfileCardDiv>
			<S.ProfileCardData>
				<S.ProfileAvatar src={context.userData.avatarUser} alt="User's avatar" />
				<S.ProfileInfo>
					<h3>Name: {context.userData.name}</h3>
					<h4>Username: {context.userData.username}</h4>
					<S.StatusCount>
						<div>
							<h4>Followers</h4>
							<p>{context.userData.followers}</p>
						</div>
						<div>
							<h4>Following</h4>
							<p>{context.userData.following}</p>
						</div>
					</S.StatusCount>
					<Button
						onClickHandler={() => {
							getUserRepos();
							console.log(context.userData.name);
						}}
						content={"Show repositories"}
					/>
				</S.ProfileInfo>
			</S.ProfileCardData>
		</S.ProfileCardDiv>
	);
};

export default ProfileCard;
