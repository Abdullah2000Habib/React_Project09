import React, { useState } from 'react';
import Main from './Main/Main';
import Pyramid from './Pyramid/Pyramid';
import Start from './Start';
import { Wrapper } from "./style";

export default function Home() {
const [questionNumber,setQuestioinNumber] =useState(1);
const [userName,setUserName] =useState(null);
return (
    <>
    <Wrapper>
    {userName?(  <>
            <Main setQuestioinNumber={setQuestioinNumber} questionNumber={questionNumber} />
            <Pyramid questionNumber={questionNumber}/></>
        ): <Start setUserName ={setUserName}/>
    }
        </Wrapper>
    </>
)
}
