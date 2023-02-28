import React from "react";
import './Header.css'
import { TextField, createTheme, ThemeProvider, MenuItem } from "@mui/material";
import categories from './data/Category'
const Header = ({ setCategory, category, word, setWord ,LightMode}) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightMode?'#000':"#fff"

            },
            mode: LightMode?'light':'dark',
        },
    });
    const handlechange = (language) => {
        setCategory(language);
        setWord("");
    }
    return (
        <div className="header">
            <span className="title">{word != "" ? word : "Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField className="search" label="Search a word" value={word} variant="standard" onChange={(e) => { setWord(e.target.value) }} />

                    <TextField
                        className="select"
                        select
                        label="language"
                        value={category}
                        onChange={(e) => handlechange(e.target.value)}
                        variant="standard"
                    >
                        {
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>
                                    {option.value}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </ThemeProvider>

            </div>
        </div>
    )
}
export default Header