import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();






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
	//React.createElement(MiPrimerComponente,null,null),
	,document.getElementById('root')
);
*/