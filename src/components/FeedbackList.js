import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
	if (!feedback || feedback.length === 0) {
		return (
			<h2 style={{ textAlign: "center", paddingTop: "3rem" }}>
				Feedback Not Yet!
			</h2>
		);
	}

	return (
		<div>
			{feedback.map(item => (
				<FeedbackItem key={item.id} item={item} />
			))}
		</div>
	);
}

export default FeedbackList;
