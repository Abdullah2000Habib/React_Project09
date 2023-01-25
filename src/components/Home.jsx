import React, { useState } from 'react';
import Main from './Main/Main';
import Pyramid from './Pyramid/Pyramid';
import { Wrapper } from "./style";

export default function Home() {
const [questionNumber,setQuestioinNumber] =useState(1);
return (
    <>
        <Wrapper>
            <Main setQuestioinNumber={setQuestioinNumber} questionNumber={questionNumber} />
            <Pyramid questionNumber={questionNumber}/>
        </Wrapper>
    </>
)
}
