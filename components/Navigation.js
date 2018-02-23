import Link from 'next/link';

const Navigation = () => (
	<nav id="__navigation" className="fixed pin-t pin-l pin-r bg-grey-light">
		<div className="container max-w-xxl mx-auto py-4 px-6 lg:px-0">
			<ul className="inline-flex list-reset w-full">
				<li className="mr-4">
					<Link href={`/`}>
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href={`/contact`}>
						<a>Contact</a>
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navigation;
