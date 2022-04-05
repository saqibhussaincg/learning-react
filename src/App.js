
import './App.css';
import Challenge02 from './lectures/Challenge02';
import CssStyle from './lectures/CssStyle';
import Lecture01 from './lectures/Lecture01';
import MiniProject01 from './lectures/MiniProject01';
import Netflixmain from './netflixProject/Netflixmain';
import CalcculatorIndex from './simpleCalculator/CalcculatorIndex';
import Apidata from './netflixProject/Apidata' 


function App() {
  return (
    <>


    <div className="App">
      <Lecture01 />
      <Challenge02 />
      <CssStyle />
      <MiniProject01 />
      <CalcculatorIndex />
      

      <Netflixmain imgsrc={Apidata[1].imgsrc}  // props netflixmain k component mai ja rahay hain or api walay component se data araha hai
                  title= {Apidata[1].title}
                  seriesname = {Apidata[1].seriesname}
                  links = {Apidata[1].links}
                    
      />


      { 
        Apidata.map ( ( val ) => {  // MAP laga rahay hain tou object pass nahi karenge kyun k map ka mtlb hota hai saray data dikhao saray array dikhao
          return (
            <Netflixmain imgsrc={val.imgsrc} 
                  title= {val.title}
                  seriesname = {val.seriesname}
                  links = {val.links}
                    
            />
          )
        })
      }

      
      

      {/* <Netflixmain imgsrc={Apidata[0].imgsrc}
                  title= {Apidata[0].title}
                  seriesname = {Apidata[0].seriesname}
                  links = {Apidata[0].links}
                    
      />
    */}

     
    </div>
    </>

  );
}

export default App;

