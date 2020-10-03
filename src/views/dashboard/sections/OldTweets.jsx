import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  Container,
  ContentWithPaddingXl,
} from "../../../components/misc/Layouts.js";
import { SectionHeading } from "../../../components/misc/Heading";
import { ReactComponent as EditIcon } from "feather-icons/dist/icons/settings.svg";
import { ReactComponent as DeleteIcon } from "feather-icons/dist/icons/trash.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../../images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../../images/svg-decorator-blob-7.svg";
import Pagination from "../../../components/pagination/Pagination";
import * as tweetActions from "../../../redux/actions/tweetActions";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const EditButton = styled.span`
  ${tw`mt-4 sm:mt-0  flex items-center text-secondary-300 transition duration-300 hocus:text-blue-400 focus:outline-none`}
  .editIcon {
    ${tw`stroke-1 w-5 h-5`}
  }
`;
const DeleteButton = styled.button`
  ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-red-400 focus:outline-none`}
  .editIcon {
    ${tw`stroke-1 w-5 h-5`}
  }
`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-blue-500! text-gray-100!`}
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const CardHeader = styled.div`
  ${tw`flex flex-col leading-relaxed py-8 -mx-8 bg-blue-400 rounded-t-lg`}
  .name {
    ${tw`font-bold text-xl text-white`}
  }
  .in {
    ${tw`text-white`}
  }
  .number {
    ${tw`font-bold text-white text-2xl sm:text-3xl my-1`}
  }
  .duration {
    ${tw`lowercase text-gray-200 font-medium tracking-widest`}
  }
`;
const Card = tw(
  motion.div
)`w-full max-w-72 mt-16 md:mr-12 md:last:mr-0 text-center px-8 rounded-lg relative text-gray-900 bg-white flex flex-col shadow-raised`;

const CardText = tw.div`p-4 text-gray-900`;
const TextWrapper = tw.h1`font-medium text-center`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardAction = tw.div`flex flex-row justify-center mt-8`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({ heading = "Checkout your Tweets" }) => {
  const dispatch = useDispatch();
  const { deleteTweet } = tweetActions;

  const tweets = useSelector((state) => state.tweets);
  const tweetsKeys = Object.keys(tweets);
  const [activeTab, setActiveTab] = useState(tweetsKeys[0]);

  const [currentPage, setCurrentPage] = useState(1);
  const [tweetsPerPage, setTweetsPerPage] = useState(8);
  let tweetsToShow = { ...tweets };

  // Logic for displaying todos
  const indexOfLastTweet = currentPage * tweetsPerPage;
  const indexOfFirstTweet = indexOfLastTweet - tweetsPerPage;
  let schaduled = tweets.schaduled.slice(indexOfFirstTweet, indexOfLastTweet);
  let archive = tweets.archive.slice(indexOfFirstTweet, indexOfLastTweet);
  if (activeTab === "schaduled") {
    tweetsToShow.schaduled = schaduled;
  } else {
    tweetsToShow.archive = archive;
  }

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tweets).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tweetsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tweetsToShow[tabKey].length !== 0 ? (
              tweetsToShow[tabKey].map((tweet, index) => (
                <CardContainer key={index}>
                  <Card
                    className="group"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <CardHeader>
                      <span className="priceAndDuration">
                        <span className="in">in</span>
                        <span className="number"> {tweet.number}</span>
                        <span className="duration"> {tweet.duration}</span>
                      </span>
                    </CardHeader>
                    <CardText>
                      <CardContent>{tweet.content}</CardContent>
                      <CardAction>
                        <Link to={`/edit/${tweet.link}`}>
                          <EditButton>
                            <span className="playIconContainer">
                              <EditIcon className="editIcon" />
                            </span>
                          </EditButton>
                        </Link>
                        <DeleteButton
                          onClick={() =>
                            dispatch(deleteTweet(tweet.id, activeTab))
                          }
                        >
                          <span className="playIconContainer">
                            <DeleteIcon className="editIcon" />
                          </span>
                        </DeleteButton>
                      </CardAction>
                    </CardText>
                  </Card>
                </CardContainer>
              ))
            ) : (
              <TextWrapper>No items yet</TextWrapper>
            )}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      {activeTab === "schaduled" ? (
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          tweetsPerPage={tweetsPerPage}
          totalTweets={tweets.schaduled.length}
        />
      ) : (
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalTweets={tweets.archive.length}
          tweetsPerPage={tweetsPerPage}
        />
      )}

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
