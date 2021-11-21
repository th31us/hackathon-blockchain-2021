import React from 'react';

export default class NameForm extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault()
      console.log(event.target[0].value)
    //   console.log(event.target.elements.username.value)
    //   console.log(event.target.username.value)
    //   console.log(this.inputNode.value)
    //   console.log(event.target.elements.Password.value)
    //   console.log(event.target.Password.value)
    //   console.log(this.inputNode.value)
      console.log(event.target.elements.Record_ID.value)
      console.log(event.target.Record_ID.value)
      console.log(this.inputNode.value)
    }
    render() {
      return (
        <form className="Form" onSubmit={this.handleSubmit}>
          {/* <label>
            Name:
            <input
              type="text"
              name="username"
              ref={node => (this.inputNode = node)}
            />
          </label> */}

          
          <label for="Username"> Username:
             <input type="text" name="Username" id="Username"/><br /> </label>
             <label for="Password"> Password: 
             <input type="text" name="Password" id="Password"/><br /></label>
             <label for="Record ID"> Record ID: 
             <input type="text" name="Record_ID" id="Record ID" ref={node => (this.inputNode = node)}/><br /></label>
             <input  class="create_button" onclick="data()" type="submit" value="Submit" />
          {/* <button type="submit">Submit</button> */}
        </form> 

        
        // <form id='hospitalrec' action="changefunction()" name="LoginDetails" method="get">
        //     <label for="Username"> Username: </label>
        //     <input type="text" name="Username" id="Username" /><br />
        //     <label for="Password"> Password: </label>
        //     <input type="text" name="Password" id="Password" /><br />
        //     <label for="Record ID"> Record ID: </label>
        //     <input type="text" name="Record_ID" id="Record ID" /><br />
        //     <input  class="create_button" onclick="data()" type="submit" value="Submit" />
        
        // </form>
      )
    }
  }