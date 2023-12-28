import '../Main.css';
import { useScrollPosition } from './hooks/useScrollPosition';
import { scroller } from 'react-scroll';
import { Popover } from '@headlessui/react';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

function Navbar() {
	const scrollPosition = useScrollPosition();
	console.log(scrollPosition);
	return (
		<Popover
			className={classNames(
				scrollPosition > 15 ? '' : 'shadow-none',
				'transition-shadow navbar-items2 top-0'
			)}
		>
			{scrollPosition > 15 ? <div className="arrow5" /> : null}
			<div
				className={classNames(
					scrollPosition > 15 ? 'bg-white bordered' : 'shadow-none',
					'transition-shadow navbar-items top-0'
				)}
			>
				<a
					href="#"
					onClick={() => {
						scroller.scrollTo('journey', {
							duration: 1000,
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
							duration: 1000,
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
							duration: 1000,
							delay: 0,
							smooth: 'easeInOutQuart',
						});
					}}
					className="navbar-item"
				>
					<li className="mond-big navbar-item">My Skills</li>
				</a>
			</div>
			{scrollPosition > 15 ? <div className="arrow6" /> : null}
		</Popover>
	);
}

export default Navbar;
