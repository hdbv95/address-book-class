import React from 'react';

const MiFooter= (props) => (
	//React.createElement('h1',{className: 'text-center' },'Titulo')
	<footer>
	<p className="text-center">{props.copyright}</p>
	</footer>

);
export default MiFooter;

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
