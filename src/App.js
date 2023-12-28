import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Components

import Hero from './HeroMain/Hero';
import Main from './Main/Main';

function App() {
	return (
		<div className="App">
			<Main />
		</div>
	);
}

export default App;
