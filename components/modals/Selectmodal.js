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
import { useDispatch, useSelector } from "react-redux";


const SelectModal = ({ visible, onClose, data, onSelect }) => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.modalSelection.selectedRoom);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Select room</Text>
            <TouchableOpacity onPress={onClose}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={data}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  if (onSelect) onSelect(item.name); 
                  onClose();
                }}
              >
                <View style={styles.row}>
                  <Text style={styles.itemText}>{item.name}</Text>
                  {item.name === selected && (
                    <AntDesign name="checkcircle" size={20} color="#FC632B" />
                  )}
                </View>
                {item.description && (
                  <Text style={styles.description}>{item.description}</Text>
                )}
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
    backgroundColor: "#00000088",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "80%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 16,
  },
  description: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
});

export default SelectModal;
