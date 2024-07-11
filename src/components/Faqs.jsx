import React from "react";
import { Accordion } from "flowbite-react";

function Faqs() {
  return (
    <div className="lg:p-20 p-5">
      <h2 className="mb-5 font-title uppercase font-bold lg:text-[32px] text-[18px]">
        Frequently Asked Questions
      </h2>

      <Accordion>
        <Accordion.Panel>
          <Accordion.Title className="border font-title font-semibold italic transition-all duration-500 ease-in-out text-shade">
            {" "}
            What programs do you offer?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              We offer various tech skills including scratch, web development,
              data analysis, cyber security, Animation, Graphics Design, and
              more are coming.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="border font-title font-semibold italic transition-all duration-500 ease-in-out text-shade">
            When does the summer camp start?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our summer camp is usually between July and August.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="border font-title font-semibold italic transition-all duration-500 ease-in-out text-shade">
            Do you teach outside of summer holidays?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes. Our program is all year round. We also offer personalised and
              group classes outside of our summer program
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="border font-title font-semibold italic transition-all duration-500 ease-in-out text-shade">
            What would my child need to prepare?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              They only need a laptop and internet connection
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="border font-title font-semibold italic transition-all duration-500 ease-in-out text-shade">
            My child doesn't want to code, can they learn something else?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Absolutely! We believe every child has unique interest and we
              tailor their needs with other non-coding courses like data
              analysis, design, animation e.t.c
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="border font-title font-semibold italic transition-all duration-500 ease-in-out text-shade">
            My child already does IT in school, why do they need this?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Tech is a rather broad space that has evolved beyond microsoft
              word, excel and powerpoint. In other for them not to be left
              behind, they need to learn more advanced skills like coding,
              design, data analysis e.t.c
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}

export default Faqs;
