import React from "react";

export default function Avatar(props) {
  return <img src={props.src} alt={props.alt} />;
}

export default function Name(props) {
  return <h4>{props.name}</h4>;
}

export default function Handle(props) {
  return <p>@{props.handle}</p>;
}


/*
Often times, we want to spit our UI into smaller, more focused components to make our code easier to read and test. In this challenge, the Badge component is composed of several smaller components. Pass the Badge component's props down and apply them to to the child components to render the UI.

TASKS:
Give the image a proper alt tag using the author's name.
Make sure the badge displays the profile image correctly
Display the author's name in the badge's heading
Display the author's handle below the heading
Pass the click handler to the button so that it opens an alert when clicked

*/

import React from "react";

export default function Badge(props) {
  const { user, addFriend } = props;
  return (
    <div style={props.style}>
      <Avatar img={user.img} alt={user.name} />
      <div>
        <Name name={user.name} />
        <Handle handle={user.handle} />
        <button onClick={addFriend}>Add Friend</button>
      </div>
    </div>
  );
}

function Avatar({ img, alt }) {
  return <img src={img} alt={alt} />;
}

function Name({ name }) {
  return <h4>{name}</h4>;
}

function Handle({ handle }) {
  return <p>@{handle}</p>;
}
