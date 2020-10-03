import React from "react";
import tw from "twin.macro";
import SchaduleTweet from "./sections/SchaduleTweet";
import OldTweets from "./sections/OldTweets";

function Dashboard() {
  const HighlightedText = tw.span`bg-blue-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Divider = tw.hr`my-8 `;

  return (
    <div>
      <SchaduleTweet />
      <Divider />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <OldTweets
        heading={
          <>
            Checkout your <HighlightedText>Tweets.</HighlightedText>
          </>
        }
      />
    </div>
  );
}

export default Dashboard;
