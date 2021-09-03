import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components

import Hero from './HeroMain/Hero';

function App() {
	return (
		<div className="App">
			<section id="sec-hero">
				<Hero />
			</section>
		</div>
	);
}

export default App;
