import Image from 'next/image';
import bibliotechMockup from '../public/imgs/bibliotech-mockup.png';
import styles from '../styles/Bibliotech.module.scss';
import { FaReact } from 'react-icons/fa';
import { SiCss3, SiExpo, SiFirebase } from 'react-icons/si';

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
				<span tooltip="React Native" flow="up">
					<FaReact />
				</span>

				<span tooltip="Expo" flow="up">
					<SiExpo />
				</span>
				<span tooltip="CSS3" flow="up">
					<SiCss3 />
				</span>
				<span tooltip="Firebase" flow="up">
					<SiFirebase />
				</span>
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
