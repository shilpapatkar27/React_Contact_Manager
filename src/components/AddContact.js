import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2 style={{fontSize:'200%',color:'red'}}>Add Contact</h2><br/><br/>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label style={{fontSize:'140%'}}>Name :</label><br/>
            <input
            
              type="text"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label style={{fontSize:'140%'}}>Email :</label><br/>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div><br/>
          <button className="ui button blue">Add Contact Here</button>
        </form>
      </div>
    );
  }
}

export default AddContact;