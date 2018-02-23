// Edit the document template
import Document, { Head, Main, NextScript } from 'next/document';
import stylesheet from '../styles/styles.css';
import Navigation from '../components/Navigation.js';

export default class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				</Head>
				<body className="__body">
					<Navigation />
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
