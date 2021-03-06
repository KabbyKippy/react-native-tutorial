import React, { Component } from 'react'

import {
    View,
    StyleSheet
} from 'react-native'

const MyPresentationalComponent = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.redbox} />
            <View style = {styles.bluebox} />
            <View style = {styles.blackbox} />
        </View>
    )
}

export default MyPresentationalComponent

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        height: 600
    },
    redbox: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    bluebox: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    },
    blackbox: {
        width: 100,
        height: 100,
        backgroundColor: 'black'
    },
})/**
 * Created by Kai on 1/26/2017.
 */
