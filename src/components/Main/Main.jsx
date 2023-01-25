import React, { useState } from 'react';
import Trivia from '../Trivia';
import { data } from "./Data";
import { Bottom, MainWrapper, Timer, Top } from './style';
export default function Main({setQuestioinNumber,questionNumber}) {
      const [timeOut,setTimeOut] =useState(false);
  return (
    <>
        <MainWrapper>
          <Top>
            <Timer>30</Timer>
          </Top>
          <Bottom>
            <Trivia data={data} setTimeOut={setTimeOut} setQuestioinNumber={setQuestioinNumber} questionNumber={questionNumber}/>
          </Bottom>
        </MainWrapper>
    </>
  )
}
