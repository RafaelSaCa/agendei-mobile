import { Text, View } from "react-native";
import { styles } from "./schedule.style.js";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar.js";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button.jsx";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

function Schedule() {
  const [selectedDate, setSelectDate] = useState("");
  const [selectedHour, setSelectHour] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Calendar style={styles.theme}
          onPress={(day) => {
                setSelectDate(day.dateString);
          }}
          markedDates={{ [selectedDate]: { selected: true } }}
          minDate={new Date().toDateString()}
        />

        <View>
          <Text style={styles.textHour}>Horário</Text>
        </View>

        <View>
          <Picker
            selectedValue={selectedHour}
            onValueChange={(itemValue, itemIndex) => {
              setSelectHour(itemValue);
            }}
          >
            <Picker.Item label="09:00" value="09:00" />
            <Picker.Item label="09:30" value="09:30" />
            <Picker.Item label="10:00" value="10:00" />
            <Picker.Item label="10:30" value="10:30" />
          </Picker>
        </View>

      </View>

      <View>
        <Button text="Confirmar Reserva"></Button>
      </View>
    </View>
  );
}

export default Schedule;
