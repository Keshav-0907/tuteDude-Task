import EyeIcon from "../../Icons/EyeIcon";
import "./CourseCurriculum.css";

const courseData = [
  {
    language: "C++",
    description: "Learn C++ for strong programming fundamentals.",
  },
  {
    language: "MERN Stack",
    description: "Master the MERN stack for high-demand projects.",
  },
  {
    language: "Data Structure & Algorithm",
    description:
      "Excel in Data Structures and Algorithms for interview success.",
  },
  {
    language: "Competitve Programming",
    description:
      "Excel in Data Structures and Algorithms for interview success.",
  },
];

const CourseCurriculum = () => {
  return (
    <div className="course-main">
      <div className="course-heading">
        <div className="course-heading-1">
          <div className="course-heading-1-container-DS">
            Datascience Course Learning Path
          </div>
          <div className="course-heading-1-container-FS">
            Full Stack Couse Learning Path
          </div>
        </div>

        <div className="course-heading-2">
          <div className="course-heading-2-container-DS">
            <span className="course-heading-2-highlight"> Data Science </span>
            Course Curriculum
          </div>
          <div className="course-heading-2-container-FS">
            <span className="course-heading-2-highlight">
              {" "}
              Full Stack Developer{" "}
            </span>{" "}
            <br />
            Course Curriculum
          </div>
        </div>
      </div>

      <div className="course-data">
        {courseData.map((item, index) => (
          <div key={index} className="course-data-container">
            <div className="course-data-text">
              <div className="course-data-text-1">{item.language}</div>
              <div className="course-data-text-2">{item.description}</div>
            </div>
            <div className="course-data-icon">
              <EyeIcon />
              <div> View Curriculum </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCurriculum;