import ContactForm from './ContactForm';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
	return (
		<section>
			<div className={styles.container}>
				<h2>
					Get in touch<span>.</span>
				</h2>
				<div className={styles.content}>
					<p>
						Feel free to contact me by submitting the form below and I will get
						back to you as soon as possible.
					</p>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Contact;
