import React ,{useState, useRef} from 'react';
import { Row, Col } from 'antd';



const Test = ()=>{
    const [value , setvalue] = useState({name:"xusong",passWord:""});
    return (
        <div>
            <h1>{value.name}</h1>
            <button 
                type="text"
                value={value}
                onBlur={ blurValue }
             >
                开始
            </button>
        </div>
    )
}

export default Test ;
