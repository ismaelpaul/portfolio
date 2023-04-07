import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiSass } from 'react-icons/di';
import { SiExpress, SiMongodb, SiRedux, SiNetlify } from 'react-icons/si';
import { Tooltip } from '@nextui-org/react';
import invent from '../public/imgs/invent.png';
import Image from 'next/image';
import styles from '../styles/Invent.module.scss';
import Buttons from './Buttons';
import ProjectDescription from './ProjectDescription';
import { useState } from 'react';

const Invent = () => {
	const [isHovering, setIsHovering] = useState(false);

	const { ref: containerRef, inView: isContainerVisible } = useInView();

	const projectDescription = 'A Full Stack inventory web app';

	const projectLink = 'https://invent-app.netlify.app/';

	const githubLink = 'https://github.com/ismaelpaul/fe-invent';

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
			<h3>Invent</h3>
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
				className={styles.invent}
				src={invent}
				alt="Image displaying Invent app interface"
			/>
			<span className={styles.projectDescription}>
				<p>{projectDescription}</p>
			</span>

			<div className={styles.icons}>
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

export default Invent;
