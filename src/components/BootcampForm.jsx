import React, { Fragment, useEffect, useRef, useState } from "react";
import StepOne from "./FormSteps/StepOne";
import StepTwo from "./FormSteps/StepTwo";
import StepThree from "./FormSteps/StepThree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCheckCircle,
  faLongArrowLeft,
  faLongArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import StepFour from "./FormSteps/StepFour";
import StepFive from "./FormSteps/StepFive";
import StepSix from "./FormSteps/StepSix";
import StepSeven from "./FormSteps/StepSeven";
import StepEight from "./FormSteps/StepEight";
import Link from "react-router-dom"

const formData = {
  role: "",
  parentFullname: "",
  parentEmail: "",
  parentPhoneNumber: "",
  location: "",
  classTime: "",
  paid: "",
  howDidYouHearAboutUs: "",
  furtherComments: "",
  applicantOneFullname: "",
  applicantOneAge: "",
  applicantOneEmail: "",
  applicantOneCourse: "",
  applicantOnePhoneNumber: "",
  applicantTwoFullname: "",
  applicantTwoAge: "",
  applicantTwoEmail: "",
  applicantTwoCourse: "",
  applicantTwoPhoneNumber: "",
  applicantThreeFullname: "",
  applicantThreeAge: "",
  applicantThreeEmail: "",
  applicantThreeCourse: "",
  applicantThreePhoneNumber: "",
  applicantFourFullname: "",
  applicantFourAge: "",
  applicantFourEmail: "",
  applicantFourCourse: "",
  applicantFourPhoneNumber: "",
  applicantFiveFullname: "",
  applicantFiveAge: "",
  applicantFiveEmail: "",
  applicantFiveCourse: "",
  applicantFivePhoneNumber: "",
};

//https://script.google.com/macros/s/AKfycbyckurZ2gOmksA21W387FWF9TPsnHBcXjWSqtX-7C6wxr_8xmfnc2Ajiv2GiiXNR-zqYg/exec

function BootcampForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState(formData);
  const [errors, setErrors] = useState({});
  const [signUpAnother, setSignUpAnother] = useState("");
  const [previousStep, setPreviousStep] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const handleSignUpAnotherChange = (e) => {
    setSignUpAnother(e.target.value);
  };

  const validate = () => {
    let newErrors = {};
    if (currentStep === 1 && !form.role)
      newErrors.role = "This field is required";
    if (currentStep === 2 && !form.parentFullname)
      newErrors.parentFullname = "This field is required";
    if (currentStep === 2 && !form.parentEmail)
      newErrors.parentEmail = "This field is required";
    if (currentStep === 2 && !form.parentPhoneNumber)
      newErrors.parentPhoneNumber = "This field is required";
    if (currentStep === 3 && !form.applicantOneFullname)
      newErrors.applicantOneFullname = "This field is required";
    if (currentStep === 3 && !form.applicantOneAge)
      newErrors.applicantOneAge = "This field is required";
    if (currentStep === 3 && !form.applicantOneEmail)
      newErrors.applicantOneEmail = "This field is required";
    if (currentStep === 3 && !form.applicantOneCourse)
      newErrors.applicantOneCourse = "This field is required";
    if (currentStep === 4 && !form.applicantTwoFullname)
      newErrors.applicantTwoFullname = "This field is required";
    if (currentStep === 4 && !form.applicantTwoAge)
      newErrors.applicantTwoAge = "This field is required";
    if (currentStep === 4 && !form.applicantTwoEmail)
      newErrors.applicantTwoEmail = "This field is required";
    if (currentStep === 4 && !form.applicantTwoCourse)
      newErrors.applicantTwoCourse = "This field is required";
    if (currentStep === 5 && !form.applicantThreeFullname)
      newErrors.applicantThreeFullname = "This field is required";
    if (currentStep === 5 && !form.applicantThreeAge)
      newErrors.applicantThreeAge = "This field is required";
    if (currentStep === 5 && !form.applicantThreeEmail)
      newErrors.applicantThreeEmail = "This field is required";
    if (currentStep === 5 && !form.applicantThreeCourse)
      newErrors.applicantThreeCourse = "This field is required";
    if (currentStep === 6 && !form.applicantFourFullname)
      newErrors.applicantFourFullname = "This field is required";
    if (currentStep === 6 && !form.applicantFourAge)
      newErrors.applicantFourAge = "This field is required";
    if (currentStep === 6 && !form.applicantFourEmail)
      newErrors.applicantFourEmail = "This field is required";
    if (currentStep === 6 && !form.applicantFourCourse)
      newErrors.applicantFourCourse = "This field is required";
    if (currentStep === 7 && !form.applicantFiveFullname)
      newErrors.applicantFiveFullname = "This field is required";
    if (currentStep === 7 && !form.applicantFiveAge)
      newErrors.applicantFiveAge = "This field is required";
    if (currentStep === 7 && !form.applicantFiveEmail)
      newErrors.applicantFiveEmail = "This field is required";
    if (currentStep === 7 && !form.applicantFiveCourse)
      newErrors.applicantFiveCourse = "This field is required";
    return newErrors;
  };

  const handleNext = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      if (signUpAnother === "yes") {
        setCurrentStep(currentStep + 1);
        setSignUpAnother("");
      } else if (
        currentStep >= 3 &&
        currentStep <= 7 &&
        signUpAnother === "no"
      ) {
        setPreviousStep(currentStep);
        setCurrentStep(8);
      } else {
        setCurrentStep(currentStep + 1);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      if (currentStep === 8 && previousStep !== null) {
        setCurrentStep(previousStep);
      } else {
        setCurrentStep(currentStep - 1);
      }
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

  return (
    <form ref={formRef}>
      {/*steps[currentStep]*/}
      {currentStep === 1 && (
        <StepOne
          formData={form}
          setFormData={setForm}
          handleChange={handleChange}
          errors={errors}
        />
      )}
      {currentStep === 2 && (
        <StepTwo
          formData={form}
          setFormData={setForm}
          handleChange={handleChange}
          errors={errors}
        />
      )}
      {currentStep === 3 && (
        <StepThree
          formData={form}
          setFormData={setForm}
          handleChange={handleChange}
          errors={errors}
          signUpAnother={signUpAnother}
          handleSignUpAnotherChange={handleSignUpAnotherChange}
        />
      )}
      {currentStep === 4 && (
        <StepFour
          formData={form}
          setFormData={setForm}
          handleChange={handleChange}
          errors={errors}
          signUpAnother={signUpAnother}
          handleSignUpAnotherChange={handleSignUpAnotherChange}
        />
      )}
      {currentStep === 5 && (
        <StepFive
          formData={form}
          setFormData={setForm}
          handleChange={handleChange}
          errors={errors}
          signUpAnother={signUpAnother}
          handleSignUpAnotherChange={handleSignUpAnotherChange}
        />
      )}
      {currentStep === 6 && (
        <StepSix
          formData={form}
          setFormData={setForm}
          handleChange={handleChange}
          errors={errors}
          signUpAnother={signUpAnother}
          handleSignUpAnotherChange={handleSignUpAnotherChange}
        />
      )}
      {currentStep === 7 && (
        <StepSeven
          formData={form}
          setFormData={setForm}
          handleChange={handleChange}
          errors={errors}
          signUpAnother={signUpAnother}
          handleSignUpAnotherChange={handleSignUpAnotherChange}
        />
      )}
      {currentStep === 8 && (
        <StepEight
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
          <p>Please join our discord channel <Link target="_blank" to="https://discord.gg/gAHAFqgXf3">here</Link> to get further information.</p>
        </div>
      )}

      {currentStep > 1 && (
        <button
          type="button"
          className="py-2 cursor-pointer px-5 border rounded-lg mr-3"
          onClick={handlePrev}
        >
          <FontAwesomeIcon
            className="mr-2 rounded-md hover:opacity-95"
            icon={faLongArrowLeft}
          />{" "}
          Back
        </button>
      )}
      {currentStep === "submitted" ? (
        ""
      ) : (
        <button
          onClick={currentStep === 8 ? handleSubmit : handleNext}
          disabled={isLoading}
          className={`mt-5 cursor-pointer py-2 px-5 rounded-md hover:opacity-95 text-white ${
            currentStep === 8 &&
            form.classTime &&
            form.howDidYouHearAboutUs &&
            form.location
              ? "bg-primary"
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
              {currentStep === 8 ? "Submit" : "Next"}
              {currentStep < 8 && (
                <FontAwesomeIcon
                  className="ml-2 text-sm"
                  icon={faLongArrowRight}
                />
              )}
            </Fragment>
          )}
        </button>
      )}
    </form>
  );
}

export default BootcampForm;
