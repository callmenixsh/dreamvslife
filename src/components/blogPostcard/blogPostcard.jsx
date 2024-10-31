// BlogPostCard.jsx
import { Link } from "react-router-dom";

const BlogPostCard = () => {
	const posts = [
		{
			title: "Mental Health",
			slug: "Mental-Health",
			description: [
				"Understanding mental health issues.",
				"Importance of emotional well-being.",
				"Coping strategies for stress management.",
				"Resources for mental health support.",
			],
			color:
				"border-2 border-black text-black hover:bg-black/40 hover:text-white uppercase",
		},
		{
			title: "Psychology",
			slug: "psychology",
			description: [
				"Child psychology & parenting.",
				"Educational Psychology.",
				"Health Psychology.",
				"Social & personality psychology.",
				"Relationships.",
			],
			color:
				"border-2 border-black text-black hover:bg-black/40 hover:text-white uppercase",
		},
		{
			title: "Lifestyle",
			slug: "lifestyle",
			description: [
				"Tips for leading a healthy lifestyle.",
				"Balancing work, play, and rest.",
				"Mindfulness and wellness practices.",
				"Finding time for hobbies and interests.",
			],
			color:
				"border-2 border-black text-black hover:bg-black/40 hover:text-white uppercase",
		},
		{
			title: "Career Development",
			slug: "career-dev",
			description: [
				"Navigating career paths and choices.",
				"Skills development for career advancement.",
				"Networking tips for professionals.",
				"Work-life balance strategies.",
			],
			color:
				"border-2 border-black text-black hover:bg-black/40 hover:text-white uppercase",
		},
	];

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-4 gap-6 p-8 2xl:max-w-[1500px] mx-auto text-center">
			{posts.map((post, index) => (
				<Link
					to={`/blogs/${post.slug}`}
					className={`p-6 ${post.color} shadow-md hover:scale-105 transform transition duration-300`}
				>
					<h2 className="text-lg md:text-2xl font-bold mb-2 text-center">{post.title}</h2>
					<ul className="list-disc list-inside text-xs md:text-sm space-y-1 text-left pl-5">
						{post.description.map((line, i) => (
							<li key={i}>{line}</li>
						))}
					</ul>
				</Link>
			))}
		</div>
	);
};

export default BlogPostCard;
