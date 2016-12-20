import React, { Component } from 'react';
import Button from 'react-native-button';
import InputButton from './InputButton';
import Style from './Style';
import {
	Alert,
	Text,
    TextInput,
    TouchableHighlight,
    View,
    AppRegistry
} from 'react-native';

	const inputButtons = [2,3,4,5,6,7,8,9,10];

class OneRMCalc extends Component {

	constructor(props) {
	    super(props);
	    this.state = { 
	    	inputValue: 'Enter Weight Here',
			};
	}

	render() {
	    return (
	    	<View style={Style.rootContainer}>
     			<View style={{flex: 1}}>
				    <TextInput
				        style={Style.inputValue}
				        keyboardType='numeric'
				        onFocus= {() => this.setState({inputValue : ''})}
				        onChangeText={(inputValue) => this.setState({inputValue})}
				        value={this.state.inputValue}
				      />
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
            let row = <Button 
            			containerStyle={Style.buttonContainer}
    					style={Style.button}
    					highlight={this.state.selectedSymbol === input}
                        onPress={this._handleInput.bind(this, input)}
                        key={r}>
                        {input} reps
                        </Button>
            views.push(
            	<View style={Style.inputRow}
            			key={"row-" + r}>{row}</View>)
        }
        return views;
    }

    _handleInput(reps) {
    	if (isNaN(this.state.inputValue)){
    		Alert.alert('Enter a valid number');
    		this.setState({inputValue : 'Enter Weight Here'});
    	}
    	else {
	        let maxValue = (this.state.inputValue * (1 + reps/40));
	        maxValue = maxValue.toFixed(1);
	    	Alert.alert('One Rep Max is', maxValue);
    	}
    }
}

AppRegistry.registerComponent('OneRMCalc', () => OneRMCalc);
