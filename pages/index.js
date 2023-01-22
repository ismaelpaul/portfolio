import dynamic from 'next/dynamic';
import Head from 'next/head';

const Navbar = dynamic(() => import('../components/Navbar'));
const Header = dynamic(() => import('../components/Header'));
const About = dynamic(() => import('../components/About'));
const Projects = dynamic(() => import('../components/Projects'));
const Contact = dynamic(() => import('../components/Contact'));
const Footer = dynamic(() => import('../components/Footer'));

export default function Home() {
	return (
		<>
			<Head>
				<title>Ismael Paul</title>
				<meta name="title" content="Ismael Paul" />
				<meta
					name="description"
					content="Full Stack Developer based in Manchester."
				/>
				<meta property="og:type" content="website" />
				<meta
					name="keywords"
					content="web developer, frontend developer, full stack developer"
				></meta>
				<meta property="og:URL" content="https://www.ismaelpaul.com" />
				<meta property="og:title" content="Ismael Paul" />
				<meta
					property="og:description"
					content="Full Stack Developer based in Manchester."
				/>
			</Head>
			<Navbar />
			<Header />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}
