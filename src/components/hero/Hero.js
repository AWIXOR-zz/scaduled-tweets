import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
//eslint-disable-next-line
import { css } from 'styled-components/macro';

import { ReactComponent as SvgDecoratorBlob1 } from '../../images/svg-decorator-blob-1.svg';
import DesignIllustration from '../../images/undraw_viral_tweet_gndb.svg';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-700 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;

const SecondaryLink = tw(
	Link
)`text-gray-700 border-gray-700 hover:bg-gray-100 hover:text-blue-500 hover:border-blue-500`;

const Actions = styled.div`
	${tw`relative max-w-md text-center mx-auto lg:mx-0`}
	input {
		${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-primary-500`}
	}
	button {
		${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-white font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
	}
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center lg:mt-8`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
	${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-1 -z-10 md:mb-5`}
`;

export default ({
	roundedHeaderButton,
	secondaryLinkText = 'Sign in with Twitter',
	secondaryLinkUrl = 'http://google.com',
}) => {
	return (
		<>
			<Container>
				<TwoColumn>
					<LeftColumn>
						<Heading>
							Schedule your tweets <span tw="text-blue-500">Fast</span> &
							<span tw="text-green-500"> Easy!</span>
						</Heading>
						<Paragraph>
							Write a Tweet, pick a time and you're ready to go! <br></br> Just like
							that.
						</Paragraph>
						<Actions>
							<SecondaryLink href={secondaryLinkUrl}>
								{secondaryLinkText}
							</SecondaryLink>
						</Actions>
					</LeftColumn>
					<RightColumn>
						<IllustrationContainer>
							<img
								tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
								src={DesignIllustration}
								alt="Design Illustration"
							/>
						</IllustrationContainer>
					</RightColumn>
				</TwoColumn>
				<DecoratorBlob1 />
			</Container>
		</>
	);
};
