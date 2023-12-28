import './Hero.css';
import { NavLink } from 'react-router-dom';
function Hero() {
	return (
		<div
			class="hero d-flex justify-content-center align-items-center"
			style={{ height: '100vh', backgroundColor: '#d6e8ff' }}
		>
			<h1> Hi There! </h1>
			<h1> I'm Ernest, click below to learn more about me </h1>
			<NavLink
				style={{
					border: 'none',
					backgroundColor: '#d6e8ff',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				to={`/main`}
			>
				<div className="arrow"></div>
			</NavLink>
		</div>
	);
}

export default Hero;
