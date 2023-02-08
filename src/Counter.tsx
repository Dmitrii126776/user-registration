import {Button} from '@mui/material';
import React from 'react';

interface IProps {
    counter: number;
    changeCounter: (value: number) => void
}

const Counter = (props: IProps) => {
    const {counter, changeCounter} = props
    return (
        <div>
            <h3>Counter</h3>
            <Button size="small" variant="contained"
                    disabled={counter === 0} onClick={() => changeCounter(-1)}>minus</Button>
            {' '}
            {counter}
            {' '}
            <Button size="small" variant="contained"
                    onClick={() => changeCounter(1)}>plus</Button>
        </div>
    );
};
export default Counter;
