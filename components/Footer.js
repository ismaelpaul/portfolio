import styles from '../styles/Footer.module.scss';
import { SiNextdotjs } from 'react-icons/si';
import { BsFillSuitHeartFill } from 'react-icons/bs';

const Footer = () => {
	return (
		<section>
			<hr className={styles.line} />
			<div className={styles.container}>
				<div className={styles.text}>
					<p>
						Made with
						<span tooltip="Love" flow="up">
							<BsFillSuitHeartFill />
						</span>
						and
						<span tooltip="Next.js" flow="up">
							<SiNextdotjs />
						</span>
						© 2022
					</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
