import "isomorphic-fetch";
import Card from "../components/Card.js";
import { createClient } from "../plugins/contentful.js";
const client = createClient();
import Head from "next/head";

// <meta
// 	property="keywords"
// 	content={
// 		work.fields.seoKeywords.join(", ")
// 			? work.fields.seoKeywords.join(", ")
// 			: "lol"
// 	}
// 	key="keywords"
// />

const Work = ({ work }) => (
	<div>
		<Head>
			<title>
				{`${work.fields.seoTitle} | A A`
					? `${work.fields.seoTitle} | A A`
					: "Amanda Agricola"}
			</title>

			<meta
				property="description"
				content={
					work.fields.seoDescription ? work.fields.seoDescription : "lol"
				}
				key="description"
			/>
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
				key="viewport"
			/>
		</Head>

		<div className="container max-w-xxl mx-auto py-4 px-6 lg:px-0">
			<Card
				className=""
				key={work.sys.id}
				title={work.fields.title}
				content={work.fields.content}
				slug={work.fields.slug}
				videos={work.fields.videos}
				images={work.fields.images}
			/>
		</div>
	</div>
);

Work.getInitialProps = async ({ query: { slug } }) => {
	return Promise.all([
		client.getEntries({
			content_type: process.env.CTF_BLOG_POST_TYPE_ID,
			"fields.slug": slug
		})
	])
		.then(([work]) => {
			return {
				work: work.items[0]
			};
		})
		.catch(console.error);
};

Work.componentDidMount = () => {
	console.log("did it?");
};

export default Work;
