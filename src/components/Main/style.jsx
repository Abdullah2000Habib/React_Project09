import styled from "@emotion/styled";
import mainImg from "../../assets/bg.jpg";

export const MainWrapper = styled("div")`
label =MainWrapper;
width: 75%;
background:linear-gradient(to bottom ,rgba(0,0,0,0),#020230),url(${mainImg}) center;
display:flex;
flex-direction: column;
position: relative;
`
export const H1 = styled("h1")`
label =H1;
width: fit-content;
padding: 10px;
position: absolute;
color: black;
left: 50%;
top: 50%;
transform:translate(-50%,-50%);
background-color: white;
border-radius: 8px;
`
export const Top = styled("div")`
label =Top;
height: 50%;
position: relative;
`
export const Timer = styled("div")`
label =Timer;
width: 70px;
height: 70px;
border-radius: 50%;
border: 5px solid #fff;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
font-size: 30px;
font-weight: 700;
bottom: 10px;
left:80px;
`
export const Bottom = styled("div")`
label =Bottom;
height: 50%;
`