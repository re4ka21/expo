import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import ContinueButton from "../../components/ContinueButtons/ContinueButton";
import OnboardingDots from "../../components/Dots";

import {
  ONBOARDING_SCREENS,
  SixthOptions,
  SeventhOptions,
  NinethOptions,
  TenthOptions,
} from "../../constants";

const dataMap = {
  SixthScreen: {
    options: SixthOptions,
    question: "How do you feel about the\ncurrent state of your home?",
    nextScreen: "SeventhScreen",
  },
  SeventhScreen: {
    options: SeventhOptions,
    question:
      "Do you agree that the\nquality of your living space\naffects your mood?",
    nextScreen: "Eighth",
  },
  NinethScreen: {
    options: NinethOptions,
    question: "Do you have any experience with redesigning your home?",
    nextScreen: "TenthScreen",
  },
  TenthScreen: {
    options: TenthOptions,
    question: "What do you think could make redesigning your home difficult?",
    nextScreen: "Eleventh",
  },
};

const CombinedScreen = ({ navigation, route }) => {
  // Отримуємо тип екрану з параметрів (припускаємо, що передається у route.params.screenType)
  const screenType = route?.params?.screenType || "SixthScreen";

  const { options, question, nextScreen } = dataMap[screenType];
  const handleContinue = () => {
    if (dataMap[nextScreen]) {
      navigation.push("Combined", { screenType: nextScreen });
    } else {
      navigation.navigate(nextScreen);
    }
  };
  const currentIndex = ONBOARDING_SCREENS.indexOf(screenType);
  // Замість масиву — одиночне значення, або null, якщо нічого не вибрано
  const [selected, setSelected] = useState(null);

  const toggleSelect = (id) => {
    if (selected === id) {
      setSelected(null); // Зняти вибір, якщо натиснули ще раз на вже вибране
    } else {
      setSelected(id); // Вибрати інший
    }
  };
  const renderItem = ({ item }) => {
    const isSelected = selected === item.id;
    return (
      <TouchableOpacity
        style={[styles.saveButtonWrapper, isSelected && styles.selectedButton]}
        onPress={() => toggleSelect(item.id)}
      >
        <View style={styles.leftContent}>
          {item.icon}
          <Text style={[styles.saveButtonText]}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <OnboardingDots
        currentIndex={currentIndex}
        total={ONBOARDING_SCREENS.length}
      />

      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome
            name="arrow-circle-left"
            size={32}
            color="#FC632B"
            style={styles.arrow}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{question}</Text>
      </View>

      <FlatList
        data={options}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <ContinueButton onPress={handleContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCFC",
  },
  text: {
    fontSize: 32,
    fontFamily: "InstrumentSerif",
    marginLeft: 15,
    flexShrink: 1,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#444",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 70,
  },
  checkedCheckbox: {
    backgroundColor: "#FC632B",
    borderColor: "#FC632B",
  },
  saveButtonWrapper: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    backgroundColor: "white",
    paddingVertical: 25,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 1,
    width: "90%",
    marginRight: 16,
    marginLeft: 16,
  },
  selectedButton: {
    backgroundColor: "#969696", // або будь-який колір для виділення
  },
  saveButtonText: {
    fontSize: 16,
    marginLeft: 8,
    color: "#000",
    fontWeight: "bold",
  },

  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 16,
    marginLeft: 8,
    color: "#000",
    fontWeight: "bold",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 60,
  },
  arrow: {
    marginRight: 10,
  },
});

export default CombinedScreen;
