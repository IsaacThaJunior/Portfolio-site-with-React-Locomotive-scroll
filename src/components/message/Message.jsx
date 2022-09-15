import "./message-style.css";

const Message = () => {
  return (
    <section data-scroll-section className="message-section">
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="2"
        className="message"
      >
        Drop a Message
      </p>
      <div
        className=" op-class"
        data-scroll
        data-scroll-repeat="true"
        data-scroll-class="fadeIn"
        data-scroll-speed="4"
      >
        <input type="text" name="fullName" placeholder="Full Name" id="" />
        <input type="text" name="email" placeholder="Enter Email" id="" />
        <textarea name="" placeholder="Message" id="" />
      </div>
    </section>
  );
};

export default Message;
