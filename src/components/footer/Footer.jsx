import React from "react";
import tw from "twin.macro";
import { Container as ContainerBase } from "../misc/Layouts";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col `;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const Link = tw.a`border-b-2 border-transparent hocus:border-gray-100  transition duration-300`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoText>Cronify</LogoText>
          </LogoContainer>
          <CopyrightText>
            Made by <Link href="#">Awixor</Link>. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
