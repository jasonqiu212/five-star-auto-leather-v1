import React from 'react';

import FAQImage from '@/assets/faq.jpg';
import { Footer } from '@/components/Footer';
import { ParallaxTitle } from '@/components/ParallaxTitle';
import { Accordion, Container, Stack, Text } from '@mantine/core';

const faqData = [
  {
    key: 'car-interior-fittings',
    question: 'What car interior fittings can I customize?',
    answer: (
      <>
        <Text>
          Transform your car with our beautiful handiwork. We offer customization for car seats,
          door panels*, gear knobs, dashboard, steering wheels, roof linings, car mats and flooring.
        </Text>
        <Text mt={12}>
          *We offer custom car seats together with matching door panels as a package.
        </Text>
      </>
    ),
  },
  {
    key: 'customization',
    question: 'What customization details can I choose for my new car interior?',
    answer:
      'At our workshop, you can choose from our vast collection of quality leather ranging in color, grain and perforation. You can select more than one leather type as well and create a two (or multiple!) toned design. The color of stitches can be customized as well, along with sewing patterns across the seat surface. You can even choose to embroider personalized wordings or images on the leather. Whatever you can dream of, we will strive to make it happen.',
  },
  {
    key: 'process',
    question: "What's the process of getting new car seats and how long does it take?",
    answer: (
      <>
        <Text fw={700}>Step 1 - Call/WhatsApp/Facebook message us to set up an appointment!</Text>
        <Text mt={12}>
          Come down to our office with your car to select your custom car seat design. Once you have
          confirmed your design, we will place an order and it will take 3 working days for the
          leather covers to arrive. If it is an uncommon car model or entirely unique leather
          design, it will take up to 5 working days and we might have to remove the existing leather
          covers as sample. At this stage, you can still drive off with your car. There's no need to
          leave your beloved car at our workshop! We will contact you the minute we receive the
          leather covers, and it won't take long for us to complete the assembly. In fact, if you
          drop off your car in the morning, the new seats will be assembled and ready for you later
          on the same day.
        </Text>
      </>
    ),
  },
  {
    key: 'payment',
    question: 'How do I make payment?',
    answer:
      'A 50% deposit is required upon confirmation of order. The other 50% need only be paid when you are collecting your car with all new seats. Cash payment is preferred, while we also accept bank transfers and PayNow.',
  },
  {
    key: 'maintain',
    question: 'How do I maintain my new leather car seats?',
    answer:
      'Avoid harsh chemicals when cleaning your leather seats. For regular maintenance, we suggest wiping them down with just lukewarm water using a non-abrasive cloth. For more stubborn stains, use a mild detergent (eg. hand soap or dishwashing soap) diluted with water. Always remember to try out the detergent solution in a less visible area first. After cleaning, air your car to ensure the seats are not left damp for too long.',
  },
];

export const FAQ: React.FC = () => {
  return (
    <Stack gap={0}>
      <ParallaxTitle backgroundImage={FAQImage} title="Frequently Asked Questions" />
      <Container size="xl" py="xl" w="100%">
        <Accordion variant="contained" radius="md">
          {faqData.map((item) => (
            <Accordion.Item key={item.key} value={item.key}>
              <Accordion.Control>{item.question}</Accordion.Control>
              <Accordion.Panel>{item.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
      <Footer />
    </Stack>
  );
};
