import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SingleCol.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import ContactUs from "pages/ContactUs";
// import image3 from './../images/image-3.jpg'
// import image2 from './../images/image-2.jpg'
// import image1 from './../images/image-1.jpg'

export default () => (
  <AnimationRevealPage disabled>
    <Hero />
    <Features />
    <MainFeature />
    <MainFeature2 />
    {/* <Testimonial
      subheading="Testimonials"
      heading={
        <>
          Our Clients <span tw="text-primary-500">Love Us.</span>
        </>
      }
      description="Here are what some of our amazing customers are saying about our services. "
      testimonials={[
        // {
        //   imageSrc:image3,
        //   profileImageSrc:
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYII5XP4lObu5UERDyVtgDLzkvzSB9HB1Aw&usqp=CAU",
        //   quote:
        //     "LED TV, Microwave & complete home furniture transported safely to Pune house.",
        //   customerName: "Neha Patil",
        //   customerTitle: "Koregaon Park, Pune"
        // },
        {
          imageSrc:image2,
          profileImageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYII5XP4lObu5UERDyVtgDLzkvzSB9HB1Aw&usqp=CAU",
          quote:
            "Leo team has been very friendly and kept me updated all the time about my consignment. My household goods were transported in excellent condition to Mumbai.",
          customerName: "Mahesh Prajapati",
          customerTitle: "Banglore"
        },
        {
          imageSrc:image1,
          profileImageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYII5XP4lObu5UERDyVtgDLzkvzSB9HB1Aw&usqp=CAU",
          quote:
            "Company machinery including miller machine, bench driller, CNC lathes transported safely to factory. Thank you Leo India packers and movers.",
          customerName: "Sunil Sinha",
          customerTitle: "Udyog Vihar"
        },
      ]}
      textOnLeft={true}
    /> */}
    <ContactUs />

    <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          Why to  <span tw="text-primary-500">Choose Us</span>
        </>
      }
    />
   
    <Footer />
  </AnimationRevealPage>
);
