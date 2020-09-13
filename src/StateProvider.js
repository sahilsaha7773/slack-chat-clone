import React, { createContext, useContext, useReducer }
from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{/*Children is the app and the reducer listen for updates in this data layer*/}
		{children}
	</StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

