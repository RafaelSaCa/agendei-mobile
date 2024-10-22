
import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./services.style.js"
import icon from "../../constants/icon.js";
import {doctors_services} from "../../constants/data.js"
import Service from "../../components/service/service.jsx"

export function Services() {
  return (
        <>
        <View style={styles.container}>

          <View style={styles.banner}>
            <Image source={icon.female}/>
            <Text style={styles.name}>Nome Medico</Text>       
            <Text style={styles.specialty}>Especialidade</Text>                     
          </View>


           <FlatList data={doctors_services}
                     keyExtractor={(serv) => serv.id_service}
                     showsVerticalScrollIndicator={false}
                     renderItem={({item}) => {
                        return <Service description={item.description}
                                        price = {item.price}/>
                     }} />
        </View>
        
        </>
  );
}