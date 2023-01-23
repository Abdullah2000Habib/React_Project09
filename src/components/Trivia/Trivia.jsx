import React from 'react';
import { Answer, Answers, Question, TriviaWrapper } from './style';

export default function Trivia() {
return (
    <>
        <TriviaWrapper>
            <Question>What's the best youtube channel??</Question>
            <Answers>
                <Answer correct={true}>Lama Dev</Answer>
                <Answer wrong={true}>Lama Dev</Answer>
                <Answer>Lama Dev</Answer>
                <Answer>Lama Dev</Answer>
            </Answers>
        </TriviaWrapper>
    </>
)
}
