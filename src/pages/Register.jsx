import BootcampForm from "../components/BootcampForm";
import RegIllustration from "../assets/reg-illustration.png";

function Register({ onFormInteraction, onFormSubmission }) {
  return (
    <div className="lg:py-20 lg:px-20 py-10 flex flex-col lg:flex-row justify-between items-center">
      <div className="lg:w-3/6 w-full relative px-5 md:px-10 lg:mt-40 xl:mt-0 lg:border-r">
        <h2 className="xl:text-4xl text-2xl uppercase mb-2 font-semibold">
          Registration
        </h2>
        <p>Please fill the form to get started with our classes</p>
        <img src={RegIllustration} alt="Illustration" />
        <p className="text-xs text-gray-300 font-bold tracking-widest">
          <a href="https://www.freepik.com/free-vector/metaverso-concept-illustration_28771813.htm#fromView=search&page=1&position=20&uuid=3df50b51-3b9f-4425-9556-6a8c4dc587f9&new_detail=true&query=tech+illustration">Illustration from Freepik</a>
        </p>
      </div>
      <div className="lg:w-3/6 w-full text-center lg:text-left mt-10 md:mt-0 md:mb-0 mb-10 lg:mb-0 py-10 px-5 md:p-10 bg-slate-100">
        <BootcampForm
          onFormInteraction={onFormInteraction}
          onFormSubmission={onFormSubmission}
        />
      </div>
    </div>
  );
}

export default Register;
