import EyeIcon from "../../Icons/EyeIcon";
import "./CourseCurriculum.css";

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
        <div className="course-data-container">
          <div className="couse-data-language">
            <div className="couse-data-language-head">C++</div>
            <div>Learn C++ for strong programming fundamentals.</div>
          </div>

          <div className="course-curriculum">
            <EyeIcon/>
            <span> View Curriculum </span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CourseCurriculum;
