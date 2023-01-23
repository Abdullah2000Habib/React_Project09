import React from 'react';
import { Bottom, MainWrapper, Timer, Top } from './style';

export default function Main() {
  return (
    <>
        <MainWrapper>
          <Top>
            <Timer>30</Timer>
          </Top>
          <Bottom>Questions and Answers</Bottom>
        </MainWrapper>
    </>
  )
}
