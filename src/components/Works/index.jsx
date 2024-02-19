import "./styles.css";


const Works = () => {
  return (
    <div className="works">
      <h1>Resume</h1>
      <img
          src={`${process.env.PUBLIC_URL}/resumepng.png`}
          alt="personal pic"
        />
    </div>
  );
};

export default Works;