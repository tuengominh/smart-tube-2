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
            let counter = this.state.data.length;
            let condition = counter < 5;
            return(
                (condition
                    ? ("You have used " + counter + (counter === 1 ? " dose" : " doses") + " today!")
                    : ("You have exceeded the maximum usage! ")
                )
        );
    }

    fetchData(url) {
        axios
            .get(url)
            .then((results) => {
                this.setState({
                    hasData: true,
                    data: results.data,
                }, () => {
                });
            }).catch(err => {
            console.log(err);
            this.setState({hasData: false,})
        })
    }
}

export default Counter;