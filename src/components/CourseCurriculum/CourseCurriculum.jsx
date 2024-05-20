import EyeIcon from "../../Icons/EyeIcon";
import "./CourseCurriculum.css";

const courseData = [
  {
    "language": "C++",
    "description": "Learn C++ for strong programming fundamentals."
  },
  {
    "language": "MERN Stack",
    "description": "Master the MERN stack for high-demand projects."
  },
  {
    "language": "Data Structure & Algorithm",
    "description": "Excel in Data Structures and Algorithms for interview success."
  },
  {
    "language": "Competitve Programming",
    "description": "Excel in Data Structures and Algorithms for interview success."
  }
];

const CourseCurriculum = () => {
  return (
    <div className="course-main">
      <div className="course-heading">
        <div className="course-heading-1">
          <div className="course-heading-1-container">
            Datascience Course Learning Path
          </div>
        </div>

        <div className="course-heading-2">
          <div className="course-heading-2-container">
            <span className="course-heading-2-highlight"> Data Science </span>
            Course Curriculum
          </div>
        </div>
      </div>

      <div className="course-data">
      {courseData.map((course, index) => (
        <div key={index} className="course-data-container">
          <div className="couse-data-language">
            <div className="couse-data-language-head">{course.language}</div>
            <div>{course.description}</div>
          </div>
          <div className="course-curriculum">
            <EyeIcon />
            <span>View Curriculum</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CourseCurriculum;
