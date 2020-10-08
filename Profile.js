import React from "react";
import { Text, StyleSheet, View , Image } from "react-native";

const Profile = () =>{
  
    const f_1 = "Name : Munia";
    const f_2 = "Student ID : 170042049";
    const f_3 = "Room no. 107 NFHR";
    const f_4 = "Email : mayshaafrin@iut-dhaka.edu";

    return(
        <View style={StyleSheet.viewStyle}>
            <Image
            source = {require('./../assets/default.jpg')}
            />
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

export default Profile;