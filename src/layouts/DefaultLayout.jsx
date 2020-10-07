import React from 'react';
import tw from 'twin.macro';

import AnimationRevealPage from '../helpers/AnimationRevealPage';
import Header from '../components/header/header';

const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-blue-500 hocus:text-blue-500
`;

const SecondaryLink = tw(
	NavLink
)`bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`;

const defaultLinks = [
	<NavLinks key={1}>
		<NavLink href="/dashboard">Dashboard</NavLink>

		<NavLink href="/#" tw="lg:ml-12!">
			@Awixor
		</NavLink>
		<SecondaryLink css={tw`rounded-full`} href="/#">
			Sign Out
		</SecondaryLink>
	</NavLinks>,
];

function DefaultLayout({ children }) {
	return (
		<AnimationRevealPage disabled>
			<Header links={defaultLinks} />

			{children}
		</AnimationRevealPage>
	);
}

export default DefaultLayout;
