import Image from 'next/image';
import ncNews from '../public/imgs/nc-news.png';
import styles from '../styles/NcNews.module.scss';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
	SiExpress,
	SiPostgresql,
	SiCss3,
	SiJest,
	SiHeroku,
	SiNetlify,
} from 'react-icons/si';
import { Tooltip } from '@nextui-org/react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import ProjectDescription from './ProjectDescription';
import Buttons from './Buttons';

const NcNews = () => {
	const [isHovering, setIsHovering] = useState(false);

	const { ref: containerRef, inView: isContainerVisible } = useInView();

	const projectDescription =
		'A Full Stack social news aggregation, web content rating, and discussion web app.';

	const projectLink = 'https://nc-news-ismael.netlify.app/';

	const githubLink = 'https://github.com/ismaelpaul/fe-nc-news';

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
			<h3>NC News</h3>
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
				className={styles.ncNews}
				src={ncNews}
				alt="Notebook mockup displaying NC News interface"
			/>
			<span className={styles.projectDescription}>
				<p>{projectDescription}</p>
			</span>

			<div className={styles.icons}>
				<Tooltip content={'React'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<FaReact />
				</Tooltip>

				<Tooltip content={'Node.js'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<FaNodeJs />
				</Tooltip>
				<Tooltip content={'Express'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<SiExpress />
				</Tooltip>
				<Tooltip content={'PostgrSQL'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<SiPostgresql />
				</Tooltip>

				<Tooltip content={'CSS'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<SiCss3 />
				</Tooltip>
				<Tooltip content={'Jest'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<SiJest />
				</Tooltip>
				<Tooltip content={'Heroku'} css={{ fontFamily: 'OpenSans-Regular' }}>
					<SiHeroku />
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

export default NcNews;
