import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
//eslint-disable-next-line
import { css } from 'styled-components/macro';
import { SectionHeading, Subheading as SubheadingBase } from '../misc/Heading';
import { SectionDescription } from '../misc/Typography';

import defaultCardImage from '../../images/shield-icon.svg';

import { ReactComponent as SvgDecoratorBlob3 } from '../../images/svg-decorator-blob-3.svg';

import CalenderIconImage from '../../images/schedule-tweet-icon.svg';
import ShieldIconImage from '../../images/shield-icon.svg';
import CustomizeIconImage from '../../images/customize-icon.svg';
import FastIconImage from '../../images/fast-icon.svg';
import ReliableIconImage from '../../images/reliable-icon.svg';
import SimpleIconImage from '../../images/simple-icon.svg';

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
	${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
	${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
	${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
	.imageContainer {
		${tw`border text-center rounded-full p-5 flex-shrink-0`}
		img {
			${tw`w-6 h-6`}
		}
	}

	.textContainer {
		${tw`sm:ml-4 mt-4 sm:mt-2`}
	}

	.title {
		${tw`mt-4 tracking-wide font-bold text-2xl text-secondary-500 leading-none`}
	}

	.description {
		${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
	}
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
	${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({
	cards = null,
	heading = 'Amazing Features',
	subheading = 'Features',
	description = 'Gain access to all features for free only with cronify',
}) => {
	const defaultCards = [
		{
			imageSrc: ShieldIconImage,
			title: 'Secure',
			description:
				'We strictly only deal with vendors that provide top notch security.',
		},
		{
			imageSrc: CalenderIconImage,
			title: 'Schedule tweet',
			description: 'Schedule posting your tweets anytime you want!',
		},
		{
			imageSrc: CustomizeIconImage,
			title: 'Tweetstorm',
			description: 'We are supporting Tweetstorm too!',
		},
		{
			imageSrc: ReliableIconImage,
			title: 'Reliable',
			description: 'You can always rely on us to do your job',
		},
		{
			imageSrc: FastIconImage,
			title: 'Fast',
			description: 'We always provide faster services',
		},
		{
			imageSrc: SimpleIconImage,
			title: 'Easy',
			description: 'This is the easiest tool you ever sow',
		},
	];

	if (!cards) cards = defaultCards;

	return (
		<Container>
			<ThreeColumnContainer>
				{subheading && <Subheading>{subheading}</Subheading>}
				<Heading>{heading}</Heading>
				{description && <Description>{description}</Description>}
				<VerticalSpacer />
				{cards.map((card, i) => (
					<Column key={i}>
						<Card>
							<span className="imageContainer">
								<img src={card.imageSrc || defaultCardImage} alt="" />
							</span>
							<span className="textContainer">
								<span className="title">{card.title || 'Fully Secure'}</span>
								<p className="description">
									{card.description ||
										'Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.'}
								</p>
							</span>
						</Card>
					</Column>
				))}
			</ThreeColumnContainer>
			<DecoratorBlob />
		</Container>
	);
};
