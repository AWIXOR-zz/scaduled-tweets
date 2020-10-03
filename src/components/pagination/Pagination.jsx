import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Container = tw.div`bg-white px-4 py-3 flex items-center justify-center border-t border-gray-200 sm:px-6`;
const NumbersWrapper = tw.div`hidden sm:flex-1 sm:flex sm:items-center sm:justify-center`;
const Nav = tw.nav`relative z-0 inline-flex shadow-sm`;

const NavLink = styled.a`
  ${tw`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline  transition ease-in-out duration-150 cursor-pointer`}

  ${(props) => props.active && tw`bg-blue-500! text-gray-100!`}
  ${(props) => props.disabled && tw`cursor-not-allowed text-gray-500`}
`;
function Pagination({
  currentPage,
  setCurrentPage,
  totalTweets,
  tweetsPerPage,
}) {
  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTweets / tweetsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Container>
      <NumbersWrapper>
        <div>
          <Nav>
            {pageNumbers.map((id, number) => (
              <NavLink
                key={id}
                active={number === currentPage - 1}
                onClick={() => {
                  setCurrentPage(number + 1);
                }}
              >
                {number + 1}
              </NavLink>
            ))}
          </Nav>
        </div>
      </NumbersWrapper>
    </Container>
  );
}

export default Pagination;
