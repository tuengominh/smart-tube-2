import React from 'react';
import axios from 'axios';


class RealTime extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            time: new Date().toLocaleString(),
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    render() {
        return (
            <p className="App">
                It's {this.state.time}!
            </p>
        );
    }
}

export default RealTime;