import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const TriviaWrapper = styled("div")`
label: TriviaWrapper;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`;
export const Question = styled("div")`
label: Question;
width: 80%;
background: linear-gradient(#100241, black);
border: 2px solid white;
text-align: center;
padding: 20px;
border-radius: 10px;
font-size: 20px;
`;
export const Answers = styled("div")`
label: Answers;
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
`;
export const Answer = styled("div")`
label: Answer;
width: 40%;
padding: 10px;
text-align: center;
background: linear-gradient(#0e0124, #22074d);
border: 1px solid white;
border-radius: 15px;
font-size: 20px;
font-weight: 300;
cursor: pointer;
margin: 0 10px 20px 10px;
&:hover {
    background: mediumblue;
  }

  ${(props) =>
    props.correct
      ? css`
          animation: ${correct} 3s ease forwards;
        `
      : props.wrong
      ? css`
          animation: ${wrong} 3s ease forwards;
        `
      : props.active
      ? `background: mediumblue;`
      : `background:linear-gradient(#0e0124, #22074d);`};
`;

const correct = keyframes`
  0%,22%,42% {
    background: mediumblue;
  }
  20%,40%,60% {
    background: linear-gradient(#0e0124, #22074d);
  }
  62%,100% {
    background: green;
  }
`;
const wrong = keyframes`
  0%,22%,42% {
    background: mediumblue;
  }
  20%,40%,60% {
    background: linear-gradient(#0e0124, #22074d);
  }
  62%,100% {
    background: crimson;
  }
`;
