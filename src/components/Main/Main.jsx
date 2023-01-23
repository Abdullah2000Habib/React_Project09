import React from 'react';
import Trivia from '../Trivia';
import { Bottom, MainWrapper, Timer, Top } from './style';

export default function Main() {
  return (
    <>
        <MainWrapper>
          <Top>
            <Timer>30</Timer>
          </Top>
          <Bottom>
            <Trivia/>
          </Bottom>
        </MainWrapper>
    </>
  )
}
