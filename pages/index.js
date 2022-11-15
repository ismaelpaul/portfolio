import dynamic from 'next/dynamic';
import Head from 'next/head';

const Navbar = dynamic(() => import('../components/Navbar'));
const Header = dynamic(() => import('../components/Header'));
const About = dynamic(() => import('../components/About'));

export default function Home() {
	return (
		<>
			<Head>
				<title>Ismael Paul Portfolio</title>
				<meta name="title" content="Ismael Paul Portfolio" />
				<meta
					name="keywords"
					content="web developer, frontend developer"
				></meta>
			</Head>
			<Navbar />
			<Header />
			<About />
		</>
	);
}
