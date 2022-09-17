import image from '../../assets/profile.png';
import './intro-style.css';

const Introduction = () => {
	return (
		<section className="intro-section">
			<div className="intro-image">
				<img src={image} height={700} alt="profile" />
			</div>
			<div className="intro-title">
				<h1 data-scroll data-scroll-speed="9">
					Isaac Junior
					<br />A Frontend Engineer and Technical writer with a deep focus on
					creating pixel perfect designs
				</h1>
			</div>
		</section>
	);
};

export default Introduction;
