import Image from 'next/image';
import ncNewsMockup from '../public/imgs/ncnews-mockup.png';
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

const NcNews = () => {
	return (
		<div className={styles.container}>
			<h3>NC News</h3>
			<Image
				className={styles.ncNews}
				src={ncNewsMockup}
				alt="Notebook mockup displaying NC News interface"
			/>
			<p>
				A Full Stack social news aggregation, web content rating, and discussion
				website.
			</p>
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
				<a
					href="https://nc-news-ismael.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					<button>Project</button>
				</a>
				<a
					href="https://github.com/ismaelpaul/fe-nc-news"
					target="_blank"
					rel="noreferrer"
				>
					<button>Github</button>
				</a>
			</div>
		</div>
	);
};

export default NcNews;
