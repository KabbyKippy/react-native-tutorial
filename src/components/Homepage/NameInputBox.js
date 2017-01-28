/**
 * Created by Kai on 1/25/2017.
 */
import {
    TextInput
} from 'react-native';
import React from 'react';

const NameInputBox = (props) => {
    return(
        <TextInput
            placeholder="Enter your name!"
            autoCapitalize='words'
            onChangeText={(text) => props.updateName(text)}
            style={props.font}
        />

    )

}

export default NameInputBox;