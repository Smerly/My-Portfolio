import '../Main.css';

function DualWielder() {
	return (
		<section className="dualwielder-sec dualwielder">
			<h2 className="mond-big title-margin"> I'm A Dual-Wielder! </h2>
			<p className="primary-c mond-small header-resp sec-2-resp">
				Along with my technical skills, I have experience in the visual arts and
				digital painting with software like Clip Studio Paint and Photoshop.
				With this extra skill, I use it to further elevate my output
				capabilities.
			</p>

			{/* Img */}

			{/* <div className="dual-div"></div> */}

			{/* Tech Skills */}

			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<h3 className="mond-big title-margin" style={{ fontSize: 30 }}>
					{' '}
					Tech Skills{' '}
				</h3>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'space-between',
						marginTop: '10vh',
					}}
				>
					<div className="card" style={{ height: '100vh' }}>
						<h5 className="mond-big header2 primary-c"> Tools I use </h5>

						{/* Design tools */}

						<div className="responsive-skills">
							<div className="responsive-skills-imbed">
								<header className=" mond-big header3"> Design </header>
								<li className="tools-langs"> D3.js </li>
								<li className="tools-langs"> Bootstrap </li>
								<li className="tools-langs"> TailwindCSS </li>
								<li className="tools-langs"> Clip Studio Paint </li>
								<li className="tools-langs"> Figma </li>
								<li className="tools-langs"> Photoshop </li>
							</div>

							{/* Dev tools */}
							<div className="responsive-skills-imbed">
								<header className=" mond-big header3"> Dev </header>
								<div className="skills">
									<div className="skills1">
										<li className="tools-langs"> Redux </li>
										<li className="tools-langs"> Flask </li>
										<li className="tools-langs"> SQLAlchemy </li>
										<li className="tools-langs"> Postgres </li>
										<li className="tools-langs"> Firebase </li>
									</div>
									<div className="skills2">
										<li className="tools-langs"> Express </li>
										<li className="tools-langs"> Apollo </li>
										<li className="tools-langs"> Github </li>
										<li className="tools-langs"> Terminal </li>
										<li className="tools-langs"> Gitkraken </li>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="card" style={{ height: '90vh' }}>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<h5
								className="mond-big header2 primary-c"
								style={{ marginBottom: 30 }}
							>
								{' '}
								Languages I speak{' '}
							</h5>
							<div className="skills">
								<div className="skills1">
									<li className="tools-langs2"> JavaScript </li>

									<li className="tools-langs2"> ReactJS </li>
									<li className="tools-langs2"> TypeScript </li>
									<li className="tools-langs2"> Python </li>
									<li className="tools-langs2"> React Native </li>
									<li className="tools-langs2"> ElectronJS </li>
									<li className="tools-langs2"> HTML </li>
									<li className="tools-langs2"> CSS </li>
								</div>
								<div className="skills2">
									<li className="tools-langs2"> SASS </li>
									<li className="tools-langs2"> GraphQL </li>
									<li className="tools-langs2"> SQL </li>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Art */}

				{/* <div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<h3
						className="mond-big"
						style={{
							marginBottom: '10vh',
							marginTop: '10vh',
							fontSize: '3.2vh',
						}}
					>
						{' '}
						Check out my art below!
					</h3>
					<div className="arrow2" style={{ marginTop: '15vh' }}></div>
				</div> */}
			</div>
		</section>
	);
}

export default DualWielder;
