import React, { Component } from 'react';
import InputButton from './InputButton';
import Style from './Style';
import {
	Text,
    TextInput,
    View,
    AppRegistry
} from 'react-native';

	const inputButtons = [2,3,4,5,6,7,8,9,10];

class OneRMCalc extends Component {

	constructor(props) {
	    super(props);
	    this.state = { 
	    	inputValue: 'Enter Weight Here',
			maxValue: 'Max is: 0'
			};
	}

	render() {
	    return (
	    	<View style={Style.rootContainer}>
     			<View style={{flex: 1, flexDirection: 'row'}}>
				    <TextInput
				        style={Style.inputValue}
				        keyboardType='numeric'
				        onFocus= {() => this.setState({inputValue : ''})}
				        onChangeText={(inputValue) => this.setState({inputValue})}
				        value={this.state.inputValue}
				      />
				    <Text style={Style.maxValue}>
		    			{this.state.maxValue}</Text>
	    		</View>
			    <View style={Style.inputContainer}>
	                {this._renderInputButtons()}
	            </View>
            </View>
	    );
	}

	_renderInputButtons() {
        let views = [];

        for (var r = 0; r < inputButtons.length; r ++) {
        	let input = inputButtons[r];
            let row = <InputButton 
            			value={input}
            			highlight={this.state.selectedSymbol === input}
                        onPress={this._onInputButtonPressed.bind(this, input)}
                        key={r}/>
            views.push(
            	<View style={Style.inputRow}
            			key={"row-" + r}>{row}</View>)
        }
        return views;
    }

    _onInputButtonPressed(input) {
		switch (typeof input) {
            case 'number':
                return this._handleNumberInput(input)
        }    
    }

    _handleNumberInput(reps) {
        let maxValue = (this.state.inputValue * (1 + reps/40));
        maxValue = maxValue.toFixed(1);
        this.setState({
            maxValue: 'max is ' + maxValue
        })
    }
}

AppRegistry.registerComponent('OneRMCalc', () => OneRMCalc);
