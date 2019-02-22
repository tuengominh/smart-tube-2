import React from 'react';
import axios from 'axios';


class Counter extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            hasData: false,
            data: [],
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData('http://192.168.0.110:5000/tubes/12345');
    }

    render() {
            let counter = this.state.data;
            return("hasData : " + this.state.hasData //+ "You have " + (5-counter) + (counter === 1 ? " time left" : " times left")
        );
    }

    fetchData(url) {
        axios
            .get(url)
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
}

export default Counter;