import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import './home.css'

export default function Home() {
    const [clicked, setClicked] = useState([])
    // const [count, setCount] = useState(null);
    const [num, setNum] = useState({
        zero: false,
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,

    })
    const [symbols, setsymbols] = useState({
        cross: [],
        ooo: []
    })
    const [results, setResults] = useState(null)
    const handleClear = () => {
        setClicked([]);
        setNum({
            zero: false,
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false,
            eight: false,

        })
        setsymbols({
            cross: [],
            ooo: []
        });
        setResults(null)
    }
    const output = (symbols) => {
        if ((symbols.cross.includes(0) && symbols.cross.includes(1) && symbols.cross.includes(2)) ||
            (symbols.cross.includes(3) && symbols.cross.includes(4) && symbols.cross.includes(5)) ||
            (symbols.cross.includes(6) && symbols.cross.includes(7) && symbols.cross.includes(8)) ||
            (symbols.cross.includes(0) && symbols.cross.includes(3) && symbols.cross.includes(6)) ||
            (symbols.cross.includes(1) && symbols.cross.includes(4) && symbols.cross.includes(7)) ||
            (symbols.cross.includes(2) && symbols.cross.includes(5) && symbols.cross.includes(8)) ||
            (symbols.cross.includes(0) && symbols.cross.includes(4) && symbols.cross.includes(8)) ||
            (symbols.cross.includes(2) && symbols.cross.includes(4) && symbols.cross.includes(6))
        ) {
            setResults(true)
        } else if (
            (symbols.ooo.includes(0) && symbols.ooo.includes(1) && symbols.ooo.includes(2)) ||
            (symbols.ooo.includes(3) && symbols.ooo.includes(4) && symbols.ooo.includes(5)) ||
            (symbols.ooo.includes(6) && symbols.ooo.includes(7) && symbols.ooo.includes(8)) ||
            (symbols.ooo.includes(0) && symbols.ooo.includes(3) && symbols.ooo.includes(6)) ||
            (symbols.ooo.includes(1) && symbols.ooo.includes(4) && symbols.ooo.includes(7)) ||
            (symbols.ooo.includes(2) && symbols.ooo.includes(5) && symbols.ooo.includes(8)) ||
            (symbols.ooo.includes(0) && symbols.ooo.includes(4) && symbols.ooo.includes(8)) ||
            (symbols.ooo.includes(2) && symbols.ooo.includes(4) && symbols.ooo.includes(6))
        ) {
            setResults(false)
        }
    }
    const boxClicked = (n) => {
        if (clicked.includes(n) && results === null) {
            setClicked([...clicked])
        } else if (clicked.includes(n) === false && results === null) {
            setClicked([...clicked, n])
            if (clicked.length % 2 === 0) {

                // setCount(true)
                setsymbols({ ...symbols, cross: [...symbols.cross, n] })
                output({ ...symbols, cross: [...symbols.cross, n] })
            }
            else {
                // setCount(false)
                setsymbols({ ...symbols, ooo: [...symbols.ooo, n] })
                output({ ...symbols, ooo: [...symbols.ooo, n] })
            }
        }

    }
    const showMarks = (n) => {

        if (clicked.length > 0 && clicked.includes(n) && clicked.indexOf(n) % 2 === 0) {

            return 'X'

        } else if (clicked.length > 0 && clicked.includes(n) && clicked.indexOf(n) % 2 !== 0) {

            return 'O'
        }
    }



    // console.log(clicked, count, 'total clicked items')
    console.log(symbols)
    console.log(results)
    return (
        <Box className='main'>
            <h1>TIC-TAC-TOE Game</h1>
            <h3 style={{ visibility: results !== null ? 'visible' : results=== null && clicked.length ===9 ? 'visible': 'hidden' }}>{results === true ? 'The Winner is X' : results === false ? 'The Winner is O' : results=== null && clicked.length ===9 ? 'Match Draw':'hjfhfhg'}</h3>
            <Box className='container'>
                <Button onClick={() => { boxClicked(0); setNum({ ...num, zero: true }) }} className='item1'>{num.zero ? showMarks(0) : null}</Button>
                <Button onClick={() => { boxClicked(1); setNum({ ...num, one: true }) }} className='item1'>{num.one ? showMarks(1) : null}</Button>
                <Button onClick={() => { boxClicked(2); setNum({ ...num, two: true }) }} className='item1'>{num.two ? showMarks(2) : null}</Button>
                <Button onClick={() => { boxClicked(3); setNum({ ...num, three: true }) }} className='item1'>{num.three ? showMarks(3) : null}</Button>
                <Button onClick={() => { boxClicked(4); setNum({ ...num, four: true }) }} className='item1'>{num.four ? showMarks(4) : null}</Button>
                <Button onClick={() => { boxClicked(5); setNum({ ...num, five: true }) }} className='item1'>{num.five ? showMarks(5) : null}</Button>
                <Button onClick={() => { boxClicked(6); setNum({ ...num, six: true }) }} className='item1'>{num.six ? showMarks(6) : null}</Button>
                <Button onClick={() => { boxClicked(7); setNum({ ...num, seven: true }) }} className='item1'>{num?.seven ? showMarks(7) : null}</Button>
                <Button onClick={() => { boxClicked(8); setNum({ ...num, eight: true }) }} className='item1'>{num.eight ? showMarks(8) : null}</Button>

            </Box>
            <Button onClick={handleClear} sx={{ display: 'block', visibility: results !== null ? 'visible'  :results=== null && clicked.length ===9 ? 'visible': 'hidden' }} className="clear" variant="contained">Start Over</Button>



        </Box>
    )
}