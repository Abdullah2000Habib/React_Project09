import React, { useEffect, useState } from 'react';

import { moneyPyramid } from '../Pyramid/Data';
import { Answer, Answers, Question, TriviaWrapper } from './style';
export default function Trivia({data,questionNumber,setStop,setQuestioinNumber,setEarned}) {
    const [question,setQuestion]=useState(null);
    const [selectAnswer,setSelectAnswer]=useState(null);
    const [beforAnimation,setBeforAnimation]=useState(0);
    useEffect(()=>{
        setQuestion(data[questionNumber-1])
    },[data,questionNumber]);

    const handleClick = (answer,e)=>{
        if(beforAnimation === 0){
        setBeforAnimation(answer.id);
        setTimeout(() => {
            setSelectAnswer(answer)
            setTimeout(() => {
                if(answer.correct){
                    setSelectAnswer(null)
                    setQuestioinNumber(prev=> prev + 1);
                    setBeforAnimation(0)
                    setEarned(Array.from(moneyPyramid).reverse()[questionNumber-1].amount)
                }else{
                    setSelectAnswer(null)
                    setQuestioinNumber(1);
                    setBeforAnimation(0)
                    setStop(true)
                }

            }, 3010);
        }, 3000 );
        }
    }
return (
    <>
        <TriviaWrapper>
            <Question>{question?.question}</Question>
            <Answers >
                {question?.answers.map((item)=>{
                    return(<Answer   key={item.id} active={beforAnimation === item.id}  onClick={(e)=>handleClick(item,e)} correct={item.id === selectAnswer?.id?selectAnswer.correct:'' } wrong={item.id === selectAnswer?.id?!selectAnswer.correct:'' } >{item.text}</Answer>)
                })
                }
            </Answers>
        </TriviaWrapper>
    </> 
)
}
