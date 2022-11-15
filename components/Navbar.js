import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Link href="/">
						IP<span className={styles.dot}>.</span>
					</Link>
				</div>
				<div className={styles.icons}>
					<a
						title="github"
						href="https://github.com/ismaelpaul"
						target="_blank"
						rel="noreferrer"
					>
						<FaGithub />
					</a>
					<a
						title="linkedin"
						href="https://linkedin.com/in/ismaelpaul"
						target="_blank"
						rel="noreferrer"
					>
						<FaLinkedin />
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
