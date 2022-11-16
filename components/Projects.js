import styles from '../styles/Projects.module.scss';
import Bibliotech from './Bibliotech';
import NcNews from './NcNews';

const Projects = () => {
	return (
		<section>
			<div className={styles.container}>
				<h2>
					Projects<span>.</span>
				</h2>
				<NcNews />
				<Bibliotech />
			</div>
		</section>
	);
};

export default Projects;
