import { FlatList, Text, View } from "react-native";
import { styles } from "./calendar.style.js"
import { appointments } from "../../constants/data.js";
import Appointment from "../../components/appointment/appointment.jsx";
import icon from "../../constants/icon.js";

export function Calendar() {
  return (
        <>
        <View style={styles.container}>
          
           <FlatList data={appointments}
                     keyExtractor={(appoint) => appoint.id_doctor}
                     showsVerticalScrollIndicator={false}
                     renderItem={({item}) => {
                        return <Appointment 
                                service={item.service}
                                doctor={item.doctor}
                                specialty={item.specialty}/>
                     }} />
        </View>
        
        </>
  );
}