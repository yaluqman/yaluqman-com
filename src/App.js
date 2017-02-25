	import React, { Component } from 'react';
	import './App.css';

	import ios from './ios.svg'
	import android from './android.svg'
	import desktop from './desktop.svg'

	import yellowline from './yellowline.png'
	import gigsoto from './gigsoto.png'
	import demski from './demski.png'
	import horsetaxi from './horsetaxi.png'

	import '../node_modules/materialize-css/dist/js/materialize.min'
	import '../node_modules/materialize-css/dist/css/materialize.min.css'

	class App extends Component {
		constructor(props) {
			super(props)
			this.state = {
				tab : 0
			}
		}
		render() {

			let blog = (
				<div className="blog">
					<div className="about black">
						<div className="container">
							<div className="row">
								<div className="col s12 m12 l12">
									<span className="about-title">About Me</span>
								</div>
							</div>
							<div className="row">
								<div className="col s12 m12 l12">
									<span className="about-text">
										I am a web and mobile application developer. Having aquired skills such as Meteor, React, React Native, Polymer, Firebase, Android app development with Java, iOS app development with Swift and much more, I work as a freelancer and I am in the process of starting up my own company Skaprer. With special focus on User Experience and Design, I give precise care to fine details of product design to ensure maximum user friendliness and visual elagance.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		
			let portfolio = (
				<div className="portfolio">	
				<div className="row no-margin">
					<div className="col s12 m12 l6">
						<div className="project-wrapper">
							<div className="row">
								<div className="col s12 m12 l6">
									<div className="section valign-wrapper yellow">
											<div className="valign">
												<span className="title">The Yellow Line</span>
												<span className="subtitle">(Beta)</span>
												<span className="details">record and review your weekly mood trends</span>
											</div>
											<div className="stack">
													<svg width="26px" height="25px" viewBox="0 0 26 25" version="1.1" xmlns="http://www.w3.org/2000/svg">
														<desc>Created with Sketch.</desc>
														<defs></defs>
														<g id="Group" opacity="0.3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
															<g transform="translate(8.000000, 5.000000)" id="Shape" stroke="#000000" stroke-linecap="round">
																<path d="M2.73558953e-13,12.5 C2.66666667,9.73857625 2.66666667,5.26142375 2.73558953e-13,2.5"></path>
																<path d="M7,15 C11,10.8578644 11,4.14213562 7,-3.99680289e-14"></path>
															</g>
															<polygon id="Bounds" points="0 0 25 0 25 25 0 25"></polygon>
														</g>
													</svg><span> Swift, Firebase</span><p>iOS</p>
											</div>
									</div>
								</div>
								<div className="col s12 m12 l6">
									<div className="section valign-wrapper yellow">
											<div className="valign">
												<img src={yellowline} alt=""/>	
											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col s12 m12 l6">
						<div className="project-wrapper">
							<div className="row">
								<div className="col s12 m12 l6">
									<div className="section valign-wrapper cyan darken-2">
											<div className="valign">
												<span className="title">Gigsoto</span>
												<span className="subtitle">(Coming Soon)</span>
												<span className="details">Gigsoto is an online marketplace for odd jobs</span>
											</div>
											<div className="stack">
													<svg width="26px" height="25px" viewBox="0 0 26 25" version="1.1" xmlns="http://www.w3.org/2000/svg">
														<desc>Created with Sketch.</desc>
														<defs></defs>
														<g id="Group" opacity="0.3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
															<g transform="translate(8.000000, 5.000000)" id="Shape" stroke="#000000" stroke-linecap="round">
																<path d="M2.73558953e-13,12.5 C2.66666667,9.73857625 2.66666667,5.26142375 2.73558953e-13,2.5"></path>
																<path d="M7,15 C11,10.8578644 11,4.14213562 7,-3.99680289e-14"></path>
															</g>
															<polygon id="Bounds" points="0 0 25 0 25 25 0 25"></polygon>
														</g>
													</svg><span> React Native, Meteor</span><p>iOS, Android & Web</p>
											</div>
									</div>
								</div>
								<div className="col s12 m12 l6">
									<div className="section valign-wrapper cyan darken-2">
											<div className="valign">
												<img src={gigsoto} alt=""/>	
											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col s12 m12 l6">
						<div className="project-wrapper">
							<div className="row">
								<div className="col s12 m12 l6">
									<div className="section valign-wrapper blue">
											<div className="valign">
												<span className="title">The Demski Group</span>	
												<span className="details">Project Management App for New York based Demski Group</span>
											</div>
											<div className="stack">
													<svg width="26px" height="25px" viewBox="0 0 26 25" version="1.1" xmlns="http://www.w3.org/2000/svg">
														<desc>Created with Sketch.</desc>
														<defs></defs>
														<g id="Group" opacity="0.3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
															<g transform="translate(8.000000, 5.000000)" id="Shape" stroke="#000000" stroke-linecap="round">
																<path d="M2.73558953e-13,12.5 C2.66666667,9.73857625 2.66666667,5.26142375 2.73558953e-13,2.5"></path>
																<path d="M7,15 C11,10.8578644 11,4.14213562 7,-3.99680289e-14"></path>
															</g>
															<polygon id="Bounds" points="0 0 25 0 25 25 0 25"></polygon>
														</g>
													</svg><span> Polymer, Firebase</span><p>Web</p>
											</div>
									</div>
								</div>
								<div className="col s12 m12 l6">
									<div className="section valign-wrapper blue">
											<div className="valign">
												<img src={demski} alt=""/>
											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col s12 m12 l6">
						<div className="project-wrapper">
							<div className="row">
								<div className="col s12 m12 l6">
									<div className="section valign-wrapper amber">
											<div className="valign">
												<span className="title">Horse.taxi</span>
												<span className="subtitle">(Prototype for Estonia based Vezio Inc)</span>
												<span className="details">A transport service for horse transport</span>

											</div>
											<div className="stack">
													<svg width="26px" height="25px" viewBox="0 0 26 25" version="1.1" xmlns="http://www.w3.org/2000/svg">
														<desc>Created with Sketch.</desc>
														<defs></defs>
														<g id="Group" opacity="0.3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
															<g transform="translate(8.000000, 5.000000)" id="Shape" stroke="#000000" stroke-linecap="round">
																<path d="M2.73558953e-13,12.5 C2.66666667,9.73857625 2.66666667,5.26142375 2.73558953e-13,2.5"></path>
																<path d="M7,15 C11,10.8578644 11,4.14213562 7,-3.99680289e-14"></path>
															</g>
															<polygon id="Bounds" points="0 0 25 0 25 25 0 25"></polygon>
														</g>
													</svg><span> Meteor, Materialize</span><p>Web</p>
											</div>
									</div>
								</div>
								<div className="col s12 m12 l6">
									<div className="section valign-wrapper amber">
											<div className="valign">
												<img src={horsetaxi} alt=""/>
											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					</div>	
				</div>
			)

		let skills = (
			<div className="skills">
				<div className="row black">
					<div className="col s12 m12 l2">
						<div className="img-wrapper">
							<img src={ios} alt="iOS"/>
						</div>
					</div>
					<div className="col s12 m12 l8">
						<div className="img-wrapper">
							<img src={desktop} alt="desktop"/>
						</div>
					</div>
					<div className="col s12 m12 l2">
						<div className="img-wrapper">
							<img src={android} alt="android"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col s12 m12 l3">
						<div className="skill-wrapper">
							<div className="skill">
								<div>Languages</div>
								<div>
									<span>Javascript</span>
									<span>Swift</span>
									<span>Java</span>
									<span>Python</span>
									<span>C/C++</span>
									<span>Php</span>
									<span>Ruby</span>
								</div>
								<div>
									<span>HTML 5</span>
									<span>CSS 3</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col s12 m12 l4">
						<div className="skill-wrapper">
							<div className="skill">
								<div>Frameworks</div>
								<div className="row">
									<div className="col s12 m12 l6">
										<div>
										<span>Meteor</span>
										<span>Express</span>
										<span>SocketIO</span>
										<span>Django</span>
										<span>Flask</span>
										<span>Tornado</span>
										</div>
									</div>
									<div className="col s12 m12 l6">
										<div>
										<span>React + Redux</span>
										<span>React Native</span>
										<span>Polymer</span>
										<span>Materialize</span>
										<span>Bootstrap</span>
									</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col s12 m12 l4">
						<div className="skill-wrapper">
							<div className="skill">
								<div>Tools</div>
								<div className="row">
									<div className="col s12 m12 l6">
										<div>
										<span>Firebase</span>
										<span>Heroku</span>
										<span>AWS</span>
										<span>Digital Ocean</span>
										<span>Github</span>
										<span>Bitbucket</span>
										</div>
									</div>
									<div className="col s12 m12 l6">
										<div>
										<span>Git</span>
										<span>Npm</span>
										<span>Docker</span>
										<span>Gulp</span>
										<span>Less</span>
										<span>Nginx</span>
										<span>and more...</span>
									</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)

		var page;	
		switch (this.state.tab) {
			case 0:
				page = skills;
				break;
			case 1:
				page = portfolio;
				break;
			case 2:
				page = blog;
				break;
		}
		var getActive = function(index) {
			return index == this.state.tab ? "active" : "";
		}.bind(this)

		return (
		<div className="App">
			<div>
				<nav className="black">
					<a href="" className="brand-logo center white-text all-caps bold">Yahya Ayash Luqman</a>
					<ul id="nav-mobile" className="left hide-on-med-and-down">
						<li>
							<a href="#menu" className="valign-wrapper">
								<svg className="valign" width="25px" height="25px" viewBox="30 18 25 25">
									<defs></defs>
									<g id="Menu" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(30.000000, 18.000000)">
										<g id="Group" transform="translate(2.500000, 4.000000)" stroke="#FFFFFF" stroke-linecap="round">
											<path d="M0,16.5 L20,16.5" id="Line"></path>
											<path d="M0,8.5 L15,8.5" id="Line"></path>
											<path d="M0,0.5 L20,0.5" id="Line"></path>
										</g>
										<rect id="Bounds" x="0" y="0" width="25" height="25"></rect>
									</g>
								</svg>
							</a>
						</li>
						<li><a href=""><span className="all-caps bold">Freelance App Developer</span></a></li>
					</ul>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<a href="https://www.instagram.com/imyaluqman" className="valign-wrapper">
								<svg width="16px" height="17px" viewBox="1335 20 16 17" version="1.1" className="valign">
									<defs></defs>
									<g id="Instagram" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(1335.000000, 20.000000)">
										<g id="Group" fill="#FFFFFF">
											<path d="M14.4,0 L1.6,0 C0.72,0 0,0.72 0,1.6 L0,14.4 C0,15.28 0.72,16 1.6,16 L14.4,16 C15.28,16 16,15.28 16,14.4 L16,1.6 C16,0.72 15.28,0 14.4,0 L14.4,0 Z M8,4.8 C9.76,4.8 11.2,6.24 11.2,8 C11.2,9.76 9.76,11.2 8,11.2 C6.24,11.2 4.8,9.76 4.8,8 C4.8,6.24 6.24,4.8 8,4.8 L8,4.8 Z M2,14.4 C1.76,14.4 1.6,14.24 1.6,14 L1.6,7.2 L3.28,7.2 C3.2,7.44 3.2,7.76 3.2,8 C3.2,10.64 5.36,12.8 8,12.8 C10.64,12.8 12.8,10.64 12.8,8 C12.8,7.76 12.8,7.44 12.72,7.2 L14.4,7.2 L14.4,14 C14.4,14.24 14.24,14.4 14,14.4 L2,14.4 L2,14.4 Z M14.4,3.6 C14.4,3.84 14.24,4 14,4 L12.4,4 C12.16,4 12,3.84 12,3.6 L12,2 C12,1.76 12.16,1.6 12.4,1.6 L14,1.6 C14.24,1.6 14.4,1.76 14.4,2 L14.4,3.6 L14.4,3.6 Z" id="Shape"></path>
										</g>
									</g>
								</svg>
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/imyaluqman" className="valign-wrapper">
								<svg width="20px" height="21px" viewBox="1285 18 20 21" version="1.1" className="valign">
									<defs></defs>
									<g id="Facebook" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(1285.000000, 18.000000)">
										<g id="Group" transform="translate(2.000000, 2.000000)" fill="#FFFFFF">
											<path d="M15.0545672,0 L0.879402985,0 C0.393671642,0 0,0.39361194 0,0.879402985 L0,15.0545672 C0,15.5402388 0.393671642,15.9339701 0.879402985,15.9339701 L8.51080597,15.9339701 L8.51080597,9.76352239 L6.43432836,9.76352239 L6.43432836,7.35874627 L8.51080597,7.35874627 L8.51080597,5.58531343 C8.51080597,3.52722388 9.7678209,2.40656716 11.6037612,2.40656716 C12.4831642,2.40656716 13.2390448,2.4720597 13.4592836,2.50131343 L13.4592836,4.6521194 L12.1859701,4.65271642 C11.1874627,4.65271642 10.9941493,5.12716418 10.9941493,5.82340299 L10.9941493,7.35874627 L13.3754627,7.35874627 L13.0653731,9.76352239 L10.9941493,9.76352239 L10.9941493,15.9339701 L15.0545672,15.9339701 C15.5402388,15.9339701 15.9339701,15.5402388 15.9339701,15.0545672 L15.9339701,0.879402985 C15.9339701,0.39361194 15.5402388,0 15.0545672,0" id="Shape"></path>
										</g>
										<rect id="Bounds" x="0" y="0" width="20" height="20"></rect>
									</g>
								</svg>
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<div className="navigation">
				<div className="row">
						<div className="col s12 m12 l4">
													<a href="#skills" className={getActive(0)} onClick={() => this.setState({tab : 0})}>Skills</a>
						</div>
						<div className="col s12 m12 l4">
													<a href="#portfolio" className={getActive(1)} onClick={() => this.setState({tab : 1})}>Portfolio</a>
						</div>
						<div className="col s12 m12 l4">
												<a href="#blog" className={getActive(2)} onClick={() => this.setState({tab : 2})}>Blog</a>
						</div>
				</div>		
			</div>

			<div className="page">
				{page}
			</div>

		</div>
		);
	}
	}

	export default App;
