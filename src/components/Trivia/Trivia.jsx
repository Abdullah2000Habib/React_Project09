import React, { useEffect, useState } from 'react';
import { Answer, Answers, Question, TriviaWrapper } from './style';

export default function Trivia({data,questionNumber,setTimeOut,setQuestioinNumber}) {
    const [question,setQuestion]=useState(null);
    const [selectAnswer,setSelectAnswer]=useState(null);
    useEffect(()=>{
        setQuestion(data[questionNumber-1])
    },[data,questionNumber])
    const handleClick = (answer)=>{
        setSelectAnswer(answer)
    }
return (
    <>
        <TriviaWrapper>
            <Question>{question?.question}</Question>
            <Answers>
                {question?.answers.map((item)=>{
                    return(<Answer active={selectAnswer === item} onClick={()=>handleClick(item)} >{item.text}</Answer>)
                })}
            </Answers>
        </TriviaWrapper>
    </>
)
}
