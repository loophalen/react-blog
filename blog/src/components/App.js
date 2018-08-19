import React, { Component } from 'react' 
import {database} from '../firebase'
import _ from 'lodash'


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      title: '', 
      body: '', 
      posts: {}
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }
  componentDidMount(){
    database.on('value', snapshot => {
      this.setState({
        posts: snapshot.val()
      })
    })
  }
  //pull data from firebase
  renderPosts(){
    return _ .map(this.state.posts, (post, key)=>{
      return (
      <div key={key}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      )
    })
  }

  onInputChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  onHandleSubmit(event){
    event.preventDefault()
    const post = {
      title: this.state.title , 
      body: this.state.body
    }
    database.push(post)
    this.setState({
      title:'', 
      body:''
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onHandleSubmit}>
          <div className="form-input">
            <input 
            value={this.state.title}
            type="text" name="title" placeholder="Title" onChange={this.onInputChange} ref="title" 
            className="form-control"
            />
          </div>
          <div className="form-group">
            <input 
            value={this.state.body}
            type="text" name="body" placeholder="body" onChange={this.onInputChange} ref="body" 
            className ="form-control"
            />
          </div>
          <button className="btn-btn-primary">Post</button>
        </form>
        <br />
        {this.renderPosts()}   
      </div>
    );
  }
}

export default App;
