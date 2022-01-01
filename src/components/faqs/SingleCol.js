import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

// const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-6 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;



export default ({
  // subheading = "FAQS",
  heading = "You have Questions ?",
  description = "And we have got answers to why to choose us.",
  faqs = [
    {
      question: "We Value Your Goods",
      answer:
        "We consider customer as a part of our business family and understand the importance of their precious belongings. We take exceptional care and follow rigorous safety measures during transportation of goods to different places. The safety isn’t limited to transportation, it involves the whole cycle (packing, loading, transportation, unloading, unpacking). Besides packaging and loading of goods with special care and attention, we prefer to use fully covered vehicle so that the goods doesn’t get affected from weather conditions, which can cause any drastic impact on the goods conditions. We understand the importance of the goods for the customer and hence keep discovering new techniques to improve the customer satisfaction. We ensure complete safety and security of the goods with abundant experience in the industry for almost four decades."
    },
    {
      question: "Honest And Dependable",
      answer:
        "With a team of professionals who have been rigorously trained in packing different commodities, driving heavy vehicles, following road traffic rules, mugged up all the geographical area in their mind. Honesty is all about being dedicated and commitment to your task and put your best foot forward in delivering the goods on the right time. We believe you can totally depend on us to deliver your package safely. We believe in enhancing our scope of betterment by using latest technologies such as GPS tracker inside the vehicle, a huge fleet of vehicles, maintenance of our resources, etc. Our claim isn’t a boastful act, but the reputation is earned by our consistent performances and the utmost customer satisfaction in the sand of time. Our motto is “Less on time, bigger on delivery”. We have been relocating the goods safely for almost four decades now and are a trusted name in the business community."
    },
    {
      question: "Quality Commitment",
      answer:
        "Commitment isn’t just a few black alphabets for us, it is a pedestal on which our company is mounted. Earning customer loyalty and not money has been the rudimentary vision since our inception. Our flawless commitment has gargantuan approach has brought the company out of the clutter and made it talk of the town. Quality commitment depicts the promise made by us to the customer in delivering his household belongings, office assets, commercial assets, industrial assets, etc safely to the destination on the predefined time. If there is any sort of damage during transportation, we are ready to bear the damage, which speaks the volume about our credibility. Transporting and delivering the goods safely and timely to all horizons of the world was, is and always will be our commitment to the customer. We take pride in the confidence shown by the various customers for more than four decades."
    },
    {
      question: "We Are Always Improving",
      answer:
        "Nothing is perfect, there is always a scope of improvement”, we deep heartily believe in the philosophy. We are a competitive firm and always are a step ahead our competitors, we keep updating our resources and ensure that our services are fine tuned and up to date with the time. Our unique and innovative approach has been the colossal in providing consistent satisfactory solutions to the customer and thus fulfilling all his needs. The services rendered by us have made us the apple of our customer’s eyes and we are given the first preference above other packers and movers companies. We have established various bases all over India to ease the transportation and interconnectivity issues. As per the locations defined by the customer our team of professionals departs from the nearest branch. From relocation, car carrier, freight forwarding, cargo services, we keep all our assets and services sharp and overhauled."
    }
  ]
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1/>
      <DecoratorBlob2 />
    </Container>
  );
};
