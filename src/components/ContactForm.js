import React from 'react';

const SearchBox = (props) => (
	<div>
		<input 
			type="text" 
			value={props.firstName}			
			//onChange={ ()=>{ console.log (e.target.value) }}
		/>
		<input 
			type="text" 
			value={props.lastName}			
			//onChange={ ()=>{ console.log (e.target.value) }}
		/>
		
		<input 
			type="text" 
			value={props.phone}			
			//onChange={ ()=>{ console.log (e.target.value) }}
		/>		
	</div>

);
export default SearchBox;