import React, { useState, useCallback, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {
  addSelectedImage,
  selectSelectedImages,
  selectStyleImages,
} from "../../redux/SelectedImagesSlice";
import AntDesign from "@expo/vector-icons/AntDesign";
import StyleModal from "../../components/modals/Stylemodal";
import SelectModal from "../../components/modals/Selectmodal";
import * as MediaLibrary from "expo-media-library";

import * as Sharing from "expo-sharing";
import { Asset } from "expo-asset";
import { room, rooms, stylesList } from "../../constants/modalconstants";
const ResultScreen = () => {
  const navigation = useNavigation();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedAI, setSelectedAI] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [modalVisibleRoom, setModalVisibleRoom] = useState(false);
  const [modalVisibleAI, setModalVisibleAI] = useState(false);
  const [modalVisibleStyle, setModalVisibleStyle] = useState(false);
  const dispatch = useDispatch();
  const selectedImages = useSelector(selectSelectedImages);
  const styleImages = useSelector(selectStyleImages);
  const selectedStyleObj = stylesList.find(
    (item) => item.name === selectedStyle
  );
  useFocusEffect(
    useCallback(() => {
      const keys = Object.keys(styleImages);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      dispatch(addSelectedImage(randomKey));
    }, [styleImages])
  );

  const cancel = () => {
    navigation.navigate("Main");
  };
  const handlePress = () => {
    navigation.replace("Result");
  };
  const saveToGallery = async () => {
    try {
      const imageModule =
        styleImages[selectedImages[selectedImages.length - 1]];
      if (!imageModule) return;

      const asset = Asset.fromModule(imageModule);
      await asset.downloadAsync();
      const localUri = asset.localUri;

      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access media library is required!");
        return;
      }

      await MediaLibrary.saveToLibraryAsync(localUri);
      alert("Saved to gallery!");
    } catch (error) {
      console.error("Error saving to gallery:", error);
      alert("Failed to save image.");
    }
  };
  const shareImage = async () => {
    try {
      const imageModule =
        styleImages[selectedImages[selectedImages.length - 1]];
      if (!imageModule) return;

      const asset = Asset.fromModule(imageModule);
      await asset.downloadAsync();
      const localUri = asset.localUri;

      const isAvailable = await Sharing.isAvailableAsync();
      if (!isAvailable) {
        alert("Sharing is not available on this device");
        return;
      }

      await Sharing.shareAsync(localUri);
    } catch (error) {
      console.error("Error sharing image:", error);
      alert("Failed to share image.");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.scrollContainer, { paddingBottom: 120 }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.title}>
          <Text style={styles.text}>New design for you</Text>
          <TouchableOpacity style={styles.button} onPress={cancel}>
            <AntDesign name="closecircle" size={21} color="#FC632B" />
          </TouchableOpacity>
        </View>
        {selectedImages.length > 0 && (
          <Image
            source={styleImages[selectedImages[selectedImages.length - 1]]}
            style={styles.resultphoto}
            resizeMode="contain"
          />
        )}
        <View style={styles.newbuttons}>
          <TouchableOpacity
            style={styles.saveButtonWrapper}
            onPress={saveToGallery}
          >
            <MaterialIcons name="add-photo-alternate" size={24} color="black" />
            <Text style={styles.saveButtonText}>Save to gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.saveButtonWrapper}
            onPress={shareImage}
          >
            <Entypo name="share-alternative" size={24} color="black" />
            <Text style={styles.saveButtonText}>Share</Text>
          </TouchableOpacity>
        </View>
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
                type="room"
                onSelect={(name) => setSelectedRoom(name)}
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
                onSelect={setSelectedAI}
                type="AI"
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
                  source={require("../../assets/images/Artdeco.png")}
                  style={styles.modalphoto}
                  resizeMode="contain"
                />
              )}
              <TouchableOpacity
                style={styles.selector}
                onPress={() => setModalVisibleStyle(true)}
              >
                <Text style={styles.selectorText}>
                  {selectedStyle || "Artdeco"}
                </Text>
              </TouchableOpacity>
              <View style={styles.styleicondown}>
                <AntDesign name="down" size={20} color="black" />
              </View>
              <StyleModal
                visible={modalVisibleStyle}
                onClose={() => setModalVisibleStyle(false)}
                data={stylesList}
                onSelect={(style) => setSelectedStyle(style)}
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

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.fixedButtonWrapper}>
        <TouchableOpacity style={styles.buttonredesign} onPress={handlePress}>
          <Text style={styles.buttonredesigntext}>retry</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    marginTop: 25,
    marginLeft: 10,
    fontSize: 30,
    fontFamily: "InstrumentSerif",
  },
  button: {
    marginTop: 25,
    paddingHorizontal: 12,
    borderRadius: 70,
  },

  resultphoto: {
    marginVertical: 20,
    borderRadius: 30,
    width: "100%",
    height: 370,
  },
  pickerWrapperphoto: {
    marginTop: 16,
    position: "absolute",
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
    marginLeft: 200,
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
    marginBottom: 12,
  },
  roomicondown: {
    width: 17,
    height: 22,
    marginLeft: 120,
    bottom: 5,
    position: "absolute",
  },
  styleicondown: {
    width: 17,
    height: 22,
    marginLeft: 148,
    bottom: 30,
    position: "absolute",
  },
  modalphoto: {
    width: 150,
    height: 150,
    marginLeft: 15,
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 10,
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
  buttonredesign: {
    backgroundColor: "#FC632B",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    width: "92%",
  },
  fixedButtonWrapper: {
    position: "absolute",
    bottom: 45,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  buttonredesigntext: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  styleDescription: {
    fontSize: 15,
    color: "#422508",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  saveButtonWrapper: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    elevation: 1,
    width: "46%",
    marginRight: 16,
  },
  saveButtonText: {
    fontSize: 16,
    marginLeft: 8,
    color: "#000",
    fontWeight: "bold",
  },
  newbuttons: {
    flexDirection: "row",
    paddingBottom: 27,
    marginBottom: 20,
    borderBottomWidth: 3,
    borderBottomColor: "#EAE8E8",
  },
});

export default ResultScreen;
