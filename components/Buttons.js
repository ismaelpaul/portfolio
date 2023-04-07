import React from 'react';
import styles from '../styles/Buttons.module.scss';

const Buttons = ({ projectLink, githubLink }) => {
	return (
		<div className={styles.buttons}>
			<a href={projectLink} target="_blank" rel="noreferrer">
				<button>Project</button>
			</a>
			<a href={githubLink} target="_blank" rel="noreferrer">
				<button>Github</button>
			</a>
		</div>
	);
};

export default Buttons;
