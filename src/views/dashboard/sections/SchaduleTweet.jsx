import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "../../../components/misc/Heading.js";
import {
  Container,
  ContentWithPaddingXl,
} from "../../../components/misc/Layouts.js";
import { PrimaryButton as PrimaryButtonBase } from "../../../components/misc/Buttons.js";

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Heading = tw(SectionHeading)`w-full`;
const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 text-sm sm:text-base text-white px-6 py-5 sm:px-10 sm:py-5 bg-blue-500 inline-block hocus:bg-blue-700`;

export default ({
  heading = "Schadule Tweets",
  primaryButtonText = "Create a new Tweet",
  primaryButtonUrl = "/edit",
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          <Heading>{heading}</Heading>
          <PrimaryButton as="a" href={primaryButtonUrl}>
            {primaryButtonText}
          </PrimaryButton>
        </HeaderContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
