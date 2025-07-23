import BootcampHero from "../components/BootcampComponents/BootcampHero";

function Bootcamp({ onFormInteraction, onFormSubmission }) {
  return (
    <div>
      <BootcampHero
        onFormInteraction={onFormInteraction}
        onFormSubmission={onFormSubmission}
      />
    </div>
  );
}

export default Bootcamp;
