import { createContext } from "react";

export const GiftContext = createContext();

function GiftProvider({children}) {
    return(
        <GiftContext.Provider value={{gift:"Samsung Mobile"}}>
            {children}
        </GiftContext.Provider>
    )
}

export default GiftProvider;