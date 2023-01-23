import React from 'react';
import Main from './Main/Main';
import Pyramid from './Pyramid/Pyramid';
import { Wrapper } from "./style";

export default function Home() {
return (
    <>
        <Wrapper>
            <Main/>
            <Pyramid/>
        </Wrapper>
    </>
)
}
