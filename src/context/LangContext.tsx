import { createContext, useState } from "react";
import { ILangContextProps } from "@/types/ILangContextProps";

export const LangContext = createContext<ILangContextProps>({
    // INITIAL STATES VALUES
    lang: '', 
    handleSwitchLang: () => {},
})

export const LangProvider = ({children}: {children: React.ReactNode;}): JSX.Element => {
const [lang, setLang] = useState('en')

const handleSwitchLang = () => {
    lang === 'pt' ? setLang('en') : setLang('pt');
}

    return (
        <LangContext.Provider value={{ lang, handleSwitchLang }}>
            {children}
        </LangContext.Provider>
    );
};