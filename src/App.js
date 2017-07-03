import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm';

class App extends Component {
  constructor(props){
	  super(props);
	  this.state = {
		  searchText:'',
		  firstName:'',
		  lastName:'',
		  phone:'',
	  };
	  
  }
  
  handleSearchTextChange= (event) => {
	  this.setState({
		  firstName:event.target.value
	  });
  }
  
  handlefirstNameChange= (event) => {
	  this.setState({
		  lastName:event.target.value
	  });
  }
  
  handlelastNameChange= (event) => {
	  this.setState({
		  phone:event.target.value
	  });
  }
  
  handlephoneChange= (event) => {
	  this.setState({
		  ContactForm:event.target.value
	  });
  }
  
  render() {
    return (
      <div>
	  <Header title="Address-book"/>
	  <div className="container">
		<div  className="row">
			<div className="col-sm-6">
				<SearchBox 
					value={this.state.searchText}
					onChange={this.handleSearchTextChange}
				/>
			</div>
			<div className="col-sm-6">
				<h1>Nuevo Contacto</h1>
			</div>
			<ContactForm 
				firstName={this.firstName}
				lastName={this.lastName}
				phone={this.phone}
				handlefirstNameChange={this.handlefirstNameChange}
				handlelastNameChange={this.handlelastNameChange}
				handlephoneChange={this.handlephoneChange}
				
			/>
		</div>
	  </div>
	  
	  <Footer copyright="Copyright 2017-PUCE"/>
	  </div>
    );
  }
}

export default App;
