import React from "react";
import Styles from "@/Styles/HomePage/Index.module.css";
import { v4 as uuidv4 } from "uuid";

const Feed = () => {
	const items = [1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<div className={Styles.feedContainer}>
			<div className={Styles.header}>Feed</div>
			<div className={Styles.feedList}>
				{items.map((item, ind) => {
					return <FeedItem key={uuidv4()} />;
				})}
			</div>
		</div>
	);
};

const FeedItem = ({ key }) => {
	return (
		<div key={key} className={Styles.feedItem}>
			Item
		</div>
	);
};

export default Feed;
