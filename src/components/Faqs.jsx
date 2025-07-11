import { 
  Accordion, 
  Box, 
  Text 
} from "@chakra-ui/react";

function Faqs() {
  return (
    <Box p={{ base: 5, lg: 20 }}>
      <Text 
        as="h2" 
        mb={5} 
        fontFamily="var(--font-title)" 
        textTransform="uppercase" 
        fontWeight="bold" 
        fontSize={{ base: "18px", lg: "32px" }}
      >
        Frequently Asked Questions
      </Text>

      <Accordion.Root allowMultiple>
        <Accordion.Item>
          <Accordion.ItemTrigger 
            border="1px" 
            borderColor="gray.200" 
            fontFamily="var(--font-title)" 
            fontWeight="semibold" 
            fontStyle="italic" 
            transition="all 0.3s ease" 
            color="gray.700"
            _hover={{ bg: "gray.50" }}
          >
            What programs do you offer?
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>
              <Text mb={2} color="gray.500">
                We offer various tech skills including scratch, web development,
                data analysis, cyber security, Animation, Graphics Design, and
                more are coming.
              </Text>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.ItemTrigger 
            border="1px" 
            borderColor="gray.200" 
            fontFamily="var(--font-title)" 
            fontWeight="semibold" 
            fontStyle="italic" 
            transition="all 0.3s ease" 
            color="gray.700"
            _hover={{ bg: "gray.50" }}
          >
            When does the summer camp start?
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>
              <Text mb={2} color="gray.500">
                Our summer camp is usually between July and August.
              </Text>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.ItemTrigger 
            border="1px" 
            borderColor="gray.200" 
            fontFamily="var(--font-title)" 
            fontWeight="semibold" 
            fontStyle="italic" 
            transition="all 0.3s ease" 
            color="gray.700"
            _hover={{ bg: "gray.50" }}
          >
            Do you teach outside of summer holidays?
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>
              <Text mb={2} color="gray.500">
                Yes. Our program is all year round. We also offer personalised and
                group classes outside of our summer program
              </Text>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.ItemTrigger 
            border="1px" 
            borderColor="gray.200" 
            fontFamily="var(--font-title)" 
            fontWeight="semibold" 
            fontStyle="italic" 
            transition="all 0.3s ease" 
            color="gray.700"
            _hover={{ bg: "gray.50" }}
          >
            What would my child need to prepare?
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>
              <Text mb={2} color="gray.500">
                They only need a laptop and internet connection
              </Text>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.ItemTrigger 
            border="1px" 
            borderColor="gray.200" 
            fontFamily="var(--font-title)" 
            fontWeight="semibold" 
            fontStyle="italic" 
            transition="all 0.3s ease" 
            color="gray.700"
            _hover={{ bg: "gray.50" }}
          >
            My child doesn't want to code, can they learn something else?
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>
              <Text mb={2} color="gray.500">
                Absolutely! We believe every child has unique interest and we
                tailor their needs with other non-coding courses like data
                analysis, design, animation e.t.c
              </Text>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.ItemTrigger 
            border="1px" 
            borderColor="gray.200" 
            fontFamily="var(--font-title)" 
            fontWeight="semibold" 
            fontStyle="italic" 
            transition="all 0.3s ease" 
            color="gray.700"
            _hover={{ bg: "gray.50" }}
          >
            My child already does IT in school, why do they need this?
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>
              <Text mb={2} color="gray.500">
                Tech is a rather broad space that has evolved beyond microsoft
                word, excel and powerpoint. In other for them not to be left
                behind, they need to learn more advanced skills like coding,
                design, data analysis e.t.c
              </Text>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </Box>
  );
}

export default Faqs;
