import React from "react"
import ContactCard from "./ContactCard"

const ContactList=(props)=>{
    
   const{contact}=props

    const renderContactList = contact.map((each)=>{
        return(
           <ContactCard contact={each}/>
        )
    })

    return(
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList