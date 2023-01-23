import React from 'react';
import { moneyPyramid } from './Data';
import { MoneyList, MoneyListItem, MoneyListItemAmount, MoneyListItemNumber, PyramidWrapper } from './style';

export default function Pyramid() {
  return (
    <>
        <PyramidWrapper>
          <MoneyList>
            {moneyPyramid.map((item)=>{
              return (
              <MoneyListItem active key={item.id}>
                <MoneyListItemNumber>{item.id}</MoneyListItemNumber>
                <MoneyListItemAmount>{item.amount}</MoneyListItemAmount>
              </MoneyListItem>)
            })}
          </MoneyList>
        </PyramidWrapper> 
    </>
  )
}
