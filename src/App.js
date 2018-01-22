import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'

let marked=require("marked");

class App extends Component {
constructor(props){
  super(props);
  this.state={
    markdown:""
  }
}
 updateMarkdown=function(markdown){
   this.setState({markdown});
 }
clearForm=function(markdown){
  this.setState({
    markdown:""
  })
}

  render() {
    console.log(this.state.markdown);
    return (
      <div className="App">
        <h2 className="h2css">Markdown Previewer-Reactjs</h2>
        <div className="row">
        <div className="col-sm-6">
        <h4 className="h4css">React-Markdown Input</h4>
      
         <FormGroup controlId="formControlsTextarea">          
           <FormControl componentClass="textarea" placeholder="Enter Markdown Input" value={this.state.markdown}
           onChange={(event)=>this.updateMarkdown(event.target.value)} rows="50" maxLength="3000"
           >
          </FormControl>
          
         </FormGroup>
        <button type="submit" onClick={(event)=>this.clearForm(event.target.value)}>Clear Text</button>
         </div>
         <div className="col-sm-6">
           <h4 className="h4css">React-Markdown Output</h4>
           <div dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}>
            
            

           </div>
         </div>
         </div>
      </div>
    );
  }
}

export default App;
