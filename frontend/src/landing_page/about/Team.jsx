import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container about-team-con">
      <div className="about-padding">
        <div className="row text-center">
          <h1 className="fs-3">Developer</h1>
        </div>
        <div className="row about-s-row">
          <div className="col">
            <img
              src="media/images/about-creator.jpg"
              alt="arnab"
              className="creator"
            />

            <div className="row text-center size-name">
              <h5 className="arnab">Arnab Chakraborty</h5>
              <p className="arnab text-muted">Developer</p>
            </div>
          </div>
          <div className="col bio mt-5">
            <p>
              Arnab built a clone of Zerodha in 2025 as part of his journey in
              web development. Currently, he is pursuing a Diploma in Computer
              Science and Technology.
            </p>
            <p>
              He is passionate about learning modern technologies and enjoys
              building projects that combine practical utility with clean
              design. His curiosity drives him to continuously improve his
              coding and problem-solving skills.
            </p>
            <p>Swimming is his zen.</p>
            <p>
              Connect on{" "}
              <a
                className="a-link"
                href="https://github.com/tharnab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>{" "}
              /{" "}
              <a
                className="a-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/arnab-chakraborty12/"
              >
                LinkedIn
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
