import React from 'react';

import NavBar from './components/Navbar'
import MainContentDisplay from './components/MainContent/MainContentDisplay'
//Mock Data. For testing purposes only
import jsonResponse from './TestData/testData'
import './App.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = jsonResponse
  }
  
  epicSelectHandler = (prop) => {
     let SelectedEpic = {...this.state.SelectedEpic}
     SelectedEpic.Id = prop.Id
     SelectedEpic.Title = prop.Title
     
     this.setState({SelectedEpic})
  }

  render() {
    let SelectedEpic = this.state.SelectedEpic
 
    return (
      <div className="App">
        <NavBar 
          epics={this.state.Epics} 
          selectedEpic={SelectedEpic} 
          clicked={this.epicSelectHandler}/>

        <MainContentDisplay />

        <header className="App-header">
          <h1>notepad</h1>
        </header>
      </div>
    );
  }
}

export default App;
