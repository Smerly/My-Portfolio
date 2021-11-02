import '../Main.css';
import { scroller } from 'react-scroll';
import me from '../../static/images/MyTempPic.jpeg';

function Navbar() {
	return (
		<div>
			<ul className="navbar-items">
				{/* <img src={me} className="prof-img2" /> */}
				<a
					href="#"
					onClick={() => {
						scroller.scrollTo('journey', {
							duration: 100,
							delay: 0,
							smooth: 'easeInOutQuart',
						});
					}}
					className="navbar-item"
				>
					<li className="mond-big navbar-item">My Journey</li>
				</a>
				<a
					href="#"
					onClick={() => {
						scroller.scrollTo('work', {
							duration: 100,
							delay: 0,
							smooth: 'easeInOutQuart',
						});
					}}
					className="navbar-item"
				>
					<li className="mond-big navbar-item">My Work</li>
				</a>
				<a
					href="#"
					onClick={() => {
						scroller.scrollTo('dualwielder', {
							duration: 100,
							delay: 0,
							smooth: 'easeInOutQuart',
						});
					}}
					className="navbar-item"
				>
					<li className="mond-big navbar-item">My Skills</li>
				</a>
			</ul>
		</div>
	);
}

export default Navbar;
