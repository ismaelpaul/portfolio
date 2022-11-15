import styles from '../styles/Header.module.scss';

const Header = () => {
	return (
		<section className={styles.header}>
			<div className={styles.text}>
				<p>
					Hi, my name is Ismael<span>.</span>
				</p>
				<h1>
					I am a <span>Full Stack Developer</span> based in Manchester, UK
					<span>.</span> I love building human-centric digital experiences
					<span>.</span>
				</h1>
			</div>
		</section>
	);
};

export default Header;
