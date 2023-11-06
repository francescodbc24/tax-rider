import { FunctionComponent, useState } from "react";
import { Text, View } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/controls/Card";
import AppTextInput from "../components/controls/AppTextInput";
import AppButton from "../components/controls/AppButton";
import { COLORS } from "../theme";
import AppText from "../components/controls/AppText";
import { NettoConsegna } from "../services/tax-service";

interface CalcolateScreenProps {}

const CalcolateScreen: FunctionComponent<CalcolateScreenProps> = () => {
  const [gasoline,setGasoline]=useState<number>(0)

    const handleCalcolate = () =>{
        console.log(gasoline)
    //NettoConsegna()
  }
    return (
    <Screen style={{backgroundColor:COLORS.primary}}>
        <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:20}}>
        <AppText style={{fontSize:28,fontWeight:"bold",color:COLORS.white}}>Tax Rider</AppText>
        </View>
      <Card padding={20} style={{marginTop:20,display:"flex", flex:1}}>
        <AppText>Calcolo Consegna</AppText>
        <AppTextInput value={gasoline?.toString()} onChangeText={(text:string)=>setGasoline(parseFloat(text))}  keyboardType = 'numeric'  placeholder="Inserisci prezzo benzina" icon={"gas-station"} />
        <AppTextInput placeholder="Inserisci prezzo consegna" icon={"cash-refund"}  />
        <AppTextInput placeholder="Inserisci km da percorrere" icon={"truck-delivery"}  />
        <AppButton title="Calcola" color="black" icon="login" onPress={handleCalcolate} />
      </Card>
    </Screen>
  );
};

export default CalcolateScreen;
