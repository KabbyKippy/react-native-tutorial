import React, { Component  } from  'react';
import {
    Text,
    View,
    StyleSheet,
    AppRegistry,
    TouchableHighlight,
    TextInput,
    BackAndroid
} from 'react-native';
import NameInputBox from './NameInputBox.js';
import NameSubmitButton from './NameSubmitButton.js';


export default class Homepage extends Component {
    constructor(){
        super();
        this.state = {
            pressed: false,
            submitted: false,
            name: "",
            welcomeText: "Welcome to Aaron's million dollar project, you've been hired to develop a scientific dragon VR mmo game! " +
            "\nClick to learn more!",

        }

    }

    _updateName = (text) => {
        this.setState({
            name: text
        })
    }

    _onSubmit = () => {
        let name = this.state.name != "" ? this.state.name + "! " : "";
        this.setState({
            submitted: !this.state.submitted,
            welcomeText: name + this.state.welcomeText})
    }

    onPress = () => {
        this.setState({
            welcomeText: this.state.pressed ?
                "That's it, thanks for the money kids\n\nBTFO\n\n& also get memed haHAA"
                :
            "So glad you're interested! Now that you've clicked the text, you're our lead designer, programmer, art directory and even more! \n\n " +
            "Just let me know your time schedule and when we can expect you to work on this full time, you work at that 'Gardner' startup right? " +
            "Well it's time to move on from farming to the big leagues!\n\n Expect a good portion of the company stock when we get funding, trust me!"
            ,
            pressed: !this.state.pressed,
        });

    }



    render(){

        let nameComponent =  (
            <View>
                <NameInputBox
                    name={this.state.name}
                    updateName={this._updateName}
                    style={styles.font}
                />
                <NameSubmitButton
                    onSubmit={this._onSubmit}
                />
             </View>)

        let welcomeComponent = (
            <View>
                <Text style={styles.welcome}>
                    {this.state.welcomeText}
                </Text>
            </View>
        )

        return(
            <View style={styles.container}>
                {this.state.submitted ?  welcomeComponent : nameComponent }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    font: {
        textAlign: 'center'
    }

});

module.exports = Homepage;
