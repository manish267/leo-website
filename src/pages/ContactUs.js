import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
// const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
  
      <ContactDetails 
        cards={[
          {
            title: "Ghansoli",
            description: (
              <>
                <Address>
                  <AddressLine>Siddhivinayak apartment Ground floor 002 Navghar Ali road sector 16 </AddressLine>
                  <AddressLine>Ghansoli , Navi Mumbai Maharashtra 400701</AddressLine>
                </Address>
                {/* <Email></Email> */}
                <Phone>+91 8607788120</Phone>
              </>
            )
          },
          {
            title: "Noida",
            description: (
              <>
                <Address>
                  <AddressLine>Jhundpura Village, sector 11,</AddressLine>
                  <AddressLine>Noida, Uttar Pradesh, 201301</AddressLine>
                </Address>
                {/* <Email></Email> */}
                <Phone>+91 8607788120</Phone>
              </>
            )
          },
          {
            title: "Delhi",
            description: (
              <>
                <Address>
                  <AddressLine> Behind Telco Service Station,</AddressLine>
                  <AddressLine>Rangpuri, N.H.- 8, Mahipal Pur, New Delhi-110037</AddressLine>
                </Address>
                {/* <Email></Email> */}
                <Phone>+91 8607788120</Phone>
              </>
            )
          },
          {
            title: "Bangalore",
            description: (
              <>
                <Address>
                  <AddressLine>No.-12, 18th Croass , 7th Sector,</AddressLine>
                  <AddressLine>HSR Layout , Bangalore-560068</AddressLine>
                </Address>
                {/* <Email></Email> */}
                <Phone>+91 8607788120</Phone>
              </>
            )
          },
          {
            title: "Gurgaon",
            description: (
              <>
                <Address>
                  <AddressLine>Shop NO.- 28, 1st Floor, Maruti Udhyog Gate No.-2,</AddressLine>
                  <AddressLine>Gurgaon, Haryana</AddressLine>
                </Address>
                {/* <Email></Email> */}
                <Phone>+91 8607788120</Phone>
              </>
            )
          },
          {
            title: "Chandigarh",
            description: (
              <>
                <Address>
                  <AddressLine>Shree Arihant building 1st floor, Palam Enclave,</AddressLine>
                  <AddressLine>Near Rangan Plaza, Near Plaza Godawan, Chandigarh</AddressLine>
                </Address>
                {/* <Email></Email> */}
                <Phone>+91 8607788120</Phone>

              </>
            )
          }
        ]}
      />
    </AnimationRevealPage>
  );
};
