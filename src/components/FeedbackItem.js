import Card from "./shared/Card";

function FeedbackItem({ item }) {
	return (
		<Card reverse={false}>
			<span className='num-display'>{item.rating}</span>
			<p className='text-display'>{item.text}</p>
		</Card>
	);
}

export default FeedbackItem;
