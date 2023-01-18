import './App.css';
import React from 'react';

class AffiliationsRow extends React.Component {
    render () {
        return <li>{this.props.row}</li>;
    }
}

class MastersRow extends React.Component{
    render() {
        return <li>{this.props.row}</li>;
    }
}

class ApprenticesRow extends React.Component{
    render () {
        return <li>{this.props.row}</li>;
    }
}
class StarWars extends React.Component {
    constructor() {
        super()
        this.state = {
            image:null,
            name:null,
            height:null,
            homeworld:null,
            affiliations: [],
            masters:[],
            apprentices:[],
            
        }
    }


getNewCharacter(){
    const randomName = Math.ceil(Math.random() *88)
    const url=`https://akabab.github.io/starwars-api/api/id/${randomName}.json`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        this.setState({
            image:data.image,
            name:data.name,
            height:data.height,
            homeworld:data.homeworld,
            affiliations:data.affiliations,
            masters:data.masters,
            apprentices:data.apprentices,
            loadedCharacter: true
        })
    })
}

    render(){

        const affiliations = this.state.affiliations.map((row,i) => {
            return <AffiliationsRow key={i} row={row} />;
        });

        const masters = this.state.masters.map((row,i) => {
            return <MastersRow key={i} row={row} />;
        });

        const apprentices = this.state.apprentices.map((row,i) => {
            return <ApprenticesRow key={i} row={row} />;
        });

        return(
            <div className="main">
                        <header><img className="logo" src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-4-logo-png-transparent.png" alt="SWlogo"/>
                        </header>
                {
                    this.state.loadedCharacter &&
                    <div>
                        
                        <img src={this.state.image} width="500px" alt="image"/>
                        <h1>{this.state.name}</h1>
                        <p>{this.state.height}</p>
                        <p>Home world:{this.state.homeworld}</p>
                        <p>{this.state.affiliations}</p>
                        <p>{this.state.masters}</p>
                        <p>{this.state.apprentices}</p>


                        
                    </div>
                }

                <button type="button" className="btn" onClick={() => this.getNewCharacter()}
                >Randomize character
                </button>
            </div>
        )
    }
}   

function App() {
    return(
        <div className="App">
        <header className="App-header">
        <StarWars />
        </header>

        </div>
    )
}

export default App;