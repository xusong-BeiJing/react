import React from 'react';
import ReactDOM from 'react-dom';

const LayOut = {};

LayOut.header = class header extends React.Component {

    render() {
        const titleHeight = (window.innerHeight)*0.1;
        
        return (
            <header className="title" style={{height:titleHeight+"px"}}>
                {this.props.children}
            </header>
        )

    }
}

LayOut.body = class body extends React.Component {
    
    render() {
        const bodyHeight = (window.innerHeight)*0.70;
        return (
            <section className="body" style={{height:bodyHeight+"px"}}>
                {this.props.children}
            </section>
        )

    }
}

LayOut.footer = class footer extends React.Component {
    render() {
        const footerHeight = (window.innerHeight)*0.20;
        return (
            <footer className="footer" style={{height:footerHeight+"px"}}>
                {this.props.children}
            </footer>
        )

    }
}

export default LayOut;