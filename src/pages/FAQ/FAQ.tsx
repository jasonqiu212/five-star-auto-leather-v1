import { Accordion, Container, Title } from '@mantine/core';

export const FAQ: React.FC = () => {
  return (
    <div>
      <Container size="lg" py={60}>
        <Title order={1} mb={30}>
          Frequently Asked Questions
        </Title>

        <Accordion variant="separated" radius="md">
          <Accordion.Item value="how-long">
            <Accordion.Control>How long does a typical project take?</Accordion.Control>
            <Accordion.Panel>
              Project timelines vary depending on the scope of work. Simple repairs may take 1-2
              days, while complete interior restorations can take 2-4 weeks. We'll provide a
              detailed timeline during your consultation.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="materials">
            <Accordion.Control>What materials do you use?</Accordion.Control>
            <Accordion.Panel>
              We use only premium automotive-grade leather and materials from trusted suppliers. All
              materials are selected for durability, comfort, and aesthetics.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="warranty">
            <Accordion.Control>Do you offer a warranty?</Accordion.Control>
            <Accordion.Panel>
              Yes, we stand behind our work with a comprehensive warranty on all services. Specific
              warranty terms will be discussed during your consultation.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="quote">
            <Accordion.Control>How do I get a quote?</Accordion.Control>
            <Accordion.Panel>
              Contact us to schedule a consultation. We'll assess your vehicle, discuss your needs,
              and provide a detailed quote with no obligation.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};
