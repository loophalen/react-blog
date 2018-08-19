import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      title: '', 
      body: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <form>
          <input type="text" name="title" placeholder="Title" onChange={this.onInputChange} ref="title" />
          <input type="text" name="body" placeholder="body" onChange={this.onInputChange} ref="body" />
          <button>Post</button>
        </form>
  
     
      </div>
    );
  }
}

export default App;
