import React from 'react';
import Buttons from './Buttons';
import Value from './Value';


class App extends React.Component {
    constructor(props) {
        super(props);
        
        // this.state = {
        //     value: this.props.value
        // };
        // this.increment = this.increment.bind(this);
    }
    
    // increment = () => {
    //     console.log('increment');
    //     this.setState({value: this.state.value + 1});
    // }
    // decrement = () => {
    //     console.log('decrement');
    //     this.setState({value: this.state.value - 1});
    // }
    
    render() {
        return (
            <div className="app-container">
                <div className="app-header">{this.props.title}</div>
                {/*<Value value={this.state.value}/>*/}
                <Value />

                {/*<Buttons 
                    increment={this.increment}
                    decrement={this.decrement}
                />*/}
                <Buttons />
            </div>
        );
    }
    
}

export default App;