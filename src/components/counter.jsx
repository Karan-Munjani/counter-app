import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value: this.props.counter.value,
        // imageUrl: "https://picsum.photos/200"
        // tags: [],
    };

    // styles = {
    //     fontSize: 50,
    // };

    product = {
        id: 2,
        name: "Sp Royter"
    };

    render() {

        // console.log(this.props) 

        let classes = this.getClassName();
        return (
            <div className="container">
                {this.props.counter.children}
                {/* <img src={this.state.imageUrl} alt="" /> */}
                {/* <span style={this.styles} class={classes}> */}
                <span className={classes}>
                    {this.formatCount()}
                </span>
                <button onClick={(this.handleIncrement)} type="button" className="btn btn-primary m-2">increment</button>
                <button onClick={() => (this.props.onDel(this.props.counter.id))} type="button" className="btn btn-danger m-2" >Delete</button>
                <button onClick={() => (this.props.onDec(this.props.counter.value, this.props.counter.id))} type="button" className="btn btn-secondary m-2" >Decrement</button>

                {/* <p>
                    {this.state.tags.length === 0 && "Please Create A New Tag!!"}
                </p>
                {this.renderTags()} */}
            </div >
        );
    }



    constructor(props) {
        super(props);
        // var value = this.props.value;
        // console.log(value)
        this.handleIncrement = this.handleIncrement.bind(this)
    }

    handleIncrement() {

        this.setState({ value: this.state.value + 1 })
        console.log("Counter Incremented")
        // arrow function doesn't rebind this, they inherit the this keyword 
    }
    // handleDecrement() {
    //     if (this.state.value !== 0) {
    //         this.setState({
    //             value: this.state.value - 1
    //         })
    //     }
    //     else {
    //         this.setState({
    //             value: 0
    //         })
    //     }
    // }


    doEnable() {
        if (this.state.value === 0) return true;
    }




    // Methods Outside of Render
    getClassName() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? "ZERO" : count;
    }

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>No Tags To Display</p>;


    //     return <ul>{this.state.tags.map(tag => <li key={tag}> {tag}</li>)}</ul>;

    // }
}

export default Counter;
