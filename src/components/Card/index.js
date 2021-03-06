import { useHistory } from "react-router-dom";
import {
  StyledCardWrapper,
  StyledText,
  StyledMovieImage,
  StyledRate,
} from "./Card.style";


export const Card = ({ title, imgSrc, id, poster_path, rate}) => {
  const history = useHistory();
  return (
    <StyledCardWrapper onClick={() => history.push(`/detail/${id}`)}>
      {poster_path ? (
        <StyledMovieImage src={imgSrc + poster_path} alt={"Movie Poster"} />
      ) : (
        <StyledMovieImage
          src="https://via.placeholder.com/113x170.png?text=No+Image"
          alt={"No Poster"}
        />
      )}
      
        <StyledText>{title}</StyledText>
        <StyledRate>Rate: {rate} </StyledRate>
      
    </StyledCardWrapper>
  );
};