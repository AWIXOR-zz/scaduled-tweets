import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { ReactComponent as BackIcon } from "feather-icons/dist/icons/arrow-left.svg";
import DatePicker from "../date-picker/DatePicker";
import moment from "moment";

import * as tweetActions from "../../redux/actions/tweetActions";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-white text-gray-900 rounded-lg relative  text-center px-8 rounded-lg relative shadow-raised`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-900 text-base font-medium tracking-wide border-b-2 py-2  hocus:border-blue-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;
const FormAction = tw.div`flex flex-row justify-between mt-8`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;

const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const TextArea = tw.textarea`h-32 sm:h-full `;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-blue-600 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-blue-700 hocus:-translate-y-px hocus:shadow-xl`;
const DeleteButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-red-600 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-pink-700 hocus:-translate-y-px hocus:shadow-xl`;
const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

const BackButton = styled.button`
  ${tw` flex items-center text-blue-400 transition duration-300 hocus:text-blue-700 focus:outline-none`}
  .arrowIcon {
    ${tw`stroke-1 w-12 h-12`}
  }
  .backText {
    ${tw`ml-2 font-medium`}
  }
`;

export default ({ tweetCont, tweetTime }) => {
  // tweetCont?tweetCont:
  const [tweetContent, setTweetContent] = useState(
    tweetCont ? tweetCont : "Tweet content here"
  );
  const [time, setTime] = useState(
    tweetTime ? tweetTime : new moment().format()
  );
  const [fireRedirect, setFireRedirect] = useState(false);
  const { addTweet } = tweetActions;

  const dispatch = useDispatch();

  const handleTweetChange = (evt) => {
    const value = evt.target.value;
    setTweetContent(value);
  };
  const handleSchedule = (e) => {
    e.preventDefault();

    console.log({
      text: tweetContent,
      timeToPost: time,
    });

    fetch(`${process.env.REACT_APP_API_URL}/tweets/add`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        tweetText: tweetContent,
        timeToPost: time,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.status === "success") {
          dispatch(addTweet(response.tweet));
          setFireRedirect(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    console.log("tweet deleted");
  };

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <BackButton as={Link} to="/dashboard">
              <span className="playIconContainer">
                <BackIcon className="backIcon" />
              </span>
              <span className="backText">back to dashboard</span>
            </BackButton>
            <form>
              <TwoColumn>
                <InputContainer tw="flex-1">
                  <Label htmlFor="name-input">Tweet Content</Label>
                  <TextArea
                    id="message-input"
                    onChange={handleTweetChange}
                    name="tweetContent"
                    required
                    maxLength={280}
                    value={tweetCont}
                    placeholder={tweetContent}
                  />
                </InputContainer>
              </TwoColumn>
              <InputContainer tw="flex-1">
                <Label htmlFor="name-input">Choose time</Label>
                <DatePicker
                  name="time"
                  initialValue={time}
                  handleChange={setTime}
                />
              </InputContainer>

              <FormAction>
                <SubmitButton type="button" onClick={handleSchedule}>
                  Schedule
                </SubmitButton>
                <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
              </FormAction>
            </form>
            {fireRedirect && <Redirect to="/dashboard" />}
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
