import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import UniversalButton from "../components/ContinueButtons/UniversalButton";
import { LinearGradient } from "expo-linear-gradient";
const { width } = Dimensions.get("window");
const topLabels = ["SAVE 40%", "POPULAR", "BEST VALUE"];

const PayScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.topSection}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="closecircle"
            size={28}
            color="#FC632B"
            style={styles.back}
          />
        </TouchableOpacity>

        <Image
          source={require("../assets/images/photo1.png")}
          style={styles.photoone}
          resizeMode="contain"
        />

        <Image
          source={require("../assets/images/photo2.png")}
          style={styles.phototwo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.middleSection}>
        <Text style={styles.text}>Instant remodel with Unlimited Access</Text>

        <View style={styles.carouselWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselRow}
          >
            {["Block A", "Block B", "Block C"].map((item, index) => (
              <View key={index} style={styles.carouselItem}>
                <AntDesign
                  name="check"
                  size={24}
                  color="black"
                  style={{ marginLeft: 8 }}
                />
                <Text style={styles.carouselText}>{item}</Text>
              </View>
            ))}
          </ScrollView>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.carouselRow, { marginTop: 10 }]}
          >
            {["Box 1", "Box 2", "Box 3"].map((item, index) => (
              <View key={index} style={styles.carouselItem}>
                <AntDesign
                  name="check"
                  size={24}
                  color="black"
                  style={{ marginLeft: 8 }}
                />
                <Text style={styles.carouselText}>{item}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.toptextContainer}>
        {topLabels.map((label, index) => (
          <Text
            key={index}
            style={[
              styles.toptext,
              selectedIndex === index && styles.activeToptext,
            ]}
          >
            {label}
          </Text>
        ))}
      </View>

      <View style={styles.bottomBlocksContainer}>
        {[
          {
            title: "1",
            description: "month",
            money: "23 $/m",
            pay: "only 6.9 $/w",
          },
          {
            title: "1",
            description: "week",
            money: "23 $/m",
            pay: "11.99 $/w",
          },
          {
            title: "1",
            description: "year",
            money: "23 $/m",
            pay: "only 1.53 $/w",
          },
        ].map((item, index) => {
          const isSelected = selectedIndex === index;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedIndex(index)}
              activeOpacity={0.8}
            >
              {isSelected ? (
                <LinearGradient
                  colors={["#F382D930", "#FACEBE20", "#FFB78655"]}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  style={styles.gradientBorder}
                >
                  <LinearGradient
                    colors={["#FFFFFF", "#FFF1E8", "#FFE3D5"]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={styles.innerGradientBlock}
                  >
                    <Text style={styles.bottomBlockTitle}>{item.title}</Text>
                    <Text style={styles.bottomBlockDescription}>
                      {item.description}
                    </Text>
                    <Text style={styles.bottomBlockmoney}>{item.money}</Text>
                    <Text style={styles.bottomBlockpay}>{item.pay}</Text>
                  </LinearGradient>
                </LinearGradient>
              ) : (
                <View style={styles.bottomBlock}>
                  <Text style={styles.bottomBlockTitle}>{item.title}</Text>
                  <Text style={styles.bottomBlockDescription}>
                    {item.description}
                  </Text>
                  <Text style={styles.bottomBlockmoney}>{item.money}</Text>
                  <Text style={styles.bottomBlockpay}>{item.pay}</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={styles.lasttext}>
        <AntDesign name="lock" size={24} color="black" /> Secured with Apple
        Store. Cancel anytime.
      </Text>

      <UniversalButton bottom={-22} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingTop: 40,
    marginTop: 20,
  },
  back: {
    marginTop: 10,
  },
  photoone: {
    position: "absolute",
    left: 128,
    zIndex: 2,
    top: 10,
  },
  phototwo: {
    position: "absolute",
    left: 69,
    zIndex: 1,
    top: 10,
  },
  text: {
    marginTop: 80,
    fontSize: 40,
    fontFamily: "InstrumentSerif",
    textAlign: "center",
  },
  middleSection: {
    paddingTop: 10,
  },
  carouselWrapper: {
    marginTop: 50,
    width: "100%",
  },
  carouselRow: {
    paddingHorizontal: 20,
  },
  carouselItem: {
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.55,
    height: 43,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginRight: 15,
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#ddd",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  activeToptext: {
    backgroundColor: "#FC632B",
    color: "#fff",
    borderColor: "#FC632B",
  },
  carouselText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomBlocksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.6 + 140,
    marginLeft: 15,
  },
  toptextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.6 + 120,
    marginLeft: 30,
    marginTop: 50,
    marginBottom: 20,
  },
  toptext: {
    padding: 3,
    color: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 13,
  },
  bottomBlock: {
    width: 120,
    height: 200,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#fff",
    padding: 10,
  },

  gradientBorder: {
    width: 120,
    height: 200,
    borderRadius: 13,
    padding: 2,
  },

  innerGradientBlock: {
    flex: 1,
    borderRadius: 11,
    justifyContent: "space-between",
    padding: 10,
  },

  innerBlock: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 11,
    justifyContent: "space-between",
    padding: 10,
  },
  bottomBlockTitle: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
  },
  bottomBlockDescription: {
    fontSize: 19,
    textAlign: "center",
    marginTop: 5,
    paddingHorizontal: 5,
  },
  bottomBlockmoney: {
    color: "gray",
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
    paddingHorizontal: 5,
  },
  bottomBlockpay: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 30,
    paddingHorizontal: 5,
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: "#EAE8E8",
  },
  lasttext: {
    fontSize: 17,
    textAlign: "center",
    marginTop: 50,
    fontFamily: "bold",
  },
});

export default PayScreen;
