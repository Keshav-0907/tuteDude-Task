import "./Hero.css";
import EnrollIcon from "../../Icons/EnrollIcon";
import QuestionIcon from "../../Icons/QuestionIcon";
import StarIcon from "../../Icons/StarIcon";
import CoursesIcon from "../../Icons/CoursesIcon";
import LearnerIcon from "../../Icons/LearnerIcon";
import DoubtsIcon from "../../Icons/DoubtsIcon";


const Features = [
  "Personal Mentorship",
  "Internship Assistance",
  "Industry Certified Courses",
];

const Stats = [
  {
    id: 1,
    title: "Courses",
    value: "24",
    icon: <CoursesIcon />,
  },
  {
    id: 2,
    title: "Learners",
    value: "30k+",
    icon: <LearnerIcon/>,
  },
  {
    id: 3,
    title: "Doubts Solved",
    value: "100k+",
    icon: <DoubtsIcon />,
  },
  {
    id: 4,
    title: "Studnet Projects",
    value: "10k+",
    icon: <DoubtsIcon />, // TODO 
  },
];

const HeroPage = () => {
  return (
    <div className="hero-container">
      <div className="hero-main">
        <div className="hero-iit">
          <div>🎓</div>
          <div>An IIT Delhi Alumni Initiative</div>
        </div>

        <div className="hero-heading">
          Become an Expert in the field of{" "}
          <span className="hero-heading-highlight">
            {" "}
            Data Science with 6 courses{" "}
          </span>
        </div>

        <div className="hero-sub-heading">
          A specially crafted Tech Kickstarter, with{" "}
          <span className="hero-sub-heading-highlight"> 5+ extensive </span>{" "}
          online courses.
        </div>

        <div className="hero-features">
          {Features.map((feature, index) => {
            return (
              <div key={index} className="hero-features-box">
                <div className="hero-feature-icon">
                  {" "}
                  <StarIcon />{" "}
                </div>
                <div> {feature} </div>
              </div>
            );
          })}
        </div>

        <div className="hero-enroll-container">
          <button>
            {" "}
            Enroll Now <EnrollIcon />{" "}
          </button>
          <div className="hero-know-more">
            {" "}
            Know More <QuestionIcon />{" "}
          </div>
        </div>
      </div>

      <div className="hero-stats">
        {Stats.map((stat) => {
          return (
            <div key={stat.id} className="hero-stats-box">
              <div className="hero-stats-icon">{stat.icon}</div>
              <div className="hero-stats-data">
                <div className="hero-stats-value">{stat.value}</div>
                <div className="hero-stats-title">{stat.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroPage;
