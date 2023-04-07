import React, { useState } from 'react';
import { DiSass } from 'react-icons/di';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import {
	SiExpress,
	SiMongodb,
	SiNetlify,
	SiRedux,
	SiTypescript,
} from 'react-icons/si';
import entertainment from '../public/imgs/entertainment.png';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Entertainment.module.scss';
import { Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import ProjectDescription from './ProjectDescription';
import Buttons from './Buttons';

const Entertainment = () => {
	const [isHovering, setIsHovering] = useState(false);

	const { ref: containerRef, inView: isContainerVisible } = useInView();

	const projectDescription =
		'A Full Stack entertainment web app, a pixel-perfect challenge from Frontend Mentor.';

	const projectLink = 'https://entertainment-webb.netlify.app/';

	const githubLink =
		'https://github.com/ismaelpaul/frontend-mentor-fe-entertainment';

	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return (
		<div
			ref={containerRef}
			className={`${styles.container} ${
				isContainerVisible ? styles.containerAnimated : ''
			}`}
		>
			<h3>Entertainment</h3>
			<span
				onMouseOut={handleMouseOut}
				onMouseOver={handleMouseOver}
				className={isHovering ? styles.descriptionOnHover : styles.description}
			>
				<span className={styles.projectDescriptionOverlay}>
					<ProjectDescription
						projectDescription={projectDescription}
						projectLink={projectLink}
						githubLink={githubLink}
					/>
				</span>
			</span>
			<Image
				onMouseOut={handleMouseOut}
				onMouseOver={handleMouseOver}
				className={styles.entertainment}
				src={entertainment}
				alt="Image displaying Entertainment App interface"
			/>
			<span className={styles.projectDescription}>
				<p>{projectDescription}</p>
			</span>

			<div className={styles.icons}>
				<Tooltip
					content={'TypeScript'}
					css={{ fontFamily: 'OpenSans-Regular' }}
				>
					<SiTypescript />
				</Tooltip>
				<Tooltip content={'React'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<FaReact />
				</Tooltip>
				<Tooltip content={'Redux'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<SiRedux />
				</Tooltip>
				<Tooltip content={'SASS'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<DiSass />
				</Tooltip>
				<Tooltip content={'Node.js'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<FaNodeJs />
				</Tooltip>
				<Tooltip content={'Express'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<SiExpress />
				</Tooltip>

				<Tooltip content={'MongoDB'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<SiMongodb />
				</Tooltip>
				<Tooltip content={'Netlify'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<SiNetlify />
				</Tooltip>
			</div>
			<div className={styles.buttons}>
				<Buttons projectLink={projectLink} githubLink={githubLink} />
			</div>
		</div>
	);
};

export default Entertainment;
