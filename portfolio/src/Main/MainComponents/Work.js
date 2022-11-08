import '../Main.css';

// Bootstrap

// React

import { Link } from 'react-router-dom';

// Images

import MangaLIVE from '../../static/images/Manga-LIVE2.png';
import Triage from '../../static/images/triageLogo.png';
import OmniConnx from '../../static/images/OmniConnx.png';
import Multitask from '../../static/images/MultiTask_Logo.png';

function Work() {
	const handleLink = (link) => {
		window.open(`${link}`);
	};
	return (
		<section
			className="resp-tech-projects work"
			style={{ display: 'flex', alignItems: 'center' }}
		>
			<h2 className="mond-big primary-c title-margin"> My Work </h2>
			<header className="mond-small header-resp ">
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
				{/*   Multitask Card   */}
				<div className="outside-card">
					<button
						className="card"
						onClick={() => handleLink('https://multitask.today/')}
					>
						<div className="card-img-container">
							<img
								src={Multitask}
								className="card-img2"
								alt="TriageCl logo"
								style={{ width: 150 }}
							/>
						</div>
					</button>

					<div className="border-skills-work">
						<h3 className="primary-c mond-big sec-2-resp">Multitask</h3>
						<h3 className="primary-c mond-small skills-header-resp">
							ElectronJS | AppleScript | CSS
						</h3>
					</div>
					<div className="arrow3" />
					<div style={{ width: '70%' }}>
						<h6 className="mond-small live-link-ins">
							{' '}
							Multitask is a downloadable MacOS application that allows a Zoom
							meeting participant to quickly perform Zoom tasks (i.e. mute,
							camera button), no matter what application they are using during
							their meeting.{' '}
						</h6>
					</div>
					<div className="work-description-bottom" />
				</div>

				{/*   Manga-LIVE Card   */}
				<div className="outside-card">
					<button
						className="card"
						onClick={() => handleLink('https://ernitar.me/Manga-LIVE/')}
					>
						<div className="card-img-container">
							<img
								src={MangaLIVE}
								alt="Manga-LIVE logo"
								style={{ width: 200 }}
							/>
						</div>
					</button>
					<div className="border-skills-work">
						<h3 className="primary-c mond-big sec-2-resp">Manga LIVE</h3>
						<h3 className="primary-c mond-small skills-header-resp">
							ReactJS | Redux | Firebase | Bootstrap | CSS
						</h3>
					</div>
					<div className="arrow3" />
					<div style={{ width: '70%' }}>
						<h6 className="mond-small live-link-ins">
							Passion project aimed at building a more creator-friendly and
							sustainable career path for comic and manga creators with
							tech-enhanced features.{' '}
						</h6>
					</div>
					<div className="work-description-bottom" />
				</div>

				{/*   OmniConnx Card   */}
				<div className="outside-card">
					<button
						className="card"
						onClick={() => handleLink('https://omniconnx-app.herokuapp.com/')}
					>
						<div className="card-img-container">
							<img
								src={OmniConnx}
								className="card-img"
								style={{ width: 200 }}
								alt="OmniConnx logo"
							/>
						</div>
					</button>
					<div className="border-skills-work">
						<h3 className="primary-c mond-big sec-2-resp">OmniConnx</h3>
						<h3 className="primary-c mond-small skills-header-resp">
							ReactJS | Redux | NodeJS | Express | JWT | Flask | Mongoose
						</h3>
					</div>
					<div className="arrow3" />
					<div style={{ width: '70%' }}>
						<h6 className="mond-small live-link-ins">
							A prototype for start-up company OmniConnX, a newly built startup
							oriented around bridging the gap of knowledge between curious
							medical students and experienced doctors.
						</h6>
					</div>
					<div className="work-description-bottom" />
				</div>
			</div>
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
						onClick={() => handleLink('https://ernitar.me/TriageCL-Website/')}
					>
						<div className="card-img-container">
							<img src={Triage} style={{ width: 150 }} alt="TriageCl logo" />
							<h5
								className="mond-small primary-c triage"
								style={{ marginTop: -10 }}
							>
								{' '}
								TRIAGE
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
					<div className="border-skills-work">
						<h3 className="primary-c mond-big sec-2-resp">Triage</h3>
						<h3 className="primary-c mond-small skills-header-resp">
							ReactJS | SASS | Bootstrap | Clip Studio Paint
						</h3>
					</div>
					<div className="arrow3" />
					<div style={{ width: '70%' }}>
						<h6 className="mond-small live-link-ins">
							Prototype of Triage Coffee Lab website. Includes cart and
							purchasing feature and original designs built from scratch and
							color theory application.
						</h6>
					</div>
					<div className="work-description-bottom" />
				</div>
			</div>
		</section>
	);
}

export default Work;
