import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ParentInfo = ({ handleChange, formData, errors }) => {
  return (
    <div className="flex flex-col gap-2 border-b">
      <h2 className="uppercase text-left lg:text-center text-primary font-semibold text-xl lg:text-2xl text-pretty font-title mb-3">
        PARENT/GUARDIAN INFORMATION
      </h2>

      <label className="flex flex-col gap-2 mb-3">
        <h5 className="flex items-center">
          Parent's or Guardian's Full Name{" "}
          <FontAwesomeIcon
            className="text-red-600 h-3 ml-1"
            icon={faAsterisk}
          />
        </h5>
        <input
          className="border rounded-lg focus:border-primary focus:outline-none focus:ring-0"
          type="text"
          name="parentFullname"
          value={formData.parentFullname}
          onChange={handleChange("parentFullname")}
        />
      </label>
      {errors.parentFullname && (
        <div style={{ color: "red", textAlign: "left" }}>
          {errors.parentFullname}
        </div>
      )}
      <br />
      <label className="flex flex-col gap-2 mb-3">
        <h5 className="flex items-center">
          Email Address{" "}
          <FontAwesomeIcon
            className="text-red-600 h-3 ml-1"
            icon={faAsterisk}
          />
        </h5>
        <input
          className="border rounded-lg focus:border-primary focus:outline-none focus:ring-0"
          type="email"
          name="parentEmail"
          value={formData.parentEmail}
          onChange={handleChange("parentEmail")}
        />
      </label>
      {errors.parentEmail && (
        <div style={{ color: "red", textAlign: "left" }}>
          {errors.parentEmail}
        </div>
      )}
      <br />
      <label className="flex flex-col gap-2 mb-3">
        <h5 className="text-left">
          Phone Number (Feel free to add more than one and separate with a
          comma){" "}
          <FontAwesomeIcon
            className="text-red-600 h-3 ml-1"
            icon={faAsterisk}
          />
        </h5>
        <input
          className="border rounded-lg focus:border-primary focus:outline-none focus:ring-0"
          type="text"
          name="parentPhoneNumber"
          value={formData.parentPhoneNumber}
          onChange={handleChange("parentPhoneNumber")}
        />
      </label>
      {errors.parentPhoneNumber && (
        <div style={{ color: "red", textAlign: "left" }}>
          {errors.parentPhoneNumber}
        </div>
      )}
      <br />
    </div>
  );
};

export default ParentInfo;
