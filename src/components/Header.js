import React from 'react';

const MiTitutlo= (props) => (
	//React.createElement('h1',{className: 'text-center' },'Titulo')
	<h1>
	{props.title}
	</h1>
	
);

export default MiTitutlo;

/*
import React from 'react';
import ReactDOM from 'react-dom';

const MiPrimerComponente = () => (
	//React.createElement('div',{className: 'text-center' },'Hola mundo')
	<div className="text-center">
		Hola Mundo
	</div>	
);

ReactDOM.render(
	<MiPrimerComponente />//componente debe tener mayuscula
	//React.createElement(M=iPrimerComponente,null,null),
	,document.getElementById('root')
);
*/