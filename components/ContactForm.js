import { useState } from 'react';
import styles from '../styles/ContactForm.module.scss';

const ContactForm = () => {
	const [inputName, setInputName] = useState('');
	const [inputEmail, setInputEmail] = useState('');
	const [inputMessage, setInputMessage] = useState('');
	const [wasSubmitted, setWasSubmitted] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		const formData = {};
		Array.from(e.currentTarget.elements).forEach((field) => {
			if (!field.name) return;
			formData[field.name] = field.value;
		});
		setInputName('');
		setInputEmail('');
		setInputMessage('');

		await fetch('/api/mail', {
			method: 'post',
			body: JSON.stringify(formData),
		}).then((response) => response.json());

		setWasSubmitted(true);
	}

	return (
		<div className={styles.container}>
			<form method="post" onSubmit={handleSubmit}>
				<div className={styles.name}>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						placeholder="Enter your name"
						onChange={(e) => setInputName(e.target.value)}
						value={inputName}
						required
					/>
				</div>
				<div className={styles.email}>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						onChange={(e) => setInputEmail(e.target.value)}
						value={inputEmail}
						required
					/>
				</div>
				<div className={styles.message}>
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						placeholder="Hello..."
						onChange={(e) => setInputMessage(e.target.value)}
						value={inputMessage}
						required
					/>
				</div>
				{wasSubmitted ? (
					<p className={styles.submittedMessage}>
						Your message has been successfully sent. Thank you!
					</p>
				) : (
					<button className={styles.submitButton} type="submit">
						Get in touch
					</button>
				)}
			</form>
		</div>
	);
};

export default ContactForm;
