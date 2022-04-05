import React from 'react'
import {add, minus, multiply} from './Calculator'
function CalcculatorIndex() {
  return (
      <>
    <div>
    <h1 style={{ background : 'lightblue'}}> Simple Calculator </h1>
    <p> Passing parameter from JS to index file catching argument </p>
    <ul>
        <li> { add ( 4, 4 ) } </li>
        <li> { minus ( 4, 4 ) } </li>
        <li> { multiply ( 4, 4 ) } </li>
    </ul>
    </div>
    </>
  )
}

export default CalcculatorIndex