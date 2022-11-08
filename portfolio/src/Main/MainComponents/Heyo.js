import '../Main.css';

function Heyo() {
	return (
		<section className="intro" style={{ minHeight: '120vh' }}>
			<img
				src="https://cdn.discordapp.com/attachments/584882522211483754/1031743640315363348/DSC07946.JPG"
				className="prof-img"
			/>
			<h1 style={{ marginBottom: '2vh' }} className="primary-c mond-big">
				{' '}
				Heyo!{' '}
			</h1>
			<h2 className="mond-big primary-c intro-2">
				{' '}
				I'm a Web Designer and Front-end Engineer{' '}
			</h2>
			<header className="sec-2-resp primary-c" style={{ marginTop: '-1vh' }}>
				Nice to meet you!
			</header>
		</section>
	);
}

export default Heyo;
