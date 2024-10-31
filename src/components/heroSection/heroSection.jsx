import React from "react";
import Navid from "../../assets/vidhio.mp4";
import Navbar from "../navbar/navbar";

const heroSection = () => {
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

				<div className="flex justify-center items-center text-white relative text-sm sm:text-xl md:text-3xl font-bold md:leading-[4rem] text-center p-20">
					<p className="text-nowrap">
						Don't fall apart,
						<p>Together let's join the pieces of mind and heart.</p>
					</p>
				</div>
			</div>
		</>
	);
};

export default heroSection;
