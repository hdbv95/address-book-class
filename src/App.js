import React, { Component } from 'react';
import axios from "axios";

import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const API_URL='https://address-book-api-kfpkaqtghu.now.sh';

class App extends Component {
  constructor(props){
	  super(props);
	  this.state = {
      contacts: [],
		  searchText:'',
		  firstName:'',
		  lastName:'',
		  phone:'',
	  };

  }

  componentDidMount(){
      this.getContacts();
  }


getContacts=()=>{
  console.log('Mount!');
  axios({
    method:'GET',
    url: API_URL+'/api/contacts',
   headers:{
      'Api-Key':'1720074127',
    },
  })
  .then((response) => {
    console.log(response);
    this.setState({contacts: response.data.data})
  })
  .catch((error)=>{
    console.log(error);
  });
}

  saveContact = (contact) => {
    axios({
      method:'POST',
      url: API_URL+'/api/contacts',
      headers:{
        'Api-Key':'1720074127',
        'Content-Type': 'application/json'
      },
      data: {
        firstName: contact.firstName,
        lastName: contact.lastName,
        phone: contact.phone,
      },
    })
    .then((response) => {
      console.log(response);
      this.getContacts();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleSearchTextChange= (event) => {
	  this.setState({
		  searchText:event.target.value
	  });
  }

  handlefirstNameChange= (event) => {
	  this.setState({
		  firstName:event.target.value
	  });
  }

  handlelastNameChange= (event) => {
	  this.setState({
		  lastName:event.target.value
	  });
  }

  handlephoneChange= (event) => {
	  this.setState({
		  phone:event.target.value
	  });
  }

  render() {
    const contacts = this.state.contacts.filter(contact => {
      if (contact.firstName.indexOf(this.state.searchText) > -1) {
        return true;
      }
      if (contact.lastName.indexOf(this.state.searchText) > -1) {
        return true;
      }
      return false;
    });

    return (
    <div>
	  <Header title="Address-book"/>
	  <div className="container">
		<div  className="row">
			<div className="col-md-6">
				<SearchBox
					value={this.state.searchText}
					onChange={this.handleSearchTextChange}
				/>
      <br/>
      <ContactList contacts={contacts}/>
			</div>
			<div className="col-md-6">
				<h1>Nuevo Contacto</h1>
        <ContactForm
  				firstName={this.firstName}
  				lastName={this.lastName}
  				phone={this.phone}
  				handlefirstNameChange={this.handlefirstNameChange}
  				handlelastNameChange={this.handlelastNameChange}
  				handlephoneChange={this.handlephoneChange}
          saveContact={this.saveContact}
  			/>
			</div>
		</div>
	  </div>

	  <Footer copyright="Copyright 2017-PUCE"/>
	  </div>
    );
  }
}

export default App;
