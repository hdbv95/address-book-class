import React from 'react';

const SearchBox = (props) => (
<form>

	<div className="form-group row">

	 <div className="col-md-3">
	  <label htmlFor="Name">Nombre:</label>
	</div>
  <div className="col-md-9">
		<input
		className="form-control"
			type="text"
			value={props.firstName}
			//onChange={ ()=>{ console.log (e.target.value) }}
		/>
	</div>

	<div className="col-md-3">
	 <label>Apellido:</label>
 </div>
 <div className="col-md-9">
	 <input
	 className="form-control"
		 type="text"
		 value={props.lastName}
	 />
 </div>

 <div className="col-md-3">
  <label>Telefono:</label>
 </div>
 <div className="col-md-9">
  <input
	className="form-control"
 	 type="text"
 	 value={props.phone}
  />
 </div>

 <div className="text-center">
  <button className="btn btn-primary"
	onClick={() => props.saveContact({
		firstName:props.firstName,
		lastName:props.lastName,
		phone:props.phone
	})}
	>
	Guardar</button>
 </div>
</div>
</form>
);

export default SearchBox;
