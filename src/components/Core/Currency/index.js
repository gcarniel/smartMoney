import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import NumberFormat from 'react-number-format';

const Currency = ({value}) => {
    return (
        <NumberFormat 
            value={parseFloat(value)} 
            displayType={'text'}
            thousandSeparator={'.'}
            decimalSeparator={','}
            fixedDecimalScale={true}
            decimalScale={2}
            prefix={'R$ '}
            renderText={item => <Text>{item}</Text>}
        />
    );
};

const styles = StyleSheet.create({});

export default Currency;

