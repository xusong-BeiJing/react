import React from 'react';
import ReactDOM from 'react-dom';

class helloMyApp extends React.Component{
    constructor(...args){
        super(...args);
        let app = {
            id:10,
        }
    }
    render(){
        return(
            <div>
                <div>123123</div>
                我的第一个页面开始了
            </div>
        )
    }
 
}