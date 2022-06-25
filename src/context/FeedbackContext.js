import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{ id: 1, text: "Hello world", rating: 5 },
	]);

	const deleteFeedback = id => {
		if (window.confirm("Are you sure delete this feedback?")) {
			// const newFeedback = [...feedback].filter(item => item.id !== id);
			// setFeedback(newFeedback);
			setFeedback(feedback.filter(item => item.id !== id));
		}
	};

	const addFeedback = newFeedback => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	return (
		<FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
