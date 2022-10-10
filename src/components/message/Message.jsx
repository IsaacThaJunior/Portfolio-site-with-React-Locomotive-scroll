import './message-style.css';

const Message = () => {
	return (
		<section className="message-section">
			<p className="message">Drop a Message</p>
			<div className=" op-class">
				<input type="text" name="fullName" placeholder="Full Name" id="" />
				<input type="text" name="email" placeholder="Enter Email" id="" />
				<textarea name="" placeholder="Message" id="" />
			</div>
		</section>
	);


};

export default Message;
