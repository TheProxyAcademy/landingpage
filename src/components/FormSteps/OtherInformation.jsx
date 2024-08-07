import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OtherInformation = ({ handleChange, formData, errors }) => {
  return (
    <div className="flex flex-col gap-2 pt-10">
      <h2 className="uppercase text-left lg:text-center text-primary font-semibold text-xl lg:text-2xl text-pretty font-title mb-3">
        OTHER INFORMATION
      </h2>

      <label className="flex flex-col gap-2 mb-3">
        <h5 className="flex items-center">
          Location (e.g Lagos, Nigeria){" "}
          <FontAwesomeIcon
            className="text-red-600 h-3 ml-1"
            icon={faAsterisk}
          />
        </h5>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange("location")}
        />
      </label>
      {errors.location && <div style={{ color: "red", textAlign:"left" }}>{errors.location}</div>}
      <br />

      <label className="flex flex-col gap-2 mb-3">
        <h5 className="flex items-center">
          What class time is most convenient for you?{" "}
          <FontAwesomeIcon
            className="text-red-600 h-3 ml-1"
            icon={faAsterisk}
          />
        </h5>
        <select
          name="classTime"
          value={formData.classTime}
          onChange={handleChange("classTime")}
        >
          <option value="">Select an option</option>
          <option value="Mornings(10AM WAT)">Mornings(10AM WAT)</option>
          <option value="Evenings(5PM WAT)">Evenings(5PM WAT)</option>
          <option value="Any time">Any time</option>
        </select>
      </label>
      {errors.classTime && (
        <div style={{ color: "red", textAlign:"left" }}>{errors.classTime}</div>
      )}
      <br />
      <label className="flex flex-col gap-2 mb-3">
        <h5 className="text-left">
          Kindly make a payment of 30,000 Naira PER child for registration fee
          to account details below:
          <br /> <br />
          <strong>Bank Name: </strong>Zenith Bank <br />
          <strong>Account Name: </strong>The Proxy Academy <br />
          <strong>Account Number: </strong>1227467766 <br />
          
          <span className="text-[12px]">
            Please email us with the receipt at{" "}
            <strong>
              <em>admin@theproxyacademy</em>
            </strong>
          </span>
        </h5>
      </label>
      <label className="flex flex-col gap-2 mb-3">
        <h5 className="flex items-center">
          Have you done this?{" "}
          <FontAwesomeIcon
            className="text-red-600 h-3 ml-1"
            icon={faAsterisk}
          />
        </h5>
      </label>
      <label className="bg-white flex items-center gap-2 border rounded-lg p-3 mb-3">
        <input
          type="radio"
          name="paid"
          value="yes"
          checked={formData.paid === "yes"}
          onChange={handleChange("paid")}
        />{" "}
        Yes
      </label>
      <label className="bg-white flex items-center gap-2 border rounded-lg p-3">
        <input
          type="radio"
          name="paid"
          value="no"
          checked={formData.paid === "no"}
          onChange={handleChange("paid")}
        />{" "}
        No
      </label>
      {errors.paid && <div style={{ color: "red", textAlign:"left" }}>{errors.paid}</div>}
      <br />
      <label className="flex flex-col gap-2 mb-3">
        <h5 className="flex items-center">
          How did you hear about us?
          <FontAwesomeIcon
            className="text-red-600 h-3 ml-1"
            icon={faAsterisk}
          />
        </h5>
        <select
          name="howDidYouHearAboutUs"
          value={formData.howDidYouHearAboutUs}
          onChange={handleChange("howDidYouHearAboutUs")}
        >
          <option value="">Select an option</option>
          <option value="Twitter">Twitter</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Google">Google</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="A Friend">A Friend</option>
          <option value="Other">Other</option>
        </select>
      </label>
      {errors.howDidYouHearAboutUs && (
        <div style={{ color: "red", textAlign:"left" }}>{errors.howDidYouHearAboutUs}</div>
      )}
      <br />

      <label className="flex flex-col gap-2 mb-3">
        <h5 className="text-left">Further Comments? </h5>
        <textarea
          name="furtherComments"
          rows="4"
          value={formData.furtherComments}
          onChange={handleChange("furtherComments")}
        />
      </label>
      {errors.furtherComments && (
        <div style={{ color: "red", textAlign:"left" }}>{errors.furtherComments}</div>
      )}
    </div>
  );
};

export default OtherInformation;
