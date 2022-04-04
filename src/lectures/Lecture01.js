import React from 'react'


const fname = 'saqib';
const lname = 'hussain'
const img1 = "https://picsum.photos/200";
const link = "https://picsum.photos/";

function Lecture01() {
  return (
    <>

    <div>
    <h1 style={{ background : 'pink'}}>my name is {fname} </h1>
    </div>

    <h2  style={{ background : 'lightblue'}}> Template Literals </h2>

    <div>
      <h1>{ `my first name is ${fname} and last name is ${lname}` }</h1>
    </div>

    <div>
      <h3 contentEditable='true'> Click here to edit </h3>
      <img src="https://picsum.photos/200/300" alt='random images' />
      <img src={img1} />
      <a href={link} target='_blank'> Click Me To Go Lorem Website </a>
    </div>
    
    </>
  )
}

export default Lecture01