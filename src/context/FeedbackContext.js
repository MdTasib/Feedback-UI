import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{ id: 1, text: "Hello world", rating: 5 },
		{ id: 2, text: "Hello world 2", rating: 8 },
		{ id: 3, text: "Hello world 3", rating: 3 },
	]);
	const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

	// delete a feedback
	const deleteFeedback = id => {
		if (window.confirm("Are you sure delete this feedback?")) {
			// const newFeedback = [...feedback].filter(item => item.id !== id);
			// setFeedback(newFeedback);
			setFeedback(feedback.filter(item => item.id !== id));
		}
	};

	// add a new feedback
	const addFeedback = newFeedback => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	// Set item to be updated
	const editFeedback = item => {
		setFeedbackEdit({ item, edit: true });
	};

	// updated feedback item
	const updateFeedback = (id, updateItem) => {
		const updatedFeedback = feedback.map(item =>
			item.id === id ? { ...item, ...updateItem } : item
		);
		setFeedback(updatedFeedback);
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
