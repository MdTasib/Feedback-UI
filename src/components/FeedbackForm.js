import React, { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm({ addFeedback }) {
	const [text, setText] = useState("");
	const [rating, setRating] = useState(10);
	const [btnDisable, setBtnDisable] = useState(true);
	const [message, setMessage] = useState("");

	const handleTextChange = e => {
		if (text === "") {
			setBtnDisable(true);
			setMessage(null);
		} else if (text !== "" && text.trim().length <= 10) {
			setMessage("Text must be at least 10 characters");
			setBtnDisable(true);
		} else {
			setMessage(null);
			setBtnDisable(false);
		}

		setText(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			};

			addFeedback(newFeedback);

			setText("");
		}
	};

	return (
		<Card>
			<h2>How would you rate your service with us?</h2>
			<form onSubmit={handleSubmit}>
				<RatingSelect select={rating => setRating(rating)} />
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Write a review'
						value={text}
					/>
					<Button type='submit' version='primary' isDisabled={btnDisable}>
						send
					</Button>
				</div>
				{message && <p className='message'>{message}</p>}
			</form>
		</Card>
	);
}

export default FeedbackForm;
