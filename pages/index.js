import dynamic from 'next/dynamic';
import Head from 'next/head';

const Navbar = dynamic(() => import('../components/Navbar'));

export default function Home() {
	return (
		<div>
			<Head>
				<title>Ismael Paul Portfolio</title>
				<meta name="title" content="Ismael Paul Portfolio" />
				<meta
					name="keywords"
					content="web developer, frontend developer"
				></meta>
			</Head>

			<Navbar />
		</div>
	);
}
