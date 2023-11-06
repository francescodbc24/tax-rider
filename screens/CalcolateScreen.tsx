import { FunctionComponent, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/controls/Card";
import AppTextInput from "../components/controls/AppTextInput";
import AppButton from "../components/controls/AppButton";
import { COLORS } from "../theme";
import AppText from "../components/controls/AppText";
import { NettoConsegna } from "../services/tax-service";

interface CalcolateScreenProps {}
interface IResult {
  netto: number;
  benzina: number;
  tasse: number;
}
const CalcolateScreen: FunctionComponent<CalcolateScreenProps> = () => {
  const [gasoline, setGasoline] = useState<number>(0);
  const [consegna, setConsegna] = useState<number>(0);
  const [km, setKm] = useState<number>(0);
  const [result, setResult] = useState<IResult>({} as IResult);

  const handleCalcolate = () => {
    console.log(gasoline);
    const result = NettoConsegna(gasoline, consegna, km);
    setResult(result);
  };
  return (
    <Screen style={{ backgroundColor: COLORS.primary }}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <AppText
          style={{ fontSize: 28, fontWeight: "bold", color: COLORS.white }}
        >
          Tax Rider
        </AppText>
      </View>
      <Card padding={20} style={{ marginTop: 20, display: "flex", flex: 1 }}>
        <AppText>Calcolo Consegna</AppText>
        <AppTextInput
          value={gasoline?.toString()}
          onChangeText={(text: string) => {
            let value = 0;
            if (text) {
              value = parseFloat(text);
            }
            setGasoline(value);
          }}
          keyboardType="numeric"
          placeholder="Inserisci prezzo benzina"
          returnKeyType="done"
          icon={"gas-station"}
        />
        <AppTextInput
          keyboardType="numeric"
          returnKeyType="done"
          placeholder="Inserisci prezzo consegna"
          icon={"cash-refund"}
          value={consegna?.toString()}
          onChangeText={(text: string) => {
            let value = 0;
            if (text) {
              value = parseFloat(text);
            }
            setConsegna(value);
          }}
        />
        <AppTextInput
          keyboardType="numeric"
          returnKeyType="done"
          placeholder="Inserisci km da percorrere"
          icon={"truck-delivery"}
          value={km?.toString()}
          onChangeText={(text: string) => {
            let value = 0;
            if (text) {
              value = parseFloat(text);
            }
            setKm(value);
          }}
        />
        <AppButton
          title="Calcola"
          color="black"
          icon="login"
          onPress={handleCalcolate}
        />

        <AppText style={styles.title}>Consegna Detail</AppText>
        <View style={styles.detail}>
          <AppText style={styles.textDetail}>Benzina:</AppText>
          <AppText>{result.benzina?.toFixed(2)}</AppText>
        </View>
        <View style={styles.detail}>
          <AppText style={styles.textDetail}>Tasse:</AppText>
          <AppText>{result.tasse?.toFixed(2)}</AppText>
        </View>
        <View style={styles.detail}>
          <AppText style={styles.textDetail}>Guadagno:</AppText>
          <AppText>{result.netto?.toFixed(2)}</AppText>
        </View>
      </Card>
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  detail: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textDetail: {
    fontWeight: "400",
  },
});

export default CalcolateScreen;
