import React, { useEffect, useState } from 'react';

import useSound from 'use-sound';
import correctSounds from "../../assets/sounds/correct.mp3";
import play from "../../assets/sounds/play.mp3";
import wrongSounds from "../../assets/sounds/wrong.mp3";
import { moneyPyramid } from '../Pyramid/Data';
import { Answer, Answers, Question, TriviaWrapper } from './style';
export default function Trivia({data,questionNumber,setStop,setQuestioinNumber,setEarned}) {
    const [question,setQuestion]=useState(null);
    const [selectAnswer,setSelectAnswer]=useState(null);
    const [beforAnimation,setBeforAnimation]=useState(0);
    const [lestPlay] =useSound(play)
    const [correctAnswer] =useSound(correctSounds)
    const [wrongAnswer] =useSound(wrongSounds)
    useEffect(()=>{
        setQuestion(data[questionNumber-1])
    },[data,questionNumber]);
    useEffect(()=>{  
        lestPlay();
    },[lestPlay]);
    const handleClick = (answer,e)=>{
        if(beforAnimation === 0){
        setBeforAnimation(answer.id);
        setTimeout(() => {
            setSelectAnswer(answer)
            setTimeout(() => {
                if(answer.correct){
                    correctAnswer();
                    setTimeout(() => {
                    setSelectAnswer(null)
                    setQuestioinNumber(prev=> prev + 1);
                    setBeforAnimation(0)
                    setEarned(Array.from(moneyPyramid).reverse()[questionNumber-1].amount)
                    }, 3000);
                }else{
                    setTimeout(() => { 
                    wrongAnswer();
                    setSelectAnswer(null)
                    setQuestioinNumber(1);
                    setBeforAnimation(0)
                    setStop(true)
                    }, 3000);
                }
            }, 3002);
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
