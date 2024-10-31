// src/pages/Blogs/BlogPage.js
import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Navid from "../../assets/vidhio.mp4";
import blogData from "../../components/blogs/blogdata";
import useScrollToTop from "../../hooks/useScrollToTop";

const BlogPage = () => {
	useScrollToTop();
	const { category, id } = useParams();
	const blog = id ? blogData.find((blog) => blog.id === parseInt(id)) : null;

	if (blog) {
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
				</div>

				<div className="flex flex-col p-8 gap-10 justify-start md:mx-20">
					<div className="bg-white rounded p-8">
						<h1 className="text-2xl md:text-4xl font-bold mb-4 ">{blog.title}</h1>
						<div
							className="mb-4"
							dangerouslySetInnerHTML={{ __html: blog.content }}
						/>
					</div>
					<Link
						to={`/blogs/${blog.category}`}
						className="p-2 bg-white w-fit rounded-md hover:scale-105 active:bg-black/20 duration-200"
					>
						Back to {blog.category.replace("-", " ")}
					</Link>
				</div>
			</>
		);
	}

	return <Navigate to="/404" />;
};

export default BlogPage;
