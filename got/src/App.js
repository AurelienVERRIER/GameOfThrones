import React from 'react'
import Character from './components/Character';

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      characters: []
    }
  }

  async componentDidMount () {
    const request = await fetch("https://thronesapi.com/api/v2/Characters");
    console.log("request", request);
    const readableArray = await request.json();
    console.log("readableArray", readableArray);
    this.setState({
      characters: readableArray
    })
    console.log("this.state.characters", this.state.characters);
  }

  

	render() {
		return(
      <>
			<h1>Game of thrones</h1>
      <Character/>
      </>
    )
	}
}

export default App