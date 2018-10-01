import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/friendcard"

const friends = [
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
    name: "SpongeBob",
    occupation: "Fry Cook",
    location: "A Pinapple Under the Sea",
  },
  {
    img: "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",
    name: "Squidward",
    occupation: "Cashier",
    location: "An Easter Island Head",
  },
  {
    img: "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
    name: "Mr. Krabs",
    occupation: "Restaurant Owner",
    location: "A Giant Anchor",
  }
]

function createCards() {
  return friends.map(friend => {
    return <FriendCard name={friend.name} occupation={friend.occupation} location={friend.location} img={friend.img} />
  })
}

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    {createCards()};
  </Wrapper>
);

export default App;
