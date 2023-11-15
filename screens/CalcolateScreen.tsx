import { FunctionComponent, useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/controls/Card";
import AppTextInput from "../components/controls/AppTextInput";
import AppButton from "../components/controls/AppButton";
import { COLORS } from "../theme";
import AppText from "../components/controls/AppText";
import { NettoConsegna } from "../services/tax-service";
import AppForm, { Values } from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import * as Yup from "yup";
import { FormikHelpers, FormikValues } from "formik";
import SubmitButton from "../components/forms/SubmitButton";
import BannerAdd from "../ads/BannerAdd";
import { interstitial, loadInterstitial } from "../ads/interstial";

interface CalcolateScreenProps {}
interface IResult {
  netto: number;
  benzina: number;
  tasse: number;
}
const CalcolateScreen: FunctionComponent<CalcolateScreenProps> = () => {
  const [result, setResult] = useState<IResult>({} as IResult);

  const convertToNumber = (number: string | number) => {
    const num = parseFloat(number.toString().replace(",", "."));
    console.log(num);
    return num;
  };

  const valid = Yup.string()
    .required("Campo obbligatorio")
    .max(12, "massimo numero 1.000.000,00")
    .test(
      "maxDigitsAfterDecimal",
      "il campo deve contenere 2 cifre dopo il decimale o meno",
      (number) => {
        if (number) {
          const num = convertToNumber(number);
          return Number.isInteger(num * 10 ** 2);
        }
        return false;
      }
    );
  const validationSchema = Yup.object().shape({
    gas: valid,
    delivery: valid,
    km: valid,
    consume: valid,
  });

  const handleSubmit = async (
    values: FormikValues,
    helper: FormikHelpers<Values>
  ) => {
    if (interstitial.loaded) interstitial.show();
    const { km, gas, delivery, consume } = values;

    const result = NettoConsegna(
      convertToNumber(gas),
      convertToNumber(delivery),
      convertToNumber(km),
      convertToNumber(consume)
    );
    setResult(result);
    helper.resetForm({
      values: { consume, gas },
    });
  };

  useEffect(() => {
    const unsubscribeInterstitialEvents = loadInterstitial();

    return () => {
      unsubscribeInterstitialEvents();
    };
  }, []);
  return (
    <ScrollView>
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
          <AppText style={{ marginBottom: 20 }}>Calcolo Consegna</AppText>
          <AppForm
            initialValues={{
              consume: undefined,
              gas: undefined,
              km: undefined,
              delivery: undefined,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <AppFormField
              label={"Auto Km/litro"}
              name="consume"
              icon={"car"}
              maxLength={10}
              placeholder={"Inserisce km percorsi con 1 litro"}
              keyboardType="numeric"
            />
            <AppFormField
              label={"Costo benzina"}
              name="gas"
              icon={"gas-station"}
              maxLength={10}
              placeholder={"Inserisce ultimo prezzo benzina"}
              keyboardType="numeric"
            />
            <AppFormField
              label={"Costo consegna"}
              name="delivery"
              icon={"cash-refund"}
              maxLength={10}
              placeholder={"Inserisce costo consegna"}
              keyboardType="numeric"
            />
            <AppFormField
              label={"km da percorrere"}
              name="km"
              icon={"cash-refund"}
              maxLength={10}
              placeholder={"Inserisce km da percorrere"}
              keyboardType="numeric"
            />
            <BannerAdd />
            <SubmitButton title="Calcola" color="black" />
          </AppForm>

          <AppText style={styles.title}>Detaglio consegna</AppText>
          <View style={styles.detail}>
            <AppText style={styles.textDetail}>Benzina:</AppText>
            <AppText>{result.benzina?.toFixed(2)} €</AppText>
          </View>
          <View style={styles.detail}>
            <AppText style={styles.textDetail}>Tasse:</AppText>
            <AppText>{result.tasse?.toFixed(2)} €</AppText>
          </View>
          <View style={styles.detail}>
            <AppText style={styles.textDetail}>Guadagno:</AppText>
            <AppText>{result.netto?.toFixed(2)} €</AppText>
          </View>
        </Card>
      </Screen>
    </ScrollView>
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
