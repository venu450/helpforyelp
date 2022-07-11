import React, { useEffect, useState } from 'react';

const Review = () => {
	return (
		<div>
			<h1> Testing style page</h1>
			<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
			<div className="flex items-center justify-center min-h-screen">
				<div className="flex items-center justify-between h-24 text-white bg-purple-600 rounded-lg shadow-md">
					<div className="flex flex-col px-4">
						<span className="text-xs text-purple-300">Next visit</span>
						<p className="text-2xl font-semibold uppercase">19 Oct 2021</p>
					</div>
					<img className="h-full py-2 pr-4 ml-8" src="https://placeimg.com/640/480/any"></img>
				</div>
			</div>
		</div>
	);
};

export default Review;
