import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

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
		<React.Fragment>
			<Header />
			<main className='container'>
				<FeedbackForm addFeedback={addFeedback} />
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</main>
		</React.Fragment>
	);
}

export default App;
