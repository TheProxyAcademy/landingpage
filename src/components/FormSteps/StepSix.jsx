import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

const StepSix = ({
  formData,
  handleChange,
  errors,
  handleSignUpAnotherChange,
  signUpAnother,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="uppercase text-center font-semibold text-2xl text-pretty font-title mb-3">
        APPLICANT FOUR INFORMATION
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
          value={formData.applicantFourFullname}
          onChange={handleChange("applicantFourFullname")}
        />
      </label>
      {errors.applicantFourFullname && (
        <div style={{ color: "red" }}>{errors.applicantFourFullname}</div>
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
              value={formData.applicantFourAge}
              onChange={handleChange("applicantFourAge")}
            />
          </label>
          {errors.applicantFourAge && (
            <div style={{ color: "red" }}>{errors.applicantFourAge}</div>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label className="flex flex-col gap-2 mb-3">
            <h5 className="flex items-center">
              Applicant's Email{" "}
              <FontAwesomeIcon
                className="text-red-600 h-3 ml-1"
                icon={faAsterisk}
              />
            </h5>
            <input
              type="email"
              value={formData.applicantFourEmail}
              onChange={handleChange("applicantFourEmail")}
            />
          </label>
          {errors.applicantFourEmail && (
            <div style={{ color: "red" }}>{errors.applicantFourEmail}</div>
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
            name="applicantFourCourse"
            value="Introduction to Coding with Scratch"
            checked={
              formData.applicantFourCourse ===
              "Introduction to Coding with Scratch"
            }
            onChange={handleChange("applicantFourCourse")}
          />{" "}
          Introduction to Coding with Scratch
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantFourCourse"
            value="Web Development"
            checked={formData.applicantFourCourse === "Web Development"}
            onChange={handleChange("applicantFourCourse")}
          />{" "}
          Web Development
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantFourCourse"
            value="Graphics Design"
            checked={formData.applicantFourCourse === "Graphics Design"}
            onChange={handleChange("applicantFourCourse")}
          />{" "}
          Graphics Design
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantFourCourse"
            value="Data Analysis"
            checked={formData.applicantFourCourse === "Data Analysis"}
            onChange={handleChange("applicantFourCourse")}
          />{" "}
          Data Analysis
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantFourCourse"
            value="Cyber Security"
            checked={formData.applicantFourCourse === "Cyber Security"}
            onChange={handleChange("applicantFourCourse")}
          />{" "}
          Cyber Security
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantFourCourse"
            value="Animation"
            checked={formData.applicantFourCourse === "Animation"}
            onChange={handleChange("applicantFourCourse")}
          />{" "}
          Animation
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantFourCourse"
            value="Illustration Design"
            checked={formData.applicantFourCourse === "Illustration Design"}
            onChange={handleChange("applicantFourCourse")}
          />{" "}
          Illustration Design
        </label>
      </Fragment>

      {errors.applicantFourCourse && (
        <div style={{ color: "red" }}>{errors.applicantFourCourse}</div>
      )}
      <br />
      <label className="flex flex-col gap-2 mb-3">
        <h5 className="font-semibold">Applicant's Phone Number</h5>
        <input
          type="text"
          value={formData.applicantFourPhoneNumber}
          onChange={handleChange("applicantFourPhoneNumber")}
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

export default StepSix;
