import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Text } from "@chakra-ui/react";

const ApplicantInfo = ({ formData, handleChange, errors }) => {
  return (
    <div className="flex flex-col gap-2 pt-10">
      <Text
        as="h2"
        textTransform="uppercase"
        textAlign={{ base: "left", lg: "center" }}
        color="green.600"
        fontWeight="semibold"
        fontSize={{ base: "xl", lg: "2xl" }}
        fontFamily="'Syne', sans-serif"
        mb={3}
      >
        APPLICANT INFORMATION
      </Text>
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
          name="applicantFullname"
          value={formData.applicantFullname}
          onChange={handleChange("applicantFullname")}
        />
      </label>
      {errors.applicantFullname && (
        <div style={{ color: "red", textAlign: "left" }}>
          {errors.applicantFullname}
        </div>
      )}

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
            name="applicantAge"
            value={formData.applicantAge}
            onChange={handleChange("applicantAge")}
          />
        </label>
        {errors.applicantAge && (
          <div style={{ color: "red", textAlign: "left" }}>
            {errors.applicantAge}
          </div>
        )}
      </div>

      <div className="flex flex-col w-full">
        <label className="flex flex-col gap-2 mb-3">
          <h5 className="text-left">Applicant's Email </h5>
          <input
            type="email"
            name="applicantEmail"
            value={formData.applicantEmail}
            onChange={handleChange("applicantEmail")}
          />
        </label>
        {errors.applicantEmail && (
          <div style={{ color: "red", textAlign: "left" }}>
            {errors.applicantEmail}
          </div>
        )}
      </div>

      <br />
      <div className="flex items-center mb-3">
        Course of Interest{" "}
        <FontAwesomeIcon className="text-red-600 h-3 ml-1" icon={faAsterisk} />
      </div>
      <Fragment>
        <label className="bg-white flex items-center gap-2 border rounded-lg p-3 mb-3">
          <input
            type="radio"
            name="applicantCourse"
            value="Introduction to Coding with Scratch"
            checked={
              formData.applicantCourse === "Introduction to Coding with Scratch"
            }
            onChange={handleChange("applicantCourse")}
          />{" "}
          Introduction to Coding with Scratch
        </label>
        <label className="bg-white flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantCourse"
            value="Web Development"
            checked={formData.applicantCourse === "Web Development"}
            onChange={handleChange("applicantCourse")}
          />{" "}
          Web Development
        </label>
        <label className="bg-white flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantCourse"
            value="Graphics Design"
            checked={formData.applicantCourse === "Graphics Design"}
            onChange={handleChange("applicantCourse")}
          />{" "}
          Graphics Design
        </label>
        <label className="bg-white flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantCourse"
            value="Data Analysis"
            checked={formData.applicantCourse === "Data Analysis"}
            onChange={handleChange("applicantCourse")}
          />{" "}
          Data Analysis
        </label>
        <label className="bg-white flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantCourse"
            value="Cyber Security"
            checked={formData.applicantCourse === "Cyber Security"}
            onChange={handleChange("applicantCourse")}
          />{" "}
          Cyber Security
        </label>
        <label className="bg-white flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantCourse"
            value="Animation"
            checked={formData.applicantCourse === "Animation"}
            onChange={handleChange("applicantCourse")}
          />{" "}
          Animation
        </label>
        <label className="bg-white flex items-center gap-2 border rounded-lg p-3">
          <input
            type="radio"
            name="applicantCourse"
            value="Illustration Design"
            checked={formData.applicantCourse === "Illustration Design"}
            onChange={handleChange("applicantCourse")}
          />{" "}
          Illustration Design
        </label>
      </Fragment>

      {errors.applicantCourse && (
        <div style={{ color: "red", textAlign: "left" }}>
          {errors.applicantCourse}
        </div>
      )}
      <br />
      <label className="flex flex-col gap-2 mb-3">
        <h5 className="text-left">Applicant's Phone Number</h5>
        <input
          type="text"
          name="applicantPhoneNumber"
          value={formData.applicantPhoneNumber}
          onChange={handleChange("applicantPhoneNumber")}
        />
      </label>
      <br />
    </div>
  );
};

export default ApplicantInfo;
