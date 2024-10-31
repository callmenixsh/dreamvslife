import React from "react";
import Navbar from "../../components/navbar/Navbar"; // Ensure the path to your Navbar component is correct
import useScrollToTop from "../../hooks/useScrollToTop";
import Navid from "../../assets/vidhio.mp4";

const Author = () => {
	useScrollToTop();
	return (
		<div>
			<div className="relative w-full">
				<Navbar />
				<video
					src={Navid}
					autoPlay
					loop
					muted
					className="absolute top-0 left-0 w-full h-full object-cover z-0 contrast-75"
				>
					<source src={Navid} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<div className="p-8">
				<h1 className="text-3xl font-bold mb-4 text-center">
					About the Author
				</h1>
				<div className="flex flex-col items-center mb-6">
					<img
						src="path/to/daisy-image.jpg" // Replace with the actual image path or URL
						alt="Daisy"
						className="w-32 h-32 rounded-full mb-4 object-cover bg-white"
					/>
					<h2 className="text-2xl font-semibold">Daisy</h2>
				</div>
				<p className="mb-4 text-lg">
					Daisy is a passionate writer with a keen interest in mental health,
					lifestyle, and personal development. With years of experience in
					writing and content creation, she aims to inspire her readers to
					embrace their journey towards self-improvement and emotional
					well-being.
				</p>
				<p className="mb-4 text-lg">
					In her free time, Daisy enjoys reading, practicing mindfulness, and
					exploring nature. She believes in the power of storytelling and aims
					to connect with her audience through authentic and relatable content.
				</p>
				<h3 className="text-xl font-semibold mb-2">Connect with Daisy:</h3>
				<ul className="list-disc list-inside mb-4">
					<li>
						<a
							href="https://twitter.com/daisy"
							className="text-blue-500 underline"
						>
							Twitter
						</a>
					</li>
					<li>
						<a
							href="https://instagram.com/daisy"
							className="text-blue-500 underline"
						>
							Instagram
						</a>
					</li>
					<li>
						<a
							href="https://linkedin.com/in/daisy"
							className="text-blue-500 underline"
						>
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Author;
