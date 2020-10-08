import React from "react";
import { Text, StyleSheet, View } from "react-native";
const CourseOne = () =>{
  
    const f_1 = "Cse 123";
    const f_2 = "Swe 123";
    const f_3 = "Cse 156";
    const f_4 = "Swe 156";

    return(
        <View style={StyleSheet.viewStyle}>
            <Text style={StyleSheet.textStyle}>First Semester</Text>
            <Text style={StyleSheet.textStyle}>{f_1}</Text>
            <Text style={StyleSheet.textStyle}>{f_2}</Text>
            <Text style={StyleSheet.textStyle}>{f_3}</Text>
            <Text style={StyleSheet.textStyle}>{f_4}</Text>
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

export default CourseOne;