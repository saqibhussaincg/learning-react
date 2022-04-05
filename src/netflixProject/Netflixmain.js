import React from 'react'

// props arahay hain app.js se Netflixmain component mai se or original data parha hua hai Api Data walay component mai
function Netflixmain(props) {
    return (
        <>
        <h1 style={{ background : 'lightblue'}} > Netflix Mini Project </h1>
            <div className='cards'>
                <div className='card'>
                    <img src={props.imgsrc} alt='mypic' className='card_img'/>
                    <div className='card_info'>
                        <span className='card_category'>{props.title}</span>
                        <h3 className='card_title'>{props.seriesname} </h3>
                        <a href={props.links} target='_blank'> 
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Netflixmain