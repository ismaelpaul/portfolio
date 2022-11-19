import Image from 'next/image';
import bibliotechMockup from '../public/imgs/bibliotech-mockup.png';
import styles from '../styles/Bibliotech.module.scss';
import { FaReact } from 'react-icons/fa';
import { SiCss3, SiExpo, SiFirebase } from 'react-icons/si';
import { Tooltip } from '@nextui-org/react';

const Bibliotech = () => {
	return (
		<div className={styles.container}>
			<h3>Bibliotech</h3>
			<Image
				className={styles.bibliotech}
				src={bibliotechMockup}
				alt="Mobile mockup displaying Bibliotech app interface"
			/>
			<p>A Full Stack peer-to-peer booklending app.</p>
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
				<a
					href="https://expo.dev/@ismafp/bibliotechapp?serviceType=classic&distribution=expo-go"
					target="_blank"
					rel="noreferrer"
				>
					<button>Project</button>
				</a>
				<a
					href="https://github.com/defective-pikachu/bibliotech"
					target="_blank"
					rel="noreferrer"
				>
					<button>Github</button>
				</a>
			</div>
		</div>
	);
};

export default Bibliotech;
