import React from 'react';
import { moneyPyramid } from './Data';
import { MoneyList, MoneyListItem, MoneyListItemAmount, MoneyListItemNumber, PyramidWrapper } from './style';

export default function Pyramid({questionNumber}) {

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
