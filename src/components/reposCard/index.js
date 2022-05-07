import React, { useContext } from "react";
import ReposItem from "../reposItem";
import { GithubContext } from "../../context/context";
import * as S from "./styled";

const ReposCard = () => {
	const context = useContext(GithubContext);
	return (
		<S.ReposDiv>
			{context.userData.repos.map((item) => {
				return <ReposItem name={item.name} fullName={item.full_name} linkToRepo={item.html_url} />;
			})}
		</S.ReposDiv>
	);
};

export default ReposCard;
