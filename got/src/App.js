import React from 'react'
import Character from './components/Character';
import './App.css';

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      characters: [],
      name: ""
    }
  }

  async componentDidMount () {
    const request = await fetch("https://thronesapi.com/api/v2/Characters");
    // console.log("request", request);
    const readableArray = await request.json();
    // console.log("readableArray", readableArray);
    this.setState({
      characters: readableArray
    })
    // console.log("this.state.characters", this.state.characters);
  
  }

  

	render() {
    console.log(this.state.characters)
		return(
      <div className='page'>
        <h1>Game of thrones</h1>
        {/* {console.log("this.state", this.state)} */}
        
        <div className='wrapper'>
          {this.state.characters.map((character) => (
            
          <div className='presentation'>
              <Character 
              image = {character.imageUrl}
              fullName = {character.fullName}
              title = {character.title}
              />
          </div>
          
          ))}
        </div>
      </div>
    )
	}
}

export default App