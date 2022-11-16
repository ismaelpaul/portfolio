import styles from '../styles/ContactForm.module.scss';

const ContactForm = () => {
	return (
		<div className={styles.container}>
			<form method="post">
				<div className={styles.name}>
					<label htmlFor="name">Name</label>
					<input type="text" name="name" placeholder="Enter your name" />
				</div>
				<div className={styles.email}>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" placeholder="Enter your email" />
				</div>
				<div className={styles.message}>
					<label htmlFor="message">Message</label>
					<textarea name="message" placeholder="Hello..." />
				</div>
				<button className={styles.submitButton} type="submit">
					Get in touch
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
