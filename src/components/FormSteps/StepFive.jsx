import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

const StepFive = ({
  formData,
  handleChange,
  errors,
  handleSignUpAnotherChange,
  signUpAnother,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="uppercase text-center font-semibold text-2xl text-pretty font-title mb-3">
        APPLICANT THREE INFORMATION
      </h2>

      <label className="flex flex-col gap-2 mb-3">
        <h5 className="flex items-center">
          Full Name{" "}
          <FontAwesomeIcon
            className="text-red-600 h-3 ml-1"
            icon={faAsterisk}
          />
        </h5>
        <input
          type="text"
          name="applicantThreeFullname"
          value={formData.applicantThreeFullname}
          onChange={handleChange("applicantThreeFullname")}
        />
      </label>
      {errors.applicantThreeFullname && (
        <div style={{ color: "red" }}>{errors.applicantThreeFullname}</div>
      )}
      <br />
      <div className="flex items-center gap-5">
        <div className="flex flex-col w-full">
          <label className="flex flex-col gap-2 mb-3">
            <h5 className="flex items-center">
              Age{" "}
              <FontAwesomeIcon
                className="text-red-600 h-3 ml-1"
                icon={faAsterisk}
              />
            </h5>
            <input
              type="text"
              name="applicantThreeAge"
              value={formData.applicantThreeAge}
              onChange={handleChange("applicantThreeAge")}
            />
          </label>
          {errors.applicantThreeAge && (
            <div style={{ color: "red" }}>{errors.applicantThreeAge}</div>
          )}
        </div>
        <div className="fle flex-col">
          <label className="flex flex-col gap-2 mb-3 w-full">
            <h5 className="flex items-center">
              Applicant's Email{" "}
              <FontAwesomeIcon
                className="text-red-600 h-3 ml-1"
                icon={faAsterisk}
              />
            </h5>
            <input
              type="email"
              name="applicantThreeEmail"
              value={formData.applicantThreeEmail}
              onChange={handleChange("applicantThreeEmail")}
            />
          </label>
          {errors.applicantThreeEmail && (
            <div style={{ color: "red" }}>{errors.applicantThreeEmail}</div>
          )}
        </div>
      </div>
      <br />
      <div className="flex items-center font-semibold mb-3">
        Course of Interest{" "}
        <FontAwesomeIcon className="text-red-600 h-3 ml-1" icon={faAsterisk} />
      </div>
      <Fragment>
        <label className="flex items-center gap-2 border rounded-lg p-3 mb-3">
          <input
            type="radio"
            name="applicantThreeCourse"
            value="Introduction to Coding with Scratch"
            checked={
              formData.applicantThreeCourse ===
              "Introduction to Coding with Scratch"
            }
            onChange={handleChange("applicantThreeCourse")}
          />{" "}
          Introduction to Coding with Scratch
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantThreeCourse"
            value="Web Development"
            checked={formData.applicantThreeCourse === "Web Development"}
            onChange={handleChange("applicantThreeCourse")}
          />{" "}
          Web Development
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantThreeCourse"
            value="Graphics Design"
            checked={formData.applicantThreeCourse === "Graphics Design"}
            onChange={handleChange("applicantThreeCourse")}
          />{" "}
          Graphics Design
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantThreeCourse"
            value="Data Analysis"
            checked={formData.applicantThreeCourse === "Data Analysis"}
            onChange={handleChange("applicantThreeCourse")}
          />{" "}
          Data Analysis
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantThreeCourse"
            value="Cyber Security"
            checked={formData.applicantThreeCourse === "Cyber Security"}
            onChange={handleChange("applicantThreeCourse")}
          />{" "}
          Cyber Security
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantThreeCourse"
            value="Animation"
            checked={formData.applicantThreeCourse === "Animation"}
            onChange={handleChange("applicantThreeCourse")}
          />{" "}
          Animation
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantThreeCourse"
            value="Illustration Design"
            checked={formData.applicantThreeCourse === "Illustration Design"}
            onChange={handleChange("applicantThreeCourse")}
          />{" "}
          Illustration Design
        </label>
      </Fragment>

      {errors.applicantThreeCourse && (
        <div style={{ color: "red" }}>{errors.applicantThreeCourse}</div>
      )}
      <br />
      <label className="flex flex-col gap-2 mb-3">
        <h5 className="font-semibold">Applicant's Phone Number</h5>
        <input
          type="text"
          name="applicantThreePhoneNumber"
          value={formData.applicantThreePhoneNumber}
          onChange={handleChange("applicantThreePhoneNumber")}
        />
      </label>
      <br />
      <Fragment>
        <div className="flex items-center font-semibold mb-3">
          Add another applicant{" "}
          <FontAwesomeIcon
            className="text-red-600 h-3 ml-1"
            icon={faAsterisk}
          />
        </div>
        <label className="flex items-center gap-2 border rounded-lg p-3 mb-3">
          <input
            type="radio"
            value="yes"
            checked={signUpAnother === "yes"}
            onChange={handleSignUpAnotherChange}
          />{" "}
          Yes
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            value="no"
            checked={signUpAnother === "no"}
            onChange={handleSignUpAnotherChange}
          />{" "}
          No
        </label>
      </Fragment>
    </div>
  );
};

export default StepFive;
