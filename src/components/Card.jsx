import './card-style.css';

function Card(props) {
	const { image, title, description } = props;
	return (
		<div className="card container">
			<div className="cardImg">
				<img src={image} alt="img" />
			</div>

			<div className="cardContent">
				<p className="cardTitle">{title}</p>
				<p className="cardDesc">{description}</p>
			</div>
		</div>
	);
}

export default Card;
