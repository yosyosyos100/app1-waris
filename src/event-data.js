import React from 'react';

export function EventData() {
    const onClickStartStop = (ev) => {
        let t = ev.target.innerText;
        let s = (t === 'Start') ? 'Stop' : 'Start';
        ev.target.innerText = s;
    };

    const onClickAdd = (ev) => {
        let t = ev.target.innerText;
        let r = eval(t);
        alert(`${t} = ${r}`);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
            <button onClick={(ev) => onClickStartStop(ev)}>Start</button><br/><br/>
            <button onClick={onClickAdd}>10 + 20</button><br/><br/>
            <button onClick={onClickAdd}>30 * 40</button><br/><br/>
        </div>
    );
    
}