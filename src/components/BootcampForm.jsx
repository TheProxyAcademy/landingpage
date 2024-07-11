import React from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
import { Toast } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

function BootcampForm() {
  return (
    <div className="lg:max-h-screen overflow-auto no-scrollbar">
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/111589860943922540105/form/1FAIpQLSfuIpX6J1llcWMV2tNIQPB1Hcl2wnVTLvcXi59drsBeatxUvg/classic.js/?div=ff-compose"
        onSubmitForm={() => (
          <Toast>
            <FontAwesomeIcon
              className="text-light text-[24px] lg:text-[28px] xl:text-[36px]"
              icon={faMessage}
            />
            <div className="pl-4 text-sm font-normal">
              Registered successfully!
            </div>
          </Toast>
        )}
      />
    </div>
  );
}

export default BootcampForm;
{
  /*<form className="flex max-w-md flex-col gap-4 lg:max-h-screen overflow-auto mt-0 lg:mt-40 text-left">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="fullName"
            value="Your Full name"
            className="font-title uppercase font-semibold"
          />
        </div>
        <TextInput id="fullName" type="text" placeholder="John Doe" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email"
            value="Your Email"
            className="font-title uppercase font-semibold"
          />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="johndoe@gmail.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="childname"
            value="Child's Full Name"
            className="font-title uppercase font-semibold"
          />
        </div>
        <TextInput
          id="childname"
          type="text"
          placeholder="Janet Doe"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="childemail"
            value="Child's email"
            className="font-title uppercase font-semibold"
          />
        </div>
        <TextInput
          id="childemail"
          type="email"
          placeholder="janetdoe@gmail.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="track"
            value="What track are you registering for?"
            className="font-title uppercase font-semibold"
          />
        </div>
        <Select id="track" required>
          <option>Select your track...</option>
          <option>Introduction to Coding</option>
          <option>Web Development</option>
          <option>Graphics Design</option>
          <option>Cybersecurity</option>
          <option>Illustration Design</option>
        </Select>
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="experience"
            value="What's the experience level?"
            className="font-title uppercase font-semibold"
          />
        </div>
        <Select id="experience" required>
          <option>Select your experience...</option>
          <option>Total Beginner</option>
          <option>A couple months in</option>
          <option>Expert. Just trying to revisit the basics</option>
        </Select>
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="childname"
            value="Select your child's track"
            className="font-title uppercase font-semibold"
          />
        </div>
        <TextInput
          id="childname"
          type="text"
          placeholder="Janet Doe"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="phoneNumber"
            value="Phone Number"
            className="font-title uppercase font-semibold"
          />
        </div>
        <TextInput
          id="phoneNumber"
          type="text"
          placeholder="Janet Doe"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="age"
            value="Child/Children Age(s)"
            className="font-title uppercase font-semibold"
          />
        </div>
        <TextInput id="age" type="text" placeholder="12" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="location"
            value="Address"
            className="font-title uppercase font-semibold"
          />
        </div>
        <TextInput
          id="location"
          type="text"
          placeholder="Lagos"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="howDidYouHearAboutUs"
            value="What track are you registering for?"
            className="font-title uppercase font-semibold"
          />
        </div>
        <Select id="howDidYouHearAboutUs" required>
          <option>Make your selection...</option>
          <option>Instagram</option>
          <option>Facebook</option>
          <option>Twitter/X</option>
          <option>WhatsApp</option>
          <option>A friend/family</option>
        </Select>
      </div>

      <Button type="submit">Submit</Button>
  </form>*/
}
