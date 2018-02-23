import 'isomorphic-fetch';
import Card from '../components/Card.js';
import stylesheet from '../styles/styles.css';
import { createClient } from '../plugins/contentful.js';
const client = createClient();
import Head from 'next/head';

const Work = ({ work }) => (
	<div>
		<Head>
			<title>{`${work.fields.seoTitle} | A A`}</title>
			<meta
				property="description"
				content={work.fields.seoDescription}
				key="description"
			/>
			<meta
				property="keywords"
				content={work.fields.seoKeywords.join(', ')}
				key="keywords"
			/>
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
				key="viewport"
			/>
		</Head>
		<Card
			className="bg-green border"
			key={work.sys.id}
			title={work.fields.title}
			content={work.fields.content}
			slug={work.fields.slug}
		/>
	</div>
);

Work.getInitialProps = async ({ query: { slug } }) => {
	// `env` is available in the context object
	return Promise.all([
		// fetch the owner of the blog
		client.getEntries({
			content_type: process.env.CTF_BLOG_POST_TYPE_ID,
			'fields.slug': slug
		})
	])
		.then(([work]) => {
			// return data that should be available
			// in the template
			console.log(work.items[0].fields.seoKeywords.join(' '));
			return {
				work: work.items[0],
				seo_keywords: work.items[0].fields.seoKeywords.join(' ')
			};
		})
		.catch(console.error);

	// const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	// const data = await response.json();
};

export default Work;
