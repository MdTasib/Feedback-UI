import React, { useState } from "react";
import Card from "./shared/Card";

function FeedbackForm() {
	const [text, setText] = useState("");
	const handleTextChange = e => {
		setText(e.target.value);
	};

	return (
		<Card>
			<h2>How would you rate your service with us?</h2>
			<form>
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Write a review'
						value={text}
					/>
					<input type='submit' value='SEND' />
				</div>
			</form>
		</Card>
	);
}

export default FeedbackForm;
