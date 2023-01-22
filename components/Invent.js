import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiSass } from 'react-icons/di';
import { SiExpress, SiMongodb, SiRedux, SiNetlify } from 'react-icons/si';
import { Tooltip } from '@nextui-org/react';
import inventMockup from '../public/imgs/invent-mockup.png';
import Image from 'next/image';
import styles from '../styles/Invent.module.scss';

const Invent = () => {
	const { ref: containerRef, inView: isContainerVisible } = useInView();

	<div
		ref={containerRef}
		className={`${styles.container} ${
			isContainerVisible ? styles.containerAnimated : ''
		}`}
	>
		<h3>Invent</h3>
		<Image
			className={styles.invent}
			src={inventMockup}
			alt="Notebook mockup displaying Invent app interface"
		/>
		<p>A Full Stack inventory app.</p>
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
			<Tooltip content={'MongoDB'} css={{ fontFamily: 'OpenSans-Regular' }}>
				<SiMongodb />
			</Tooltip>

			<Tooltip content={'SASS'} css={{ fontFamily: 'OpenSans-Regular' }}>
				<DiSass />
			</Tooltip>
			<Tooltip content={'Redux'} css={{ fontFamily: 'OpenSans-Regular' }}>
				<SiRedux />
			</Tooltip>
			<Tooltip content={'Netlify'} css={{ fontFamily: 'OpenSans-Regular' }}>
				<SiNetlify />
			</Tooltip>
		</div>
		<div className={styles.buttons}>
			<a
				href="https://invent-app.netlify.app/"
				target="_blank"
				rel="noreferrer"
			>
				<button>Project</button>
			</a>
			<a
				href="https://github.com/ismaelpaul/fe-invent"
				target="_blank"
				rel="noreferrer"
			>
				<button>Github</button>
			</a>
		</div>
	</div>;
};

export default Invent;
