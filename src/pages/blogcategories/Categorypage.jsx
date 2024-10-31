import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../../components/blogs/blogdata";
import Navbar from "../../components/navbar/navbar";
import Navid from "../../assets/vidhio.mp4";
import useScrollToTop from "../../hooks/useScrollToTop";

const CategoryPage = () => {
    useScrollToTop();
	const { category } = useParams();
	const filteredBlogs = blogData.filter(
		(blog) => blog.category.toLowerCase() === category.toLowerCase()
	);

	return (
		<>
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

				<div className="flex justify-center items-center text-white relative text-sm md:text-3xl font-bold md:leading-[4rem] text-center p-20">
					<p className="text-nowrap">
						{`Explore the world of ${category.replace("-", " ")}`}
						<p>Let's unlock the secrets to a fulfilling life.</p>
					</p>
				</div>
			</div>

			<div className="flex flex-col min-h-screen gap-10 justify-start m-4 mt-6 md:mx-20">
				<div>
					<h1 className="text-2xl md:text-3xl font-bold mb-4 uppercase text-center">
						{category.replace("-", " ")}
					</h1>
					{filteredBlogs.length > 0 ? (
						filteredBlogs.map((blog) => (
							<Link to={`/blogs/${blog.category}/${blog.id}`}>
								<div
									key={blog.id}
									className="mb-5 border-2 py-4 rounded-xl bg-white drop-shadow px-8 hover:scale-105  duration-300"
								>
									<h2 className="md:text-xl font-semibold ">{blog.title}</h2>
									<p className="text-sm md:text-base">{blog.excerpt}</p>
								</div>
							</Link>
						))
					) : (
						<p>No blogs found in this category.</p>
					)}
				</div>
				<Link
					to="/"
					className="p-2 bg-white w-fit rounded-md hover:scale-105 active:bg-black/20 duration-200"
				>
					Go Back
				</Link>
			</div>
		</>
	);
};

export default CategoryPage;
