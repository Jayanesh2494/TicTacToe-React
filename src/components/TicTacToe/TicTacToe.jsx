import React, { useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.jpeg';
import cross_icon from '../Assets/cross.jpeg';

const initialData = ['', '', '', '', '', '', '', '', ''];

const TicTacToe = () => {
    const [data, setData] = useState(initialData);
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);

    const toggle = (e, num) => {
        if (lock || data[num] !== '') {
            return;
        }
        const newData = [...data];
        if (count % 2 === 0) {
            newData[num] = 'x';
        } else {
            newData[num] = 'o';
        }
        setData(newData);
        setCount(count + 1);
        checkWin(newData);
    };

    const checkWin = (data) => {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                setLock(true);
                alert(`Player ${data[a]} won!`);
                return;
            }
        }

        if (data.every(cell => cell)) {
            alert('It\'s a draw!');
        }
    };

    const resetGame = () => {
        setData(initialData);
        setCount(0);
        setLock(false);
    };

    return (
        <div className='container'>
            <h1 className='title'> Tic Tac Toe Game in <span>React</span></h1>
            <div className='board'>
                <div className='row'>
                    <div className="boxes" onClick={(e) => { toggle(e, 0) }}>
                        {data[0] && <img src={data[0] === 'x' ? cross_icon : circle_icon} alt={data[0]} />}
                    </div>
                    <div className="boxes" onClick={(e) => { toggle(e, 1) }}>
                        {data[1] && <img src={data[1] === 'x' ? cross_icon : circle_icon} alt={data[1]} />}
                    </div>
                    <div className="boxes" onClick={(e) => { toggle(e, 2) }}>
                        {data[2] && <img src={data[2] === 'x' ? cross_icon : circle_icon} alt={data[2]} />}
                    </div>
                </div>
                <div className='row'>
                    <div className="boxes" onClick={(e) => { toggle(e, 3) }}>
                        {data[3] && <img src={data[3] === 'x' ? cross_icon : circle_icon} alt={data[3]} />}
                    </div>
                    <div className="boxes" onClick={(e) => { toggle(e, 4) }}>
                        {data[4] && <img src={data[4] === 'x' ? cross_icon : circle_icon} alt={data[4]} />}
                    </div>
                    <div className="boxes" onClick={(e) => { toggle(e, 5) }}>
                        {data[5] && <img src={data[5] === 'x' ? cross_icon : circle_icon} alt={data[5]} />}
                    </div>
                </div>
                <div className='row'>
                    <div className="boxes" onClick={(e) => { toggle(e, 6) }}>
                        {data[6] && <img src={data[6] === 'x' ? cross_icon : circle_icon} alt={data[6]} />}
                    </div>
                    <div className="boxes" onClick={(e) => { toggle(e, 7) }}>
                        {data[7] && <img src={data[7] === 'x' ? cross_icon : circle_icon} alt={data[7]} />}
                    </div>
                    <div className="boxes" onClick={(e) => { toggle(e, 8) }}>
                        {data[8] && <img src={data[8] === 'x' ? cross_icon : circle_icon} alt={data[8]} />}
                    </div>
                </div>
            </div>
            <button className='reset' onClick={resetGame}>Reset</button>
        </div>
    );
};

export default TicTacToe;
