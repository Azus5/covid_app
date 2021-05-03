import React, { useState, useEffect } from "react";
import axios from "axios";

import { Text, View, Image, SafeAreaView, ScrollView } from "react-native";
import styles from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faSkull,
  faBars,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { color } from "react-native-reanimated";

const SkullSVG = () => {
  return (
    <View>
      <FontAwesomeIcon icon={faSkull} size={30} />
    </View>
  );
};

function formatNum(num) {
  let formated = "";
  num = num.toString();
  let count = num.length - 1;
  for (let i in num) {
    if ((count + 1) % 3 == 0 && i != 0 && count != num.length) {
      formated += `.${num[i]}`;
      count--;
      continue;
    }
    formated += num[i];
    count--;
  }
  return formated;
}

export default function Home({ navigation }) {
  const [deaths, setDeaths] = useState(0);
  const [cases, setCases] = useState(0);

  useEffect(() => {
    console.log("REQUEST");
    if (cases && deaths) return;
    const url = "https://covid-19-data.p.rapidapi.com/country/code";
    const params = {
      code: "br",
      date: new Date().toISOString().split("T")[0],
    };
    const headers = {
      "x-rapidapi-key": "a879bda480msh8d19df1fb617f65p1de91djsn9cea2af17877",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    };

    axios
      .get(url, { headers, params })
      .then((response) => {
        setCases(response.data[0].confirmed);
        setDeaths(response.data[0].deaths);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 40,
          }}
        >
          <FontAwesomeIcon
            icon={faBars}
            size={30}
            onPress={() => navigation.openDrawer()}
          />
          <Text style={{ fontSize: 35 }}>
            C
            <SkullSVG />
            R
            <SkullSVG />
            NA
            <Text style={{ color: "green" }}>VIRUS</Text>
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ ...styles.paragraph, marginBottom: 40 }}>
            A Covid-19 é uma infecção respiratória aguda causada pelo
            coronavírus SARS-CoV-2, potencialmente grave, de elevada
            transmissibilidade e de distribuição global.{"\n\n"}O SARS-CoV-2 é
            um betacoronavírus descoberto em amostras de lavado broncoalveolar
            obtidas de pacientes com pneumonia de causa desconhecida na cidade
            de Wuhan, província de Hubei, China, em dezembro de 2019. Pertence
            ao subgênero Sarbecovírus da família Coronaviridae e é o sétimo
            coronavírus conhecido a infectar seres humanos.{"\n\n"} Os
            coronavírus são uma grande família de vírus comuns em muitas
            espécies diferentes de animais, incluindo o homem, camelos, gado,
            gatos e morcegos. Raramente os coronavírus de animais podem infectar
            pessoas e depois se espalhar entre seres humanos como já ocorreu com
            o MERS-CoV e o SARS-CoV-2. Até o momento, não foi definido o
            reservatório silvestre do SARS-CoV-2.
          </Text>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Image
              source={require("../../../assets/index.jpeg")}
              style={styles.cases_image}
            />
            <View style={styles.cases_block}>
              <Text
                style={{
                  textDecorationLine: "underline",
                  color: "white",
                  fontSize: 20,
                }}
              >
                {formatNum(cases)}
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>Casos</Text>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={styles.deaths_block}>
              <Text
                style={{
                  textDecorationLine: "underline",
                  color: "white",
                  fontSize: 20,
                }}
              >
                {formatNum(deaths)}
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>Mortes</Text>
            </View>
            <Text style={styles.paragraph}>
              O Brasil se consolidou como país com mais novas mortes e aumentou
              sua diferença para o segundo colocado (6.870), os Estados Unidos.
              Os números brasileiros foram quase o triplo das vidas perdidas
              entre os norte-americanos.
            </Text>
          </View>
          <View style={{ marginTop: 30, marginBottom: 15 }}>
            <Text style={{ fontWeight: "bold" }}>
              *Valores references apenas ao Brasil
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
