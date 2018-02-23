import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

const Card = ({ title, content, key, slug }) => (
	<div className={('border', 'bg-green')}>
		<h2>{title}</h2>
		<ReactMarkdown source={content} />
	</div>
);

export default Card;
