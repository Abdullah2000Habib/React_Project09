import React, { useRef } from 'react';
import { StartButton, StartInput, StartWrapper } from './style';

export default function Start({setUserName}) {
    const inputRef = useRef();
    const clickHandler = ()=>{
        inputRef.current.value && setUserName(inputRef.current.value);
    }
return (
    <>
        <StartWrapper>
            <StartInput ref={inputRef} placeholder='Enter Your Name'/>
            <StartButton onClick={clickHandler}>Start</StartButton>
        </StartWrapper>
    </>
)
}
