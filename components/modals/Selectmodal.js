import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const SelectModal = ({ selected, visible, onClose, data, onSelect, type }) => {
  const getTitle = () => {
    switch (type) {
      case "room":
        return "Select room";
      case "AI":
        return "AI intervation";
      default:
        return "Оберіть";
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.modaltitle}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>{getTitle()}</Text>
          </View>

          <FlatList
            data={data}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  onSelect(item.name);
                  onClose();
                }}
              >
                <View style={styles.selected}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  {item.name === selected && (
                    <AntDesign
                      name="checkcircle"
                      size={24}
                      color="#FC632B"
                      style={styles.checkIcon}
                    />
                  )}
                </View>
                <Text style={styles.itemdescription}>{item.description}</Text>
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
  modaltitle: {
    flexDirection: "row",
    textAlign: "center",
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
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
  title: {
    fontWeight: "bold",
    marginLeft: 125,
    marginTop: 15,
    fontSize: 17,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
  },
  closeButton: {
    marginVertical: 15,
  },
  selected: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default SelectModal;
