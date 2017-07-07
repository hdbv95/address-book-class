import React from 'react';

const SearchBox = (props) => (
	<div>
		<input
			type="text"
			value={props.value}
			className="form-control"
			//onChange={ ()=>{ console.log (e.target.value) }}
			onChange={props.onChange}

		/>
	</div>

);
export default SearchBox;
