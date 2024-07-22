import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

const StepSeven = ({
  formData,
  handleChange,
  errors,
  handleSignUpAnotherChange,
  signUpAnother,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="uppercase text-center font-semibold text-2xl text-pretty font-title mb-3">
        APPLICANT FIVE INFORMATION
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
          value={formData.applicantFiveFullname}
          onChange={handleChange("applicantFiveFullname")}
        />
      </label>
      {errors.applicantFiveFullname && (
        <div style={{ color: "red" }}>{errors.applicantFiveFullname}</div>
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
              value={formData.applicantFiveAge}
              onChange={handleChange("applicantFiveAge")}
            />
          </label>
          {errors.applicantFiveAge && (
            <div style={{ color: "red" }}>{errors.applicantFiveAge}</div>
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
              value={formData.applicantFiveEmail}
              onChange={handleChange("applicantFiveEmail")}
            />
          </label>
          {errors.applicantFiveEmail && (
            <div style={{ color: "red" }}>{errors.applicantFiveEmail}</div>
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
            name="applicantFiveCourse"
            value="Introduction to Coding with Scratch"
            checked={
              formData.applicantFiveCourse ===
              "Introduction to Coding with Scratch"
            }
            onChange={handleChange("applicantFiveCourse")}
          />{" "}
          Introduction to Coding with Scratch
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantFiveCourse"
            value="Web Development"
            checked={formData.applicantFiveCourse === "Web Development"}
            onChange={handleChange("applicantFiveCourse")}
          />{" "}
          Web Development
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantFiveCourse"
            value="Graphics Design"
            checked={formData.applicantFiveCourse === "Graphics Design"}
            onChange={handleChange("applicantFiveCourse")}
          />{" "}
          Graphics Design
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantFiveCourse"
            value="Data Analysis"
            checked={formData.applicantFiveCourse === "Data Analysis"}
            onChange={handleChange("applicantFiveCourse")}
          />{" "}
          Data Analysis
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantFiveCourse"
            value="Cyber Security"
            checked={formData.applicantFiveCourse === "Cyber Security"}
            onChange={handleChange("applicantFiveCourse")}
          />{" "}
          Cyber Security
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantFiveCourse"
            value="Animation"
            checked={formData.applicantFiveCourse === "Animation"}
            onChange={handleChange("applicantFiveCourse")}
          />{" "}
          Animation
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantFiveCourse"
            value="Illustration Design"
            checked={formData.applicantFiveCourse === "Illustration Design"}
            onChange={handleChange("applicantFiveCourse")}
          />{" "}
          Illustration Design
        </label>
      </Fragment>

      {errors.applicantFiveCourse && (
        <div style={{ color: "red" }}>{errors.applicantFiveCourse}</div>
      )}
      <br />
      <label className="flex flex-col gap-2 mb-3">
        <h5 className="font-semibold">Applicant's Phone Number</h5>
        <input
          type="text"
          value={formData.applicantFivePhoneNumber}
          onChange={handleChange("applicantFivePhoneNumber")}
        />
      </label>
      <br />
    </div>
  );
};

export default StepSeven;
