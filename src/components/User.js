import React from "react";

const User = ({name,surname,isLoggedIn}) => {
  return (
    <h1>
      {/* {props.isLoggedIn
        ? `Selam ${props.name} ${props.surname}`
        : `Giriş yapmadınız`} */}
         {isLoggedIn
        ? `Selam ${name} ${surname}`
        : `Giriş yapmadınız`}
    </h1>
  );
};

export default User;
