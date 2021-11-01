import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SlideRoutes from 'react-slide-routes';
// Components

import Hero from './HeroMain/Hero';
import Main from './Main/Main';

function App() {
	return (
		<div className="App">
			{/* <Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition timeout={1000} classNames="slide" key={location.key}>
							<Switch location={location}>
								<Route exact path="/" component={Hero} />
								<Route path="/main" component={Main} />
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/> */}
			{/* <Main /> */}
			<Router>
				<Route exact path="/" component={Main} />
			</Router>
		</div>
	);
}

export default App;
