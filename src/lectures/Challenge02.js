import React from 'react'

// DATE & TIME 
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

function Challenge02() {
  return (
    <>
    <div>
        <h2 style={{ background : 'lightblue'}}> Challenge 02 Component Date & Time </h2>

        <p> Today date is {currDate} </p>
        <p> Current Time is {currTime} </p>
    </div>
    </>
  )
}

export default Challenge02