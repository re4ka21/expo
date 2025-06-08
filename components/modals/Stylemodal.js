import React, { useState, useEffect } from "react";
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

const StyleModal = ({ visible, onClose, data, onSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <AntDesign
              name="search1"
              size={24}
              color="black"
              style={styles.searchIcon}
            />
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
                onPress={() => {
                  onSelect(item.name);
                  onClose();
                }}
              >
                <ImageBackground
                  source={item.image}
                  style={styles.imageBackground}
                  imageStyle={styles.image}
                >
                  <View style={styles.overlayText}>
                    <Text
                      style={styles.itemName}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {item.name}
                    </Text>
                    {item.description && (
                      <Text
                        style={styles.itemDesc}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                      >
                        {item.description}
                      </Text>
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
  },
  modaltitle: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    marginTop: 10,
    fontFamily: "InstrumentSerif",
  },
  closeButton: {
    marginTop: 10,
    alignSelf: "center",
    marginBottom: 10,
  },
  cancel: {
    color: "#FC632B",
    fontSize: 17,
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

  overlayText: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 6,
    width: "100%",
  },

  itemName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
    width: "100%",
    flexShrink: 1,
  },

  itemDesc: {
    fontSize: 12,
    color: "#eee",
    marginTop: 2,
    width: "100%",
    flexShrink: 1,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  searchIcon: {
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    paddingVertical: 8,
  },
});
export default StyleModal;
