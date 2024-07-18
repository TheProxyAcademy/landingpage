import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

const StepFour = ({
  formData,
  handleChange,
  errors,
  handleSignUpAnotherChange,
  signUpAnother,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="uppercase text-center font-semibold text-2xl text-pretty font-title mb-3">
        APPLICANT TWO INFORMATION
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
          name="applicantTwoFullname"
          value={formData.applicantTwoFullname}
          onChange={handleChange("applicantTwoFullname")}
        />
      </label>
      {errors.applicantTwoFullname && (
        <div style={{ color: "red" }}>{errors.applicantTwoFullname}</div>
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
              name="applicantTwoAge"
              value={formData.applicantTwoAge}
              onChange={handleChange("applicantTwoAge")}
            />
          </label>
          {errors.applicantTwoAge && (
            <div style={{ color: "red" }}>{errors.applicantTwoAge}</div>
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
              name="applicantTwoEmail"
              value={formData.applicantTwoEmail}
              onChange={handleChange("applicantTwoEmail")}
            />
          </label>
          {errors.applicantTwoEmail && (
            <div style={{ color: "red" }}>{errors.applicantTwoEmail}</div>
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
            name="applicantTwoCourse"
            value="Introduction to Coding with Scratch"
            checked={
              formData.applicantTwoCourse ===
              "Introduction to Coding with Scratch"
            }
            onChange={handleChange("applicantTwoCourse")}
          />{" "}
          Introduction to Coding with Scratch
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantTwoCourse"
            value="Web Development"
            checked={formData.applicantTwoCourse === "Web Development"}
            onChange={handleChange("applicantTwoCourse")}
          />{" "}
          Web Development
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantTwoCourse"
            value="Graphics Design"
            checked={formData.applicantTwoCourse === "Graphics Design"}
            onChange={handleChange("applicantTwoCourse")}
          />{" "}
          Graphics Design
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantTwoCourse"
            value="Data Analysis"
            checked={formData.applicantTwoCourse === "Data Analysis"}
            onChange={handleChange("applicantTwoCourse")}
          />{" "}
          Data Analysis
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantTwoCourse"
            value="Cyber Security"
            checked={formData.applicantTwoCourse === "Cyber Security"}
            onChange={handleChange("applicantTwoCourse")}
          />{" "}
          Cyber Security
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantTwoCourse"
            value="Animation"
            checked={formData.applicantTwoCourse === "Animation"}
            onChange={handleChange("applicantTwoCourse")}
          />{" "}
          Animation
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantTwoCourse"
            value="Illustration Design"
            checked={formData.applicantTwoCourse === "Illustration Design"}
            onChange={handleChange("applicantTwoCourse")}
          />{" "}
          Illustration Design
        </label>
      </Fragment>

      {errors.applicantTwoCourse && (
        <div style={{ color: "red" }}>{errors.applicantTwoCourse}</div>
      )}
      <br />
      <label className="flex flex-col gap-2 mb-3">
        <h5 className="font-semibold">Applicant's Phone Number</h5>
        <input
          type="text"
          name="applicantTwoPhoneNumber"
          value={formData.applicantTwoPhoneNumber}
          onChange={handleChange("applicantTwoPhoneNumber")}
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

export default StepFour;
