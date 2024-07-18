import React, { useEffect, useState } from "react";
import StepOne from "./FormSteps/StepOne";
import StepTwo from "./FormSteps/StepTwo";
import StepThree from "./FormSteps/StepThree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowLeft,
  faLongArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import StepFour from "./FormSteps/StepFour";
import StepFive from "./FormSteps/StepFive";
import StepSix from "./FormSteps/StepSix";
import StepSeven from "./FormSteps/StepSeven";
import StepEight from "./FormSteps/StepEight";

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

  const handleSignUpAnotherChange = (e) => {
    console.log("HSC", e.target.value);
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

  // const handleNext = () => {
  //   const newErrors = validate();
  //   if (Object.keys(newErrors).length === 0) {
  //     setErrors({});
  //     if (signUpAnother === "yes") {
  //       setCurrentStep(currentStep + 1);
  //       setSignUpAnother("");
  //     } else if (
  //       currentStep >= 3 &&
  //       currentStep <= 8 &&
  //       signUpAnother === "no"
  //     ) {
  //       setPreviousStep(currentStep);
  //       setCurrentStep(8);
  //     } else if (
  //       currentStep >= 4 &&
  //       currentStep <= 8 &&
  //       signUpAnother === "no"
  //     ) {
  //       setPreviousStep(currentStep);
  //       setCurrentStep(8);
  //     } else if (
  //       currentStep >= 5 &&
  //       currentStep <= 8 &&
  //       signUpAnother === "no"
  //     ) {
  //       setPreviousStep(currentStep);
  //       setCurrentStep(8);
  //     } else if (
  //       currentStep >= 6 &&
  //       currentStep <= 8 &&
  //       signUpAnother === "no"
  //     ) {
  //       setPreviousStep(currentStep);
  //       setCurrentStep(8);
  //     } else {
  //       setCurrentStep(currentStep + 1);
  //     }
  //   } else {
  //     setErrors(newErrors);
  //   }
  // };

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
    // currentStep > 1 && setCurrentStep(currentStep - 1);
    if (currentStep > 1) {
      if (currentStep === 8 && previousStep !== null) {
        setCurrentStep(previousStep);
      } else {
        setCurrentStep(currentStep - 1);
      }
    }
  };

  useEffect(() => {
    console.log(form);
    console.log(errors);
    console.log(signUpAnother);
  }, [form, errors, signUpAnother]);

  const handleChange = (input) => (e) => {
    setForm((prevForm) => ({ ...prevForm, [input]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked!");
    // console.log("Form submitted", form);
    // setForm(form);

    // const formDatab = new FormData(form);
    fetch(
      "https://script.google.com/macros/s/AKfycbyckurZ2gOmksA21W387FWF9TPsnHBcXjWSqtX-7C6wxr_8xmfnc2Ajiv2GiiXNR-zqYg/exec",
      {
        method: "POST",
        body: form,
        mode: "no-cors",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form>
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

      <button
        onClick={currentStep === 8 ? handleSubmit : handleNext}
        className="mt-5 cursor-pointer bg-shade text-white py-2 px-5 rounded-md hover:opacity-95"
        type="button"
      >
        {currentStep === 8 ? "Submit" : "Next"}
        {currentStep < 8 && (
          <FontAwesomeIcon className="ml-2 text-sm" icon={faLongArrowRight} />
        )}
      </button>
    </form>
  );
}

export default BootcampForm;
