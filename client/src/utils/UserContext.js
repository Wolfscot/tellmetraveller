import React from "react";

const UserContext = React.createContext({
    signedIn: false,
    user: null,
    signIn: () => {},
    signOut: () => {},
}); 

export default UserContext;