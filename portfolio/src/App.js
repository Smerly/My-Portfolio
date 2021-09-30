import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SlideRoutes from 'react-slide-routes';
// Components

import Hero from './HeroMain/Hero';
import Main from './Main/Main';

function App() {
	const location = useLocation();
	return (
		<div className="App">
			{/* <Switch>
				<SlideRoutes
					location={location}
					animation="vertical-slide"
					pathList={[Hero, Main]}
				>
					<Route path="/main" component={Main} />
					<Route exact path="/" component={Hero} />
				</SlideRoutes>
			</Switch> */}
			<Route
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
			/>
		</div>
	);
}

export default App;
