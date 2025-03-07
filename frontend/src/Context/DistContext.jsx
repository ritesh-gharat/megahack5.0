// import React from "react";
// import { useState } from "react";
// import { createContext } from "react";

// export const CounterContext = createContext();

// export const UsersProvider = ({ children }) => {
//   const [users, setUsers] = useState(null);
//   return (
//     <CounterContext.Provider value={{ users, setUsers }}>
//       {children}
//     </CounterContext.Provider>
//   );
// };

import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

export const LocContext = createContext();

export const LocProvider = ({ children }) => {
  const [dist, setdist] = useState("Palghar");
  const [state, setState] = useState("Maharashtra");
  return (
    <LocContext.Provider value={{ dist, setdist, state, setState }}>
      {children}
    </LocContext.Provider>
  );
};

export const useLoc = () => {
  return useContext(LocContext);
};
