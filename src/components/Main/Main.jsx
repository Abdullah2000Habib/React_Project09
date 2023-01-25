import React, { useState } from 'react';
import Timer from '../Timer/Timer';
import Trivia from '../Trivia';
import { data } from "./Data";
import { Bottom, H1, MainWrapper, Timerr, Top } from './style';
export default function Main({setQuestioinNumber,questionNumber}) {
      const [stop,setStop] =useState(false);
      const [earned,setEarned] =useState("$ 0");
  return (
    <>
        <MainWrapper>
          {stop?<H1>You Earned : {earned}</H1>:<> 
          <Top>
            <Timerr>
              <Timer questionNumber={questionNumber} setStop={setStop} />
            </Timerr>
          </Top>
          <Bottom>
            <Trivia data={data} setEarned={setEarned} setStop={setStop} setQuestioinNumber={setQuestioinNumber} questionNumber={questionNumber}/>
          </Bottom></>}
        </MainWrapper>
    </>
  )
}
