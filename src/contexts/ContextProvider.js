import React, { useContext, createContext, useState} from 'react';

//three steps to create a context
//1. create a context
//2. provide a context
//3. consume the context

const stateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    Notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentMode, setCurrentMode] = useState('Light')
    const [currentColor, setCurrentColor] = useState('#1A97F5')
    const [themeSettings, setThemeSettings] = useState(false)

    function setMode(e){
        setCurrentMode(e.target.value);

        localStorage.setItem('theme', currentMode)

        setThemeSettings(false)
    }

    function setColor (mode){
        setCurrentColor(mode);

        localStorage.setItem('color', currentColor);

        setThemeSettings(false);
    }

    const handleClick = (clicked) =>{
        setIsClicked({...initialState,  [clicked]: true})
    }

    return(
        <stateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor, currentMode,
            setMode, setColor,
            themeSettings, setThemeSettings,
        }}>
            {  children }
        </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext)



