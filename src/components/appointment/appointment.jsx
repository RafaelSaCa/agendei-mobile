import { Image, Text, View } from "react-native";
import { appointments } from "../../constants/data";
import { styles } from "./appointment style";
import icon from "../../constants/icon.js";
import Button from "../button/button.jsx";

function Appointment(props) {
  return (
    <View style={styles.appointment}>
      <Text style={styles.name}>
        {props.service} - {props.doctor}
      </Text>
      <Text style={styles.specialty}> {props.specialty}</Text>

      <View style={styles.container}>
         <View style={styles.containerBooking}>
          <View style={styles.booking}>
            <Image style={styles.icon} source={icon.calendar} />
            <Text style={styles.bookingDate}>17/10/2024</Text>
          </View>

          <View style={styles.booking}>
            <Image style={styles.icon} source={icon.clock} />
            <Text style={styles.bookingHour}>08:00h</Text>
          </View>
         </View>

         <View style={styles.containerButton}>
          <Button text="Cancelar Reserva" theme="danger"/>
         </View>
      </View>

    </View>
  );
}

export default Appointment;
