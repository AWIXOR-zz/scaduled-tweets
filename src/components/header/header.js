import React from 'react';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line

import useAnimatedNavToggler from '../../helpers/useAnimatedNavToggler.js';

import { ReactComponent as MenuIcon } from 'feather-icons/dist/icons/menu.svg';
import { ReactComponent as CloseIcon } from 'feather-icons/dist/icons/x.svg';

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-blue-500 hocus:text-blue-500
  cursor-pointer
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-blue-500 text-white
  hocus:bg-blue-700 hocus:text-white focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
	${tw`flex items-center font-black border-b-0 text-2xl! text-blue-500 hover:text-gray-500 ml-0!`};

	img {
		${tw`w-10 mr-3`}
	}
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-gray-500 transition duration-300
`;
export const MobileNavLinks = motion.custom(styled.div`
	${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
	${NavLinks} {
		${tw`flex flex-col items-center`}
	}
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({
	roundedHeaderButton = false,
	logoLink,
	links,
	className,
	collapseBreakpointClass = 'lg',
}) => {
	const signIn = () => {
		console.log('clicked on sign in');
		window.open(`${process.env.REACT_APP_API_URL}/auth/twitter`, '_self');
	};

	const defaultLinks = [
		<NavLinks key={1}>
			<NavLink tw="lg:ml-12!" onClick={signIn}>
				Sign In
			</NavLink>
		</NavLinks>,
	];

	const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
	const collapseBreakpointCss =
		collapseBreakPointCssMap[collapseBreakpointClass];

	const defaultLogoLink = <LogoLink href="/">Cronify</LogoLink>;

	logoLink = logoLink || defaultLogoLink;
	links = links || defaultLinks;

	return (
		<Header className={className || 'header-light'}>
			<DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
				{logoLink}
				{links}
			</DesktopNavLinks>

			<MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
				{logoLink}
				<MobileNavLinks
					initial={{ x: '150%', display: 'none' }}
					animate={animation}
					css={collapseBreakpointCss.mobileNavLinks}
				>
					{links}
				</MobileNavLinks>
				<NavToggle
					onClick={toggleNavbar}
					className={showNavLinks ? 'open' : 'closed'}
				>
					{showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
				</NavToggle>
			</MobileNavLinksContainer>
		</Header>
	);
};

const collapseBreakPointCssMap = {
	sm: {
		mobileNavLinks: tw`sm:hidden`,
		desktopNavLinks: tw`sm:flex`,
		mobileNavLinksContainer: tw`sm:hidden`,
	},
	md: {
		mobileNavLinks: tw`md:hidden`,
		desktopNavLinks: tw`md:flex`,
		mobileNavLinksContainer: tw`md:hidden`,
	},
	lg: {
		mobileNavLinks: tw`lg:hidden`,
		desktopNavLinks: tw`lg:flex`,
		mobileNavLinksContainer: tw`lg:hidden`,
	},
	xl: {
		mobileNavLinks: tw`lg:hidden`,
		desktopNavLinks: tw`lg:flex`,
		mobileNavLinksContainer: tw`lg:hidden`,
	},
};
