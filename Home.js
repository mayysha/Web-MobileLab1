import React from "react";
import { Text, StyleSheet, Button , View, Image } from "react-native";

// Home

const Home = (props) => {
 //   return <Text style = {style.textStyle}>Department of CSE, Programme : SWE</Text>;
    return(
        <View>
            <Image
            source = {require('./../assets/logo.png')}
            />
            <Text style={style.textStyle}>Department of CSE</Text>
            <Text style={style.textStyle}> Programme : SWE</Text>
            <Button
            title= 'My Profile'
            onPress={
                function (){
                    //console.log("Button");
                    props.navigation.navigate("Profile");
                }
            }
            />
            <Button
            title= 'Semester Wise Course List'
            onPress={
                function (){
                    //console.log("Button");
                    props.navigation.navigate("Semester");
                }
            }
            />
            <Button
            title= 'List of Faculty Members'
            onPress={
                function (){
                    //console.log("Button");
                    props.navigation.navigate("Faculty");
                }
            }
            />

            
        </View>
    );
}
// IUT logo
// text DEpt of cse, prgm swe

const style = StyleSheet.create(
    {
        textStyle:{
            fontSize : 20,
            color : 'black',
        },
    }
);


// buttom - My profile
// semster
//faculty
export default Home;
