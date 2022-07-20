import React from 'react'
import Character from './components/Character';

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
      <>
			<h1>Game of thrones</h1>
      
      {/* {console.log("this.state", this.state)} */}
      
      {this.state.characters.map((character) => (
        
        <Character 
          fullName = {character.fullName}
          title = {character.title}
          image = {character.imageUrl}
        />
      ))}
      </>
    )
	}
}

export default App