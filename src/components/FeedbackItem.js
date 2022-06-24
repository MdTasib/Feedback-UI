import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete }) {
	return (
		<Card reverse={false}>
			<span className='num-display'>{item.rating}</span>
			<button onClick={() => handleDelete(item.id)} className='close'>
				<FaTimes color='purple' />
			</button>
			<p className='text-display'>{item.text}</p>
		</Card>
	);
}

export default FeedbackItem;
