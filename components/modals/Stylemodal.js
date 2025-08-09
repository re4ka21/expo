import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  ImageBackground,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedStyle } from "../../redux/ModalSelectionSlice";

const StyleModal = ({ visible, onClose, data, onSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.modalSelection.selectedStyle);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (name) => {
    dispatch(setSelectedStyle(name));
    if (onSelect) onSelect(name); 
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.modaltitle}>
            <Text style={styles.title}>Select style</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.cancel}>cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchWrapper}>
            <AntDesign name="search1" size={20} color="#333" />
            <TextInput
              placeholder="Style or association"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={styles.searchInput}
              placeholderTextColor="#888"
            />
          </View>
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.name}
            numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => handleSelect(item.name)}
              >
                <ImageBackground
                  source={item.image}
                  style={styles.imageBackground}
                  imageStyle={styles.image}
                >
                  <View style={styles.overlayText}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    {item.description && (
                      <Text style={styles.itemDesc} numberOfLines={2}>
                        {item.description}
                      </Text>
                    )}
                    {item.name === selected && (
                      <AntDesign
                        name="checkcircle"
                        size={20}
                        color="#FC632B"
                        style={styles.checkIcon}
                      />
                    )}
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#00000099",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: 50,
    backgroundColor: "white",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    width: "100%",
    maxHeight: "100%",
    flex: 1,
  },
  modaltitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: "InstrumentSerif",
  },
  closeButton: {
    marginTop: 5,
  },
  cancel: {
    color: "#FC632B",
    fontSize: 16,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    marginLeft: 8,
    color: "#000",
  },
  row: {
    flex: 1,
  },
  item: {
    width: "50%",
    aspectRatio: 1,
    paddingRight: 1.5,
    paddingVertical: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    borderRadius: 10,
  },
  overlayText: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 6,
  },
  itemName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  itemDesc: {
    fontSize: 12,
    color: "#ddd",
  },
  checkIcon: {
    position: "absolute",
    top: 6,
    right: 6,
  },
});

export default StyleModal;
