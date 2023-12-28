import './Main.css';

// Components

import Navbar from './MainComponents/Navbar';
import Heyo from './MainComponents/Heyo';
import Journey from './MainComponents/Journey';
import Work from './MainComponents/Work';
import DualWielder from './MainComponents/DualWielder';
import Footer from './MainComponents/Footer';

function Main() {
	return (
		<div className="intro mainborder">
			<Navbar />
			<Heyo />
			<Journey />
			<Work />
			<div className="divider"></div>
			<DualWielder />
			<Footer />
		</div>
	);
}

export default Main;
