import React from 'react';
import { Carousel } from 'antd';
import Tabar from "../component/Tabar"
class Home extends React.Component{
    // static propTypes = '首页'
    state={
        applyNum:''
    }

    constructor(...args){
        super(...args);
        let app = {
            id:10,
        }
    }
    
    render(){
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
          };
        return(
            <div>
                <Carousel>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                </Carousel>
                <Tabar></Tabar>
            </div>
        )
    }
 
}
export default Home;
