import React from 'react';
import axios from 'axios';


class Counter extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            hasData: false,
            data: [],
        };
        //this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        axios.get('http://192.168.0.110:5000/tubes/12345')
            .then((results) => {
                this.setState({
                    hasData: true,
                    data: results,
                }, () => {
                });
            }).catch(err => {
                console.log(err);
                this.setState({hasData: false,})
        })
    }

    render() {
            let counter = this.state.data.length;
            return("You have " + this.state.hasData + (5-counter) + (counter === 1 ? " time left" : " times left"));
    }

    //fetchData(url) {
    //}
}

export default Counter;