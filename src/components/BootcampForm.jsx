import React, { Fragment, useEffect, useRef, useState } from "react";
import ParentInfo from "./FormSteps/ParentInfo";
import ApplicantInfo from "./FormSteps/ApplicantInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faLongArrowLeft,
  faLongArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import OtherInformation from "./FormSteps/OtherInformation";
import { Link } from "react-router-dom";

const formData = {
  parentFullname: "",
  parentEmail: "",
  parentPhoneNumber: "",
  location: "",
  classTime: "",
  paid: "",
  howDidYouHearAboutUs: "",
  furtherComments: "",
  applicantFullname: "",
  applicantAge: "",
  applicantEmail: "",
  applicantCourse: "",
  applicantPhoneNumber: "",
};

function BootcampForm({ onFormInteraction, onFormSubmission }) {
  const [currentStep, setCurrentStep] = useState("step-one");
  const [form, setForm] = useState(formData);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const validate = () => {
    let newErrors = {};
    if (currentStep === "step-one") {
      if (!form.parentFullname)
        newErrors.parentFullname = "This field is required";
      if (!form.parentEmail) newErrors.parentEmail = "This field is required";
      if (!form.parentPhoneNumber)
        newErrors.parentPhoneNumber = "This field is required";
      if (!form.applicantFullname)
        newErrors.applicantFullname = "This field is required";
      if (!form.applicantAge) newErrors.applicantAge = "This field is required";
      else if (form.applicantAge < 5 || form.applicantAge > 17)
        newErrors.applicantAge = "Age must be between 5 and 17";
      if (!form.applicantEmail)
        newErrors.applicantEmail = "This field is required";
      if (!form.applicantCourse)
        newErrors.applicantCourse = "This field is required";
    }

    if (currentStep === "final-step") {
      if (!form.location) newErrors.location = "This field is required";
      if (!form.classTime) newErrors.classTime = "This field is required";
      if (!form.paid) newErrors.paid = "This field is required";
      if (!form.howDidYouHearAboutUs)
        newErrors.howDidYouHearAboutUs = "This field is required";
    }

    return newErrors;
  };

  const handleNext = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      setCurrentStep("final-step");
    } else {
      setErrors(newErrors);
    }
  };

  const handlePrev = () => {
    if (currentStep === "final-step") {
      setCurrentStep("step-one");
    }
  };

  useEffect(() => {
    if (formRef.currentStep) {
      formRef.currentStep.scrollTo(0, 0);
    }
  }, [formRef]);

  const handleChange = (input) => (e) => {
    setForm((prevForm) => ({ ...prevForm, [input]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmission();
    setIsLoading(true);
    fetch("https://bootcamp-be.onrender.com/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Form submitted successfully") {
          const parentDetails = {
            parentFullname: form.parentFullname,
            parentEmail: form.parentEmail,
            parentPhoneNumber: form.parentPhoneNumber,
            location: form.location,
            howDidYouHearAboutUs: form.howDidYouHearAboutUs,
            furtherComments: form.howDidYouHearAboutUs,
          };
          localStorage.setItem("parentDetails", JSON.stringify(parentDetails));

          setCurrentStep("submitted");
        }
        setForm(formData);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const scrollToTop = () => {
    if (formRef.current) {
      formRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [currentStep]);

  useEffect(() => {
    const storedParentDetails = localStorage.getItem("parentDetails");
    if (storedParentDetails) {
      const parentDetails = JSON.parse(storedParentDetails);
      setForm((prevForm) => ({
        ...prevForm,
        parentFullname: parentDetails.parentFullname,
        parentEmail: parentDetails.parentEmail,
        parentPhoneNumber: parentDetails.parentPhoneNumber,
        location: parentDetails.location,
        howDidYouHearAboutUs: parentDetails.howDidYouHearAboutUs,
        furtherComments: parentDetails.furtherComments,
      }));
    }
  }, []);

  return (
    <form
      onFocus={onFormInteraction}
      ref={formRef}
      className="max-h-screen overflow-auto"
    >
      {currentStep === "step-one" && (
        <Fragment>
          <ParentInfo
            formData={form}
            setFormData={setForm}
            handleChange={handleChange}
            errors={errors}
          />

          <ApplicantInfo
            formData={form}
            setFormData={setForm}
            handleChange={handleChange}
            errors={errors}
          />
        </Fragment>
      )}

      {currentStep === "final-step" && (
        <OtherInformation
          formData={form}
          handleChange={handleChange}
          errors={errors}
        />
      )}

      {currentStep === "submitted" && (
        <div className="grid place-items-center">
          <FontAwesomeIcon
            className="text-primary h-14 animate-bounce"
            icon={faCheckCircle}
          />
          <p className="text-4xl">Form Submitted Successfully!</p>
          <p>
            Please join our discord channel{" "}
            <Link
              className="text-primary font-semibold underline"
              target="_blank"
              to="https://discord.gg/gAHAFqgXf3"
            >
              here
            </Link>{" "}
            to get further information.
          </p>
          <button className="bg-primary px-5 py-2 rounded-lg text-white mt-3">
            Click here to register another candidate
          </button>
          <p className="mt-3 font-semibold text-sm">
            <em>
              Please note that your information is already stored, you only need
              to add the candidate's details
            </em>
          </p>
        </div>
      )}

      {currentStep !== "submitted" && (
        <Fragment>
          {currentStep === "final-step" && (
            <button
              type="button"
              className="py-2 cursor-pointer px-5 border rounded-lg mr-3 bg-white"
              onClick={handlePrev}
            >
              <FontAwesomeIcon
                className="mr-2 rounded-md hover:opacity-95"
                icon={faLongArrowLeft}
              />{" "}
              Back
            </button>
          )}

          <button
            onClick={currentStep === "final-step" ? handleSubmit : handleNext}
            disabled={isLoading}
            className={`mt-5 cursor-pointer py-2 px-5 rounded-md hover:opacity-95 text-white ${
              (currentStep === "final-step" &&
                form.classTime &&
                form.howDidYouHearAboutUs &&
                form.location) ||
              (currentStep === "step-one" &&
                form.parentFullname &&
                form.parentEmail &&
                form.parentPhoneNumber &&
                form.applicantFullname &&
                form.applicantAge >= 5 &&
                form.applicantAge <= 17 &&
                form.applicantCourse)
                ? "bg-primary w-full"
                : "bg-shade"
            }`}
            type="button"
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white inline mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 16a4 4 0 010-8v-4a8 8 0 000 16v-4z"
                ></path>
              </svg>
            ) : (
              <Fragment>
                {currentStep === "final-step" ? "Submit" : "Next"}
                {currentStep !== "final-step" && (
                  <FontAwesomeIcon
                    className="ml-2 text-sm"
                    icon={faLongArrowRight}
                  />
                )}
              </Fragment>
            )}
          </button>
        </Fragment>
      )}
    </form>
  );
}

export default BootcampForm;
