import React,{Component} from "react"

class AddContact extends Component{

    state={
        name:"",
        email:""
    }

    
    add=(e)=>{
        e.preventDefault()
        if(this.state.name === "" && this.state.email===""){
            alert ("All fields are mandatory")
            return
        }
        this.props.addContactHandler(this.state)
        console.log(this.state)
    }

    render(){
        return(
            <div className="ui main">
            <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} placeholder="Enter Name" onChange={(event)=>this.setState({name:event.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" value={this.state.email} placeholder="Enter Email" onChange={(event)=>this.setState({email:event.target.value})}/>
                    </div>
                    <br/>
                    <button className="ui button blue">Add</button>
                </form>
                
            </div>
        )
    }
}

export default AddContact