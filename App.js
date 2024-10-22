import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/button/button.jsx";
import {Login} from "./src/screens/login/login.jsx"
import { Account } from "./src/screens/account/account.js";
import { Home } from "./src/screens/home/home.jsx";
import { Calendar } from "./src/screens/calendar/calendar.jsx";
import {Profile} from "./src/screens/profile/profile.jsx";
import {Main} from "./src/screens/main/main.jsx";
import { Services } from "./src/screens/services/services.jsx";
import Schedule from "./src/screens/schedule/schedule.jsx";
export default function App() {

  return <>  

    <Schedule/>

  </>;  
}
