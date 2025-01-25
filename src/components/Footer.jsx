import { Footer, FooterDivider } from "flowbite-react";
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Logo from "../assets/icon.svg";

export default function Component() {
  return (
    <Footer container>
      <div className="w-full px-5 lg:px-20 py-5 border-t 2xl:border-t-0 mt-20 container">
        <div className="mb-5 flex gap-3 items-center font-semibold">
          <img src={Logo} alt="The Proxy Academy Logo" className="h-10" />
          <h5 className="uppercase font-title text-2xl">The Proxy Academy</h5>
        </div>
        <div className="lg:w-2/5 w-full mb-5 font-title">
          <p>
            For further enquries or information, Speak to one of our experts to
            help you make the right choice.
          </p>
          <p className="mt-5">
            {" "}
            <span className="font-semibold">Send a WhatsApp message:</span> +2348174453349/+2349152811014 Email:
            Support@theproxyacademy.com
          </p>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between pt-5">
          <Footer.Copyright
            className="font-title"
            href="www.theproxyacademy.com"
            by=" The Proxy Academy Ltd."
            year={2025}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              target="_blank"
              href="https://www.facebook.com/theproxyacademy"
              icon={BsFacebook}
            />
            <Footer.Icon
              target="_blank"
              href="https://www.instagram.com/theproxyacademy/"
              icon={BsInstagram}
            />
            <Footer.Icon
              target="_blank"
              href="https://x.com/theproxyacademy"
              icon={BsTwitter}
            />
            <Footer.Icon
              target="_blank"
              href="https://www.linkedin.com/company/the-proxy-academy/"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
