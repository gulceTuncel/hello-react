import React from "react";
import PropTypes from "prop-types";

const User = ({ name, surname, age, isLoggedIn, friends, address }) => {
  
  {if(!isLoggedIn)
    {
      return <div>Giriş Yapmadınız</div>
    }
  }
  return (
    <>
      <h1>
        {/* {props.isLoggedIn
        ? `Selam ${props.name} ${props.surname}`
        : `Giriş yapmadınız`} */}
        {isLoggedIn ? `Selam ${name} ${surname}` : `Giriş yapmadınız`}
      </h1>

{address.title} {address.zip}
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


User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ),
  age: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number
  })
};

User.defaultProps = {
  isLoggedIn: false,
  name: "Isimsiz"
}
export default User;
