import React, { createContext, useState } from "react";

export const ValueContext = createContext();

const ValueContextProvider = ({ children }) => {
  const [state, setState] = useState({
    title: "",
    content: ""
  });

  // const onChange = event => {
  //   setState({
  //     ...state,
  //     title: event.target.value,
  //     content: event.target.value
  //   });
  // }

  // return Provider
  return (
    <ValueContext.Provider value={{ state, setState }}>
      {children}
    </ValueContext.Provider>
  );
};

export default ValueContextProvider;
