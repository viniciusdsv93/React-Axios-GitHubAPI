import React from "react";
import Button from "../button";
import * as S from "./styled";

const ReposItem = ({ name, linkToRepo }) => {
	return (
		<S.RepoItemDiv>
			<h2>
				Repository name: <span>{name}</span>
			</h2>
			<a href={linkToRepo} target='_blank'>
				<Button content={"Open repository"} />
			</a>
		</S.RepoItemDiv>
	);
};

export default ReposItem;
