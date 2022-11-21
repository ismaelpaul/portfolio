import styles from '../styles/Footer.module.scss';
import { SiNextdotjs } from 'react-icons/si';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { Tooltip } from '@nextui-org/react';

const Footer = () => {
	return (
		<section>
			<hr className={styles.line} />
			<div className={styles.container}>
				<div className={styles.text}>
					<p>Made with </p>
					<Tooltip
						className={styles.icons}
						content={'Love :)'}
						css={{ fontFamily: 'OpenSans-Regular' }}
					>
						<BsFillSuitHeartFill />
					</Tooltip>
					<p>and</p>
					<Tooltip
						className={styles.icons}
						content={'Next.js'}
						css={{ fontFamily: 'OpenSans-Regular' }}
					>
						<SiNextdotjs />
					</Tooltip>
					<p>© 2022</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
