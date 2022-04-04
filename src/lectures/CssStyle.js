import React from 'react'
import '../index.css';


const heading = {
    background : 'orange',
    color : 'black',
    fontFamily: 'Baloo Bhaina 2',
}

function CssStyle() {
  return (
      <>

    <div>
        <h1 style={{ background : 'lightblue '}}> CSS Styling</h1>
        <p>Adding google fonts link in index.html file</p> 
        <h2 className='headingtwo'> this is heading number 2 </h2>
        

        <h2 style={heading}>Inline CSS</h2> 
    </div>
  
    </>
  )

}

export default CssStyle