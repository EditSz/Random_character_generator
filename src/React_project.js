
//import logo from './logo.svg';
import './App.css';
//import Item from './MyItem';

import React from 'react';



class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter:false,
      name: null,
      height: null,
      homeworld: null,
      image:null,
    }
  }

  getNewCharacter() {
    const randomName = Math.ceil(Math.random() * 88)
    //console.log("Get new character from a button")
    const url = `https://akabab.github.io/starwars-api/api/id/${randomName}.json`
    // const randomImage = `https://vignette.wikia.nocookie.net/starwars/images/${randomImage}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        name: data.name,
        height: data.height,
        homeworld: data.homeworld,
        image: data.image,
        loadedCharacter: true,
      })
    })
      
    
  }
  

  render () {
    return (
     <div>
      {
        this.state.loadedCharacter &&
        <div>
  
          <h1>{this.state.name}</h1>
          <p>{this.state.height} cm</p>
          <p><a href= {this.state.homeworld}>Homeworld:</a></p>
          <img src={this.state.image} width="350px" alt="image"/>
         
        </div>

      }
      
      <button 
        type="button" 
        onClick={() => this.getNewCharacter()}
        className="btn"
        >Randomize character
        </button>
     </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
       
      </header>
    </div>
  );
}

