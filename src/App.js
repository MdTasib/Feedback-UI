import React, { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	return (
		<React.Fragment>
			<Header />
			<main className='container'>
				<FeedbackList feedback={feedback} />
			</main>
		</React.Fragment>
	);
}

export default App;
