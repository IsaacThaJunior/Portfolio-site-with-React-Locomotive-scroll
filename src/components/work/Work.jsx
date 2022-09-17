import "./Work-style.css";
import Card from "../Card";

const Work = () => {
  return (
    <section id="case-stick"  className="work-section">
      <p
        className="case"
    
      >
        CASE STUDIES <br />
        Latest Works
      </p>

      <Card
        image="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate"
      />
      <Card
        image="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate"
      />
      <Card
        image="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate"
      />
    </section>
  );
};

export default Work;
