import React, { useState } from 'react';
import { moneyPyramid } from './Data';
import { MoneyList, MoneyListItem, MoneyListItemAmount, MoneyListItemNumber, PyramidWrapper } from './style';

export default function Pyramid() {
  const [questionNumber,setQuestioinNumber] =useState(1);
  return (
    <>
        <PyramidWrapper>
          <MoneyList>
            {moneyPyramid.map((item)=>{
              return (
              <MoneyListItem  key={item.id}  active= {questionNumber === item.id ?true:false}>
                <MoneyListItemNumber>{item.id}</MoneyListItemNumber>
                <MoneyListItemAmount>{item.amount}</MoneyListItemAmount>
              </MoneyListItem>)
            })}
          </MoneyList>
        </PyramidWrapper> 
    </>
  )
}
