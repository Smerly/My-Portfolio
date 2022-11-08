import Triage from '../../static/images/triageLogo.png';
import { scroller } from 'react-scroll';

function Footer() {
	const handleLink = (link) => {
		window.open(`${link}`);
	};
	return (
		<div className="bg2" style={{ height: 400 }}>
			<div className="footer-flex">
				{/* <img src={Triage} style={{ width: 90 }} /> */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						width: 500,
						height: 50,
						justifyContent: 'center',
					}}
				>
					{/* Github */}
					<img
						src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
						className="footer-icons"
						onClick={() => {
							handleLink('https://github.com/Smerly');
						}}
					/>
					{/* LinkedIn */}
					<img
						src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
						className="footer-icons"
						onClick={() => {
							handleLink(
								'https://www.linkedin.com/in/ernest-cheung-8254321b5/'
							);
						}}
					/>
				</div>
				<div className="footer-divider"></div>
				<div className="footer-row">
					<a
						href="#"
						className="footer-links secondary-c mond-big"
						onClick={() => {
							scroller.scrollTo('journey', {
								duration: 1000,
								delay: 0,
								smooth: 'easeInOutQuart',
							});
						}}
					>
						Journey
					</a>
					<a
						href="#"
						className="footer-links secondary-c mond-big"
						onClick={() => {
							scroller.scrollTo('work', {
								duration: 1000,
								delay: 0,
								smooth: 'easeInOutQuart',
							});
						}}
					>
						Work
					</a>
					<a
						onClick={() => {
							scroller.scrollTo('dualwielder', {
								duration: 1000,
								delay: 0,
								smooth: 'easeInOutQuart',
							});
						}}
						href="#"
						className="footer-links secondary-c mond-big"
					>
						Skills
					</a>
					<a
						onClick={() => {
							handleLink('https://github.com/Smerly/My-Portfolio');
						}}
						href="#"
						className="footer-links secondary-c mond-big"
					>
						Source Code
					</a>
				</div>
				<div className="footer-divider"></div>
				<h6 className="secondary-c mond-small" style={{ marginTop: 50 }}>
					Copyright © 2022 Ernest Cheung All Rights Reserved.
				</h6>
			</div>
		</div>
	);
}

export default Footer;
