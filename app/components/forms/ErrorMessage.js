import React from 'react';
import { Text, StyleSheet } from 'react-native';

function ErrorMessage({visible, error}) {
    if(!visible || !error) return null;
    return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
    error:{
        color: "red",
        alignSelf:"flex-start"
    }
})
export default ErrorMessage;