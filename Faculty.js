import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Faculty = () =>{
  
    const f_1 = "1.Prof X";
    const f_2 = "2.Prof Y";
    const f_3 = "3.Prof Z";

    return(
        <View style={StyleSheet.viewStyle}>
            <Text style={StyleSheet.textStyle}>{f_1}</Text>
            <Text style={StyleSheet.textStyle}>{f_2}</Text>
            <Text style={StyleSheet.textStyle}>{f_3}</Text>
        </View>
    );
}

const style = StyleSheet.create(
    {
        textStyle:{
            fontSize : 20,
            color : 'black',
        },
    }
);

export default Faculty;