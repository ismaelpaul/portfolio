import Link from 'next/link';
import React from 'react';
import styles from '../styles/ProjectDescription.module.scss';

const ProjectDescription = ({
	projectDescription,
	projectLink,
	githubLink,
}) => {
	return (
		<article className={styles.container}>
			<p>{projectDescription}</p>
			<hr />
			<div className={styles.links}>
				<Link href={projectLink} target="_blank">
					Project
				</Link>
				<Link href={githubLink} target="_blank">
					GitHub
				</Link>
			</div>
		</article>
	);
};

export default ProjectDescription;
