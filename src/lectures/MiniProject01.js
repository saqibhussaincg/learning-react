import React from 'react'


let curDate = new Date();
curDate = curDate.getHours();
const cssStyle = { }; 

let greetings = '';

if( curDate >= 1 && curDate < 12){
    greetings = 'good morning';
    cssStyle.color = 'green';
    
}
else if( curDate >= 12 && curDate < 19){
    greetings = 'good after noon';
    cssStyle.color = 'orange';
}
else{
    greetings = 'good night';
    cssStyle.color = 'pink';
}
function MiniProject01() {
  return (
      <>
    <div>
        <h1 style={{ background : 'lightblue'}}>Mini Project 01</h1>
   
        <h1> Hello Sir, <span style={cssStyle}>{greetings}</span> </h1>
    </div>
    </>
  )
}

export default MiniProject01