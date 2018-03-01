import Link from 'next/link';

const WorkLink = ({ slug, title }) => (
	<div className="">
		<Link href={`/work/${slug}`}>
			<a>{title}</a>
		</Link>
	</div>
);

export default WorkLink;
