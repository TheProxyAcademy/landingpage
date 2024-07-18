import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

const StepThree = ({
  formData,
  handleChange,
  errors,
  handleSignUpAnotherChange,
  signUpAnother,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="uppercase text-center font-semibold text-2xl text-pretty font-title mb-3">
        APPLICANT INFORMATION
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
          name="applicantOneFullname"
          value={formData.applicantOneFullname}
          onChange={handleChange("applicantOneFullname")}
        />
      </label>
      {errors.applicantOneFullname && (
        <div style={{ color: "red" }}>{errors.applicantOneFullname}</div>
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
              name="applicantOneAge"
              value={formData.applicantOneAge}
              onChange={handleChange("applicantOneAge")}
            />
          </label>
          {errors.applicantOneAge && (
            <div style={{ color: "red" }}>{errors.applicantOneAge}</div>
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
              name="applicantOneEmail"
              value={formData.applicantOneEmail}
              onChange={handleChange("applicantOneEmail")}
            />
          </label>
          {errors.applicantOneEmail && (
            <div style={{ color: "red" }}>{errors.applicantOneEmail}</div>
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
            name="applicantOneCourse"
            value="Introduction to Coding with Scratch"
            checked={
              formData.applicantOneCourse ===
              "Introduction to Coding with Scratch"
            }
            onChange={handleChange("applicantOneCourse")}
          />{" "}
          Introduction to Coding with Scratch
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantOneCourse"
            value="Web Development"
            checked={formData.applicantOneCourse === "Web Development"}
            onChange={handleChange("applicantOneCourse")}
          />{" "}
          Web Development
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantOneCourse"
            value="Graphics Design"
            checked={formData.applicantOneCourse === "Graphics Design"}
            onChange={handleChange("applicantOneCourse")}
          />{" "}
          Graphics Design
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantOneCourse"
            value="Data Analysis"
            checked={formData.applicantOneCourse === "Data Analysis"}
            onChange={handleChange("applicantOneCourse")}
          />{" "}
          Data Analysis
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantOneCourse"
            value="Cyber Security"
            checked={formData.applicantOneCourse === "Cyber Security"}
            onChange={handleChange("applicantOneCourse")}
          />{" "}
          Cyber Security
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantOneCourse"
            value="Animation"
            checked={formData.applicantOneCourse === "Animation"}
            onChange={handleChange("applicantOneCourse")}
          />{" "}
          Animation
        </label>
        <label className="flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantOneCourse"
            value="Illustration Design"
            checked={formData.applicantOneCourse === "Illustration Design"}
            onChange={handleChange("applicantOneCourse")}
          />{" "}
          Illustration Design
        </label>
      </Fragment>

      {errors.applicantOneCourse && (
        <div style={{ color: "red" }}>{errors.applicantOneCourse}</div>
      )}
      <br />
      <label className="flex flex-col gap-2 mb-3">
        <h5 className="font-semibold">Applicant's Phone Number</h5>
        <input
          type="text"
          name="applicantOnePhoneNumber"
          value={formData.applicantOnePhoneNumber}
          onChange={handleChange("applicantOnePhoneNumber")}
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

export default StepThree;
