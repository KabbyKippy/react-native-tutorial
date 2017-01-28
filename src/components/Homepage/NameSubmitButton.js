/**
 * Created by Kai on 1/25/2017.
 */
import {
    Text,
    TouchableHighlight
} from 'react-native';
import React, {Component} from 'react';


const NameSubmitButton = (props) => {
    return(
        <TouchableHighlight onPress={() => props.onSubmit()}>
            <Text>
                Submit your name here!
            </Text>
        </TouchableHighlight>
    )
}

export default NameSubmitButton;