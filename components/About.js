import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import profile from '../public/imgs/profile-img.png';
import styles from '../styles/About.module.scss';

const About = () => {
	const { ref: textRef, inView: isTextVisible } = useInView();
	const { ref: containerRef, inView: isContainerVisible } = useInView();

	return (
		<section>
			<div
				ref={containerRef}
				className={`${styles.container} ${
					isContainerVisible ? styles.containerAnimated : ''
				}`}
			>
				<h2>
					About me<span>.</span>
				</h2>
				<div className={styles.content}>
					<Image
						className={styles.profile}
						src={profile}
						alt="Profile image of the developer"
					/>
					<div
						ref={textRef}
						className={`${styles.text} ${
							isTextVisible ? styles.textAnimated : ''
						}`}
					>
						<p>
							I started programming for fun, playing around with p5.js and I
							really enjoyed it. I’m switching my career path to Software
							Development, coming from a Bachelor Degree and working experience
							in the Graphic Design field, going through studies in UX Design
							and also a background in the public sector.
						</p>
						<br />
						<p>
							The challenging nature of the profession, problem solving and
							analytical thinking keep my mind sharp and motivated.
						</p>
						<br />
						<p>
							If I'm not coding or learning new technologies, you can find me
							cycling{' '}
							<span role="img" aria-label="cycling">
								🚴
							</span>
							, reading{' '}
							<span role="img" aria-label="reading">
								📖
							</span>{' '}
							or taking care of my plants{' '}
							<span role="img" aria-label="plants">
								🪴
							</span>
						</p>
						<br />
						<p>Technologies I've been working with recently:</p>
						<ul>
							<li>
								<span>JavaScript</span>
							</li>
							<li>
								<span>React</span>
							</li>
							<li>
								<span>React Native</span>
							</li>
							<li>
								<span>Next.js</span>
							</li>
							<li>
								<span>HTML5</span>
							</li>
							<li>
								<span>CSS3</span>
							</li>
							<li>
								<span>SASS</span>
							</li>
							<li>
								<span>Redux</span>
							</li>
							<li>
								<span>Node.js</span>
							</li>
							<li>
								<span>PostgreSQL</span>
							</li>
							<li>
								<span>MongoDB</span>
							</li>
							<li>
								<span>Firebase</span>
							</li>
							<li>
								<span>Express</span>
							</li>
							<li>
								<span>Jest</span>
							</li>
							<li>
								<span>Heroku</span>
							</li>
							<li>
								<span>Netlify</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
