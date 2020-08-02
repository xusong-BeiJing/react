import React from 'react';


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
    // 正则验证
    testInput = val =>{
        if(/^[A-Za-z0-9]+$/.test(val)) {
            return val += val
        }else{
            return val 
        }
    }

    //点击验证
    handleInput = event =>{
        let value = event.target.value;
        let me= this;
        this.setState({
            applyNum:me.testInput(value),
        },()=>{
            console.log('value',me.state.applyNum)
        })
        
    }
    render(){
        return(
            <div>
              <input type="text" value={this.state.applyNum} placeholder="开始输入" onChange={this.handleInput} />
              <div>
                  id
              </div>
            </div>
        )
    }
 
}
export default Home;
