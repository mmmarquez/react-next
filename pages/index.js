import 'isomorphic-fetch';
import WorkLink from '../components/WorkLink.js';
import { createClient } from '../plugins/contentful.js';
const client = createClient();
import Head from 'next/head';

const Index = ({ entries }) => (
	<div>
		<Head>
			<title>AA</title>
			<meta
				property="description"
				content="description someting"
				key="description"
			/>
			<meta
				property="keywords"
				content="some keywords, more keywords and some other keywords"
				key="keywords"
			/>
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
				key="viewport"
			/>
		</Head>
		<div id="container">
			{
				entries.map(x => (
					
				<WorkLink className="field" key={x.sys.id} title={x.fields.title} slug={x.fields.slug} />
			))
			}
		</div>
	</div>
);

Index.getInitialProps = async () => {
	return Promise.all([
		client.getEntries({
			content_type: process.env.CTF_BLOG_POST_TYPE_ID,
			order: '-sys.createdAt'
		})
	])
		.then(([entries]) => {
			return {
				entries: entries.items
			};
		})
		.catch(console.error);
};

export default Index;

