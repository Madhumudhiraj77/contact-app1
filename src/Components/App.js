import React,{useState} from "react"
import "./App.css"
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"

function App() {

  const[Contacts,setContact] = useState([])

  const ContactHandler=(contact)=>{
    console.log(contact)
  }

  return (
    <div className="ui container">
    <Header/>
    <AddContact addContactHandler={ContactHandler}/>
    <ContactList contact={Contacts}/>
    </div>

  );
}

export default App;
