import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import tw from 'twin.macro';
import Hero from '../../components/hero/Hero';
import Features from '../../components/features/Features';
import GetStarted from '../../components/get-started/GetStarted';
import Footer from '../../components/footer/Footer';
import macHeroScreenshotImageSrc from '../../images/undraw_Outer_space_drqu.svg';
import * as authActions from '../../redux/actions/authActions';

function First() {
	const Subheading = tw.span`uppercase tracking-widest font-bold text-blue-400`;
	const HighlightedText = tw.span`text-blue-500`;

	const dispatch = useDispatch();
	const [redirect, setRedirect] = useState(false);
	// check if user is connected
	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': true,
			},
		})
			.then((response) => {
				if (response.status === 200) {
					return response.json();
				}
			})
			.then((response) => {
				dispatch(authActions.setAuth(response.user));
				setRedirect(true);
			})
			.catch((err) => {
				console.log(err);
			});
	});
	return (
		<div>
			{redirect ? <Redirect to="/dashboard" /> : null}
			<Hero roundedHeaderButton={true} />
			<Features
				subheading={<Subheading>Features</Subheading>}
				heading={
					<>
						We have Amazing <HighlightedText>Service.</HighlightedText>
					</>
				}
			/>
			<GetStarted
				subheading={<Subheading>STEPS</Subheading>}
				heading={
					<>
						Easy to <HighlightedText>Get Started.</HighlightedText>
					</>
				}
				textOnLeft={false}
				imageSrc={macHeroScreenshotImageSrc}
				imageDecoratorBlob={true}
				decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
			/>
			<Footer />
		</div>
	);
}

export default First;
