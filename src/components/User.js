import React from "react";
import PropTypes from "prop-types";

const User = ({ name, surname, age, isLoggedIn, friends }) => {
  return (
    <>
      <h1>
        {/* {props.isLoggedIn
        ? `Selam ${props.name} ${props.surname}`
        : `Giriş yapmadınız`} */}
        {isLoggedIn ? `Selam ${name} ${surname}` : `Giriş yapmadınız`}
      </h1>

      {/* {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))} */}
      {friends.map((friend) => (
        <div key={friend.id}>
          {friend.id}-{friend.name}
        </div>
      ))}
    </>
  );

  
};


User.PropTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array,
    age: PropTypes.number
};
export default User;
