import ContactForm from './ContactForm';
import styles from '../styles/Contact.module.scss';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
	const { ref: containerRef, inView: isContainerVisible } = useInView();
	return (
		<section>
			<div
				ref={containerRef}
				className={`${styles.container} ${
					isContainerVisible ? styles.containerAnimated : ''
				}`}
			>
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
