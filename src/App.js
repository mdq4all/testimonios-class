import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1> 
          <Testimonio 
            nombre='Emma Bostian'
            pais='Sweden'
            imagen='3'
            empresa='Spotify'
            cargo='Software Engineer'
            testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."/>
          <Testimonio 
            nombre='Sarah Chima'
            pais='Nigeria'
            imagen='2'
            empresa='ChatDesk'
            cargo='Software Engineer'
            testimonio="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."/>
           <Testimonio 
            nombre='Shawn Wang'
            pais='Singapore'
            imagen='1'
            empresa='Amazon'
            cargo='Software Engineer'
            testimonio="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."/>
        </div>
      </div>
    );
  }
}

export default App;
