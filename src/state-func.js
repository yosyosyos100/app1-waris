import React, { useState } from "react";

export default function MessageBox(){
    let [text,setText]=useState('Hello World')
    let [size,setSize]=React.useState(16)

    const onClicksetText=()=>{
        let t=prompt('กำหนดขนาดข้อความ')
        if (t){
            setText(t)
        }
    }

    const onClickZoomIn=()=>{
        let newSize=size+1
        setSize(newSize)
    }
    let msgboxStyle={
        display:'inline-block',
        width:150,
        fontSize:size,
        backgroundcolor:'#ccc',
        padding:5,
        textAllign:'left'
    }
    return(
        <div style={{textAlign:'center',marginTop:20}}>
            <div style={msgboxStyle}>{text}</div><br/><br/>
            <button onClick={onClicksetText}>ข้อความ</button>&nbsp;
            <button onClick={onClickZoomIn}>เพิ่มขนาด</button>&nbsp;
            <button onClick={()=>setSize(size-1)}>ลดขนาด</button>&nbsp;
        </div>
    )
}