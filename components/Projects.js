import { useInView } from 'react-intersection-observer';
import styles from '../styles/Projects.module.scss';
import Bibliotech from './Bibliotech';
import Entertainment from './Entertainment';
import Invent from './Invent';
import NcNews from './NcNews';

const Projects = () => {
	const { ref: headingRef, inView: isHeadingVisible } = useInView();
	return (
		<section>
			<div className={styles.container}>
				<h2
					ref={headingRef}
					className={`${styles.heading} ${
						isHeadingVisible ? styles.headingAnimated : ''
					}`}
				>
					Projects<span>.</span>
				</h2>
				<article className={styles.projectsContainer}>
					<Invent />
					<Entertainment />
					<NcNews />
					<Bibliotech />
				</article>
			</div>
		</section>
	);
};

export default Projects;
