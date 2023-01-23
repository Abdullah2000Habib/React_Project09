import styled from "@emotion/styled";

export const PyramidWrapper = styled("div")`
label : PyramidWrapper;
width: 25%;
display: flex;
align-items: center;
justify-content: center;
`
export const MoneyList = styled("ul")`
label : MoneyList;
list-style: none;
width: 100%;
padding: 20px;
`
export const MoneyListItem = styled("li")`
label : MoneyListItem;
display: flex;
align-items: center;
background-color: ${ (props) => (props.active ? `teal` :`transparent` )};
border-radius: 5px;
padding: 5px;
`
export const MoneyListItemNumber = styled("span")`
label : MoneyListItemNumber;
font-size: 18px;
font-weight: 100;
width: 30%;
`
export const MoneyListItemAmount = styled("span")`
label : MoneyListItemAmount;
font-size: 20px;
font-weight: 300;
`
