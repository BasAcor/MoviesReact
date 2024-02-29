import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [query, setQuery] = useState("dragon ball");
    const {isLoading, error, data} = useFetch(`&s=${query}`);

    return (
        <DataContext.Provider value={{ setQuery, isLoading, error, data }}>
            { children }
        </DataContext.Provider>
    )
}

