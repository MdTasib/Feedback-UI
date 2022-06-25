import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
	if (!feedback || feedback.length === 0) {
		return (
			<h2 style={{ textAlign: "center", paddingTop: "3rem" }}>
				Feedback Not Yet!
			</h2>
		);
	}

	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map(item => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ ease: "easeOut", duration: 0.5 }}>
						<FeedbackItem
							key={item.id}
							item={item}
							handleDelete={handleDelete}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}

export default FeedbackList;
