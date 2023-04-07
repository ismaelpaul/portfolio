import Image from 'next/image';
import bibliotechMockup from '../public/imgs/bibliotech-mockup.png';
import styles from '../styles/Bibliotech.module.scss';
import { FaReact } from 'react-icons/fa';
import { SiCss3, SiExpo, SiFirebase } from 'react-icons/si';
import { Tooltip } from '@nextui-org/react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import ProjectDescription from './ProjectDescription';
import Buttons from './Buttons';

const Bibliotech = () => {
	const [isHovering, setIsHovering] = useState(false);

	const { ref: containerRef, inView: isContainerVisible } = useInView();

	const projectDescription =
		'A Full Stack peer-to-peer booklending mobile app.';

	const projectLink =
		'https://expo.dev/@ismafp/bibliotechapp?serviceType=classic&distribution=expo-go';

	const githubLink = 'https://github.com/defective-pikachu/bibliotech';

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
			<h3>Bibliotech</h3>
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
				className={styles.bibliotech}
				src={bibliotechMockup}
				alt="Mobile mockup displaying Bibliotech app interface"
			/>
			<span className={styles.projectDescription}>
				<p>{projectDescription}</p>
			</span>
			<div className={styles.icons}>
				<Tooltip
					content={'React Native'}
					css={{ fontFamily: 'OpenSans-Regular' }}
				>
					<FaReact />
				</Tooltip>

				<Tooltip content={'Expo'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<SiExpo />
				</Tooltip>

				<Tooltip content={'CSS'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<SiCss3 />
				</Tooltip>

				<Tooltip content={'Firebase'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<SiFirebase />
				</Tooltip>
			</div>
			<div className={styles.buttons}>
				<Buttons projectLink={projectLink} githubLink={githubLink} />
			</div>
		</div>
	);
};

export default Bibliotech;
