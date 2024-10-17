import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../components/doctor/doctor.style.js";

export default function Doctor(props) {
  return (
    <>
      <TouchableOpacity style={styles.doctor}>
        <Image source={props.icon} style={styles.icon} />

        <View>
          <Text style={styles.name}>{props.name} </Text>
          <Text style={styles.specialty}>{props.specialty} </Text>
        </View>
        
      </TouchableOpacity>
    </>
  );
}
