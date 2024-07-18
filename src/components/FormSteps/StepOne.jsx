import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StepOne = ({ formData, setFormData, handleChange, errors }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="uppercase text-center font-semibold text-2xl text-pretty font-title mb-3">
        Registration Form
      </h2>
      <div className="flex items-center font-semibold mb-3">
        Are you registering as a:{" "}
        <FontAwesomeIcon className="text-red-600 h-3 ml-1" icon={faAsterisk} />
      </div>
      <label className="flex items-center gap-2 border rounded-lg p-3 mb-3">
        <input
          type="radio"
          name="role"
          value="parent"
          checked={formData.role === "parent"}
          onChange={handleChange("role")}
        />{" "}
        Parent
      </label>
      <label className="flex items-center gap-2 border rounded-lg p-3">
        <input
          type="radio"
          name="role"
          value="student"
          checked={formData.role === "student"}
          onChange={handleChange("role")}
        />{" "}
        Student
      </label>

      {errors.role && <div style={{ color: "red" }}>{errors.role}</div>}
    </div>
  );
};

export default StepOne;
