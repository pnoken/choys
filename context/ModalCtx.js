import React, { createContext, useState } from "react";

export const ModalContext = createContext;

export const ModalProvider = ({ children }) => {
  const [modalDay, setModalDay] = useState();

  return (
    <ModalContext.Provider
      value={{
        modalDay,
        setModalDay,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
