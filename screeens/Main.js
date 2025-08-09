import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import StyleModal from "../components/modals/Stylemodal";
import SelectModal from "../components/modals/Selectmodal";
import {
  room,
  rooms,
  stylesList,
  styleImages,
} from "../constants/modalconstants";
import { useSelector, useDispatch } from "react-redux";

import {
  setSelectedStyle,
  setSelectedRoom,
  setSelectedAI,
} from "../redux/ModalSelectionSlice";
const Main = () => {
  const dispatch = useDispatch();

  const [modalVisibleRoom, setModalVisibleRoom] = useState(false);
  const [modalVisibleAI, setModalVisibleAI] = useState(false);
  const [modalVisibleStyle, setModalVisibleStyle] = useState(false);
  const [selectedPhotoUri, setSelectedPhotoUri] = useState(null);

  const navigation = useNavigation();

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access camera is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedPhotoUri(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedPhotoUri(result.assets[0].uri);
    }
  };
  const selectedRoom = useSelector(
    (state) => state.modalSelection.selectedRoom
  );
  const selectedAI = useSelector((state) => state.modalSelection.selectedAI);
  const selectedStyle = useSelector(
    (state) => state.modalSelection.selectedStyle
  );
  const handleSelectStyle = (style) => {
    dispatch(setSelectedStyle(style));
    setModalVisibleStyle(false);
  };

  const handleSelectRoom = (room) => {
    dispatch(setSelectedRoom(room));
    setModalVisibleRoom(false);
  };

  const handleSelectAI = (ai) => {
    dispatch(setSelectedAI(ai));
    setModalVisibleAI(false);
  };
  const selectedStyleObj = stylesList.find(
    (item) => item.name === selectedStyle
  );

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Instant remodel</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MainStack", { screen: "Pay" })}
        >
          <Text style={styles.buttonText}>Upgrade </Text>
        </TouchableOpacity>
      </View>
      {selectedPhotoUri ? (
        <Image
          source={{ uri: selectedPhotoUri }}
          style={[styles.selectphotouser, { resizeMode: "cover" }]}
        />
      ) : (
        <ImageBackground
          source={require("../assets/images/background.png")}
          style={styles.selectphoto}
        >
          <Image
            source={require("../assets/images/intertwo.png")}
            style={styles.phototwo}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/images/interone.png")}
            style={styles.photoone}
            resizeMode="contain"
          />
          <View style={styles.textphoto}>
            <Text style={styles.maintext}>Select a photo</Text>
            <Text style={styles.secondtext}>
              Try to include all the important{"\n"}angles in a well-lit
              environment
            </Text>

            <View style={styles.buttons}>
              <TouchableOpacity style={styles.buttonphoto} onPress={openCamera}>
                <Text style={styles.symbol}>
                  <Feather name="camera" size={24} color="black" />
                </Text>
                <Text style={styles.photoText}> from camera</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonphoto}
                onPress={openGallery}
              >
                <Text style={styles.symbol}>
                  <MaterialIcons name="photo-library" size={24} color="black" />
                </Text>
                <Text style={styles.photoText}> from gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      )}
      <View>
        {/* Room */}
        <TouchableOpacity onPress={() => setModalVisibleRoom(true)}>
          <View style={styles.pickerWrapper}>
            <Text style={styles.label}>Room</Text>
            <TouchableOpacity
              style={styles.selector}
              onPress={() => setModalVisibleRoom(true)}
            >
              <View style={styles.roomicondown}>
                <AntDesign name="down" size={20} color="black" />
              </View>
              <Text style={styles.selectorText}>
                {selectedRoom || "Select Room"}
              </Text>
            </TouchableOpacity>
            <SelectModal
              visible={modalVisibleRoom}
              onClose={() => setModalVisibleRoom(false)}
              data={room}
              onSelect={handleSelectRoom}
              selected={selectedRoom}
            />
          </View>
        </TouchableOpacity>
        {/* AI Intervention */}
        <TouchableOpacity onPress={() => setModalVisibleAI(true)}>
          <View style={styles.pickerWrapper}>
            <Text style={styles.label}>AI intervention</Text>
            <TouchableOpacity
              style={styles.selector}
              onPress={() => setModalVisibleAI(true)}
            >
              <Text style={styles.selectorText}>
                {selectedAI || "Select Level"}
              </Text>
            </TouchableOpacity>
            <View style={styles.aiicondown}>
              <AntDesign name="down" size={20} color="black" />
            </View>
            <SelectModal
              visible={modalVisibleAI}
              onClose={() => setModalVisibleAI(false)}
              data={rooms}
              onSelect={handleSelectAI}
              selected={selectedAI}
            />
          </View>
        </TouchableOpacity>
        {/* Style */}
        <View style={styles.pickerWrapperphoto}>
          <TouchableOpacity onPress={() => setModalVisibleStyle(true)}>
            {(selectedStyle && styleImages[selectedStyle] && (
              <Image
                source={styleImages[selectedStyle]}
                style={styles.modalphoto}
                resizeMode="contain"
              />
            )) || (
              <Image
                source={require("../assets/images/Artdeco.png")}
                style={styles.modalphoto}
                resizeMode="contain"
              />
            )}
            <TouchableOpacity
              style={styles.selector}
              onPress={() => setModalVisibleStyle(true)}
            >
              <Text style={styles.selectorText}>
                {selectedStyle || "Select Style"}
              </Text>
            </TouchableOpacity>
            <View style={styles.styleicondown}>
              <AntDesign name="down" size={20} color="black" />
            </View>
            <StyleModal
              visible={modalVisibleStyle}
              onClose={() => setModalVisibleStyle(false)}
              data={stylesList}
              onSelect={handleSelectStyle}
            />
            {selectedStyleObj && selectedStyleObj.description ? (
              <Text style={styles.styleDescription}>
                {selectedStyleObj.description}
              </Text>
            ) : (
              <Text style={styles.styleDescription}>Bright, airy, clean</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomButtonWrapper}>
        {selectedPhotoUri && (
          <TouchableOpacity
            style={styles.buttonredesign}
            onPress={() => navigation.navigate("Loading")}
          >
            <View style={styles.buttonredesignContent}>
              <Feather
                name="star"
                size={22}
                color="white"
                style={styles.star}
              />
              <Text style={styles.buttonredesigntext}>Redesign interior</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { flexDirection: "row", textAlign: "center" },
  text: {
    fontSize: 40,
    marginLeft: 24,
    marginTop: 43,
    fontFamily: "InstrumentSerif",
  },
  button: {
    backgroundColor: "#FC632B",
    padding: 9,
    marginLeft: 80,
    marginTop: 47,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 19,
    fontFamily: "InstrumentSerif",
    color: "white",
  },
  selectphotouser: {
    height: 400,
    overflow: "hidden",
    marginLeft: 19,
    marginTop: 28,
    marginRight: 19,
    padding: 30,
    paddingVertical: 30,
    borderRadius: 30,
  },
  selectphoto: {
    height: 300,
    overflow: "hidden",
    marginLeft: 19,
    marginTop: 28,
    marginRight: 19,
    padding: 30,
    paddingVertical: 30,
    borderRadius: 30,
  },
  phototwo: {
    marginLeft: 245,
    position: "absolute",
    zIndex: 2,
  },
  photoone: {
    marginLeft: 205,
    zIndex: 1,
    position: "absolute",
  },
  textphoto: {
    borderRadius: 20,
    padding: 10,
  },
  maintext: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 20,
  },
  secondtext: {
    color: "#fa916b",
    fontSize: 15,
  },
  buttons: {
    flexDirection: "row",
    zIndex: 10,
  },
  buttonphoto: {
    backgroundColor: "white",
    padding: 9,
    marginRight: 40,
    marginTop: 47,
    borderRadius: 10,
    paddingVertical: 20,
  },
  symbol: {
    marginLeft: 50,
    fontSize: 20,
  },
  photoText: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  pickerWrapperphoto: {
    marginTop: 16,
    position: "absolute",
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    width: 180,
    backgroundColor: "white",
    elevation: 1.5,
  },
  pickerWrapper: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    width: 180,
    backgroundColor: "white",
    marginLeft: 230,
    elevation: 1,
  },
  label: {
    fontSize: 13,
    marginTop: 10,
    marginLeft: 20,
    color: "#422508",
  },
  selector: {
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "white",
    marginHorizontal: 10,
    marginLeft: 20,
    marginBottom: 10,
  },
  roomicondown: {
    width: 17,
    height: 22,
    marginLeft: 120,
    bottom: 5,
    position: "absolute",
  },
  modalphoto: {
    width: 150,
    height: 150,
    marginLeft: 15,
    borderRadius: 20,
    marginBottom: 16,
    marginTop: 16,
  },
  styledownicon: {
    width: 17,
    height: 22,
    marginLeft: 148,
    bottom: 30,
    position: "absolute",
  },
  selectorText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  aiicondown: {
    width: 17,
    height: 22,
    marginLeft: 145,
    bottom: 15,
    position: "absolute",
  },
  styleicondown: {
    width: 17,
    height: 22,
    marginLeft: 148,
    bottom: 30,
    position: "absolute",
  },
  bottomButtonWrapper: {
    position: "absolute",
    bottom: 15,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  buttonredesign: {
    backgroundColor: "#FC632B",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    width: "92%",
  },
  buttonredesignContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonredesigntext: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  star: {
    marginRight: 10,
  },

  styleDescription: {
    fontSize: 15,
    color: "#422508",
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

export default Main;
