import './Main.css';

// Components

import Navbar from './MainComponents/Navbar';
import Heyo from './MainComponents/Heyo';
import Journey from './MainComponents/Journey';
import Work from './MainComponents/Work';
import DualWielder from './MainComponents/DualWielder';

function Main() {
	return (
		<div className="intro mainborder">
			<Navbar />
			<Heyo />
			<Journey />
			<Work />
			<div className="divider"></div>
			<DualWielder />
		</div>
	);
}

export default Main;
