import React from "react";
import './App.css';
import './fonts/Genos-VariableFont_wght.ttf';


class AffiliationsRow extends React.Component {
    render() {
        return (
          <li>{this.props.row}</li>
        )
    }
}

class ApprenticesRow extends React.Component {
    render() {
      return (
        <li>{this.props.row}</li>
      )
    }
}

class MastersRow extends React.Component {
  render() {
    return (
      <li>{this.props.row}</li>
    )
  }
}

class StarWars extends React.Component {
    
    constructor() {
        super()
        this.state = {
            loadedCharacter: false,
            id: null,
            name: null,
            height: null, 
            homeworld: null,
            image: null,
            species: null,
            affiliations: [],
            masters: [],
            apprentices:[],
        }
    }
    
    
    getNewCharacter() {
        const randomName = Math.round(Math.random() * 88)
        const url = `https://akabab.github.io/starwars-api/api/id/${randomName}.json`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                this.setState({
                    id: data.id,
                    name: data.name,
                    height: data.height, 
                    homeworld: data.homeworld,
                    image: data.image,
                    species: data.species,
                    affiliations: data.affiliations,
                    masters: data.masters,
                    apprentices:data.apprentices,
                    loadedCharacter: true
                })
            })
    }
    render() {

        const affiliations = this.state.affiliations.map((row, i) => {
            return <AffiliationsRow key={i} row={row} />;
        });

        const masters = this.state.masters?.map((row, i) => {
            return <MastersRow key={i} row={row} />;
        });

        const apprentices = this.state.apprentices?.map((row, i) => {
          return <ApprenticesRow key={i} row={row} />;
      });
        
        return(
            <div className="main">
                <header>
                    <img className="logo" src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png" alt="SWlogo" width="40%"/>
                </header>
                <button 
                    type="button" 
                    onClick={() => this.getNewCharacter()} 
                    className="btn">
                    Randomize character
                </button>
                {
                    this.state.loadedCharacter &&
                        <div>
                            <img className="char-image" src={this.state.image} alt={this.state.name} />
                            <div className="character">
                                <div className="font-face-gm">
                                <h1>
                                    {this.state.name}
                                </h1>
                                <p>
                                    <span className="boldText">Height:</span> {this.state.height} m
                                </p>
                                <p>
                                    <span className="boldText">Home Planet:</span> {this.state.homeworld}
                                </p>
                                <p>
                                    <span className="boldText">Species:</span> {this.state.species}
                                </p>
                                <p>
                                    <span className="boldText">Affiliations:</span>
                                </p>
                                <ul>
                                    {affiliations}
                                </ul>
                                <p>
                                    <span className="boldText">Masters:</span>
                                </p>
                                <ul>
                                    {masters}
                                </ul>
                                <p>
                                    <span className="boldText">Apprentices:</span>
                                </p>
                                <ul>
                                    {apprentices}
                                </ul>
                                </div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
          <StarWars />
      </header>
    </div>
  );
}


export default App;
