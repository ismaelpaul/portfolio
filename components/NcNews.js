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
				<span tooltip="React" flow="up">
					<FaReact />
				</span>
				<span tooltip="Node.js" flow="up">
					<FaNodeJs />
				</span>
				<span tooltip="Express.js" flow="up">
					<SiExpress />
				</span>
				<span tooltip="PostreSQL" flow="up">
					<SiPostgresql />
				</span>
				<span tooltip="CSS3" flow="up">
					<SiCss3 />
				</span>
				<span tooltip="Jest" flow="up">
					<SiJest />
				</span>
				<span tooltip="Heroku" flow="up">
					<SiHeroku />
				</span>
				<span tooltip="Netlify" flow="up">
					<SiNetlify />
				</span>
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
