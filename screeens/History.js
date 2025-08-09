
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  clearSelectedImages,
  selectSelectedImages,
  selectStyleImages,
} from "../redux/SelectedImagesSlice";

const App = () => {
  const dispatch = useDispatch();
  const selectedImages = useSelector(selectSelectedImages);
  const styleImages = useSelector(selectStyleImages);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Remodel history</Text>
      <View style={styles.imagesWrapper}>
        {selectedImages.map((key, index) => (
          <Image
            key={index}
            source={styleImages[key]}
            style={styles.images}
            resizeMode="contain"
          />
        ))}
      </View>

      <TouchableOpacity
        onPress={() => dispatch(clearSelectedImages())}
        style={styles.button}
      >
        <Text style={styles.buttonText}>clear</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  imagesWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  images: {
    width: "50%",
    height: 180,
    marginBottom: 15,
    borderRadius: 50,
  },
  title: {
    fontFamily: "InstrumentSerif",
    marginBottom: 20,
    fontSize: 40,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "red",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default App;
