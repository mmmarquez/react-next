import ReactMarkdown from "react-markdown";
import Link from "next/link";

const Card = ({ title, content, slug, videos, images }) => (
	<div className="">
		<h2 className="mb-4">{title}</h2>
		<div className="mb-8 max-w-full md:max-w-sm">
			<ReactMarkdown source={content} />
		</div>
		<div>
			{images
				? images.map((img, index) => (
						<img
							key={index}
							className="w-full block mb-8"
							src={img.fields.file.url}
							data-action="zoom"
						/>
					))
				: ""}
		</div>
		<div>
			{videos
				? videos.map((vid, index) => (
						<div
							key={index}
							className="relative hidden-overflow max-w-full pb-embed h-auto"
						>
							<iframe
								className="absolute pin-t pin-r h-full"
								src={`https://player.vimeo.com/video/${vid.split("/")[3]}`}
								frameBorder="0"
								allowFullScreen="true"
							/>
						</div>
					))
				: ""}
		</div>
	</div>
);

// function videoId(video) {
// 	return
// }

export default Card;
