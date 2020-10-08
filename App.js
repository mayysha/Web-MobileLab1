import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./src/Home";
import Faculty from "./src/Faculty";
import Profile from "./src/Profile";
import Semester from "./src/Semester";
import CourseOne from "./src/CourseOne";
import CourseTwo from "./src/CourseTwo";
import CourseThree from "./src/CourseThree";
const stack = createStackNavigator();

function App(){
  return(

    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name= "Home" component= {Home}/>
        <stack.Screen name= "Faculty" component= {Faculty}/>
        <stack.Screen name= "Profile" component= {Profile}/>
        <stack.Screen name= "Semester" component= {Semester}/>
        <stack.Screen name= "CourseOne" component= {CourseOne}/>
        <stack.Screen name= "CourseTwo" component= {CourseTwo}/>
        <stack.Screen name= "CourseThree" component= {CourseThree}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
