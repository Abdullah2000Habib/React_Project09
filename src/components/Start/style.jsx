import styled from "@emotion/styled";

export const StartWrapper = styled("div")`
label:StartWrapper;
  width: 250px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`
export const StartInput = styled("input")`
label:StartInput;
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  &:focus {
      outline: none;
  }
`
export const StartButton = styled("button")`
label:StartButton;
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
`



