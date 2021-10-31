import '../Main.css';

// Bootstrap

// React

import { Link } from 'react-router-dom';

// Images

import MangaLIVE from '../../static/images/Manga-LIVE2.png';
import Triage from '../../static/images/triageLogo.png';
import OmniConnx from '../../static/images/OmniConnx.png';

function Work() {
	const handleLink = (link) => {
		window.open(`${link}`);
	};
	return (
		<section
			className="resp-tech-projects"
			style={{ display: 'flex', alignItems: 'center' }}
		>
			<h2 className="mond-big primary-c title-margin"> My Work </h2>
			<header className="mond-small header-resp sec-2-resp">
				{' '}
				I love coding and building beautiful apps. Take a look at some projects
				I've done or am currently working on!{' '}
			</header>

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					marginTop: '10vh',
				}}
			>
				{/*   Triage Card   */}
				<div className="outside-card">
					<button
						className="card"
						onClick={() =>
							handleLink('https://smerly.github.io/TriageCL-Website/')
						}
					>
						<div className="card-img-container">
							<img src={Triage} className="card-img2" alt="TriageCl logo" />
							<h5
								className="mond-small primary-c triage"
								style={{ marginTop: -10 }}
							>
								{' '}
								TRIAGE
								{/* Expand a business's range across the world through
								technology and the web, TriageCL is a website designed to sell
								and advertise a coffee shop with an interface and design that is
								unique and fresh. */}
							</h5>
							<header
								className="mond-small primary-c triage"
								style={{ marginTop: -15 }}
							>
								{' '}
								Coffee Lab{' '}
							</header>
						</div>
					</button>
					<h6 className="mond-small live-link-ins" style={{ margin: '2vh' }}>
						{' '}
						Click above for the live link <br /> or <br /> click below to read
						about this project.
					</h6>

					<a
						className="arrow3"
						onClick={() =>
							handleLink('https://github.com/Smerly/TriageCL-Website')
						}
						href="#"
					></a>
				</div>

				{/*   Manga-LIVE Card   */}
				<div className="outside-card">
					<button
						className="card"
						onClick={() => handleLink('https://smerly.github.io/Manga-LIVE/')}
					>
						<div className="arrow4"></div>
						<div className="card-img-container">
							<img src={MangaLIVE} className="card-img" alt="Manga-LIVE logo" />
						</div>
					</button>
					<h6 className="mond-small live-link-ins" style={{ margin: '2vh' }}>
						{' '}
						Click above for the live link <br /> or <br /> click below to read
						about this project.
					</h6>
					<a
						className="arrow3"
						onClick={() => handleLink('https://github.com/Smerly/Manga-LIVE')}
						href="#"
					></a>
				</div>

				{/*   OmniConnx Card   */}
				<div className="outside-card">
					<button className="card" onClick={() => handleLink('')}>
						<div className="card-img-container">
							<img src={OmniConnx} className="card-img" alt="OmniConnx logo" />
						</div>
					</button>
					<h6 className="mond-small live-link-ins" style={{ margin: '2vh' }}>
						{' '}
						Click above for the live link <br /> or <br /> click below to read
						about this project.
					</h6>
					<a
						className="arrow3"
						onClick={() => handleLink('https://github.com/OmniConnx/OmniConnx')}
						href="#"
					></a>
				</div>
			</div>
		</section>
	);
}

export default Work;
