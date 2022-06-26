import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([]);
	const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchFeedback();
	}, []);

	// fetch feedback
	const fetchFeedback = async () => {
		const response = await fetch(`/feedback?_sort=id&_order=desc`);
		const data = await response.json();
		setFeedback(data);
		setIsLoading(false);
	};

	// delete a feedback
	const deleteFeedback = async id => {
		if (window.confirm("Are you sure delete this feedback?")) {
			// const newFeedback = [...feedback].filter(item => item.id !== id);
			// setFeedback(newFeedback);
			await fetch(`/feedback/${id}`, { method: "DELETE" });
			setFeedback(feedback.filter(item => item.id !== id));
		}
	};

	// add a new feedback
	const addFeedback = async newFeedback => {
		const response = await fetch("/feedback", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(newFeedback),
		});

		const data = await response.json();
		setFeedback([data, ...feedback]);
	};

	// Set item to be updated
	const editFeedback = item => {
		setFeedbackEdit({ item, edit: true });
	};

	// updated feedback item
	const updateFeedback = async (id, updateItem) => {
		const response = await fetch(`/feedback/${id}`, {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(updateItem),
		});

		const data = await response.json();

		const updatedFeedback = feedback.map(item =>
			item.id === id ? { ...item, ...data } : item
		);
		setFeedback(updatedFeedback);
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				isLoading,
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
