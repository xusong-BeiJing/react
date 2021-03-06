import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'antd';
import Tabar from "../component/Tabar"
// import Test from "../component/Test/index"
import LayOut from "../component/LayOut"
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
                <LayOut.header>
                    <div>123123</div>
                </LayOut.header>
                <LayOut.body>
                    <Carousel>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                    </Carousel>
                </LayOut.body>
                <LayOut.footer>
                    <Tabar></Tabar>
                </LayOut.footer>
            </div>
        )
    }
 
}
export default Home;
