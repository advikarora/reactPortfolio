import { Link } from "react-router-dom";
import "./styles.css";
import { ReactTyped } from "react-typed";

const Home = () => {
    return (
    <div className="home">
      <div className="title">
        <div className="animated-typing">
        <ReactTyped
          strings={[
            "Hello",
            "I'm Advik",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
        </div>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/pfp.png`}
          alt="personal pic"
        />
      </div>
    </div>
    )
};

export default Home;
