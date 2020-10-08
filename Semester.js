import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const Semester = (props) =>{
  
    return(
        <View>
            <Button
            title= '1st'
            onPress={
                function (){
                    props.navigation.navigate("CourseOne");
                }
            }
            />

            <Button
            title= '2nd'
            onPress={
                function (){
                    props.navigation.navigate("CourseTwo");
                }
            }
            />
             <Button
            title= '3rd'
            onPress={
                function (){
                    props.navigation.navigate("CourseThree");
                }
            }
            />
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

export default Semester;