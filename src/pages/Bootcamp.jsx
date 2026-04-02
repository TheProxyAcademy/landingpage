import BootcampHero from "../components/BootcampComponents/BootcampHero";
import Seo from "../components/Seo";

function Bootcamp({ onFormInteraction, onFormSubmission }) {
  return (
    <div>
      <Seo
        title="Summer Tech Bootcamp"
        description="Summer Tech Bootcamp by The Proxy Academy. Next bootcamp date: August 3. Get updates and join the waitlist when registration opens."
        canonicalPath="/summer-bootcamp"
      />
      <BootcampHero
        onFormInteraction={onFormInteraction}
        onFormSubmission={onFormSubmission}
      />
    </div>
  );
}

export default Bootcamp;
