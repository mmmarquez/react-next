import Link from 'next/link';

const WorkLink = ({ slug, title }) => (
	<div className="container max-w-xxl mx-auto py-2 border px-6 lg:px-0 mb-2">
		<Link href={`/work/${slug}`}>
			<a>{title}</a>
		</Link>
	</div>
);

export default WorkLink;
