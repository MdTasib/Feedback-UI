import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";

function FeedbackItem({ item }) {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

	return (
		<Card reverse={false}>
			<span className='num-display'>{item.rating}</span>
			<button onClick={() => deleteFeedback(item.id)} className='close'>
				<FaTimes color='purple' />
			</button>
			<button onClick={() => editFeedback(item)} className='edit'>
				<FaEdit color='purple' />
			</button>
			<p className='text-display'>{item.text}</p>
		</Card>
	);
}

export default FeedbackItem;
