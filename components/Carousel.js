import { Animated, Dimensions, Image, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const Carousel = ({ data, scrollX }) => {
  return (
    <Animated.FlatList
      data={data}
      renderItem={({ item, index }) => {
        const inputRange = [
          (index - 1) * (width * 0.75 + 20),
          index * (width * 0.75 + 20),
          (index + 1) * (width * 0.75 + 20),
        ];

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.85, 1, 0.85],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.carouselItem, { transform: [{ scale }] }]}
          >
            <Image source={item.image} style={styles.carouselImage} />
          </Animated.View>
        );
      }}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width * 0.75 + 20}
      decelerationRate="fast"
      snapToAlignment="start"
      pagingEnabled={false}
      style={styles.carousel}
      contentContainerStyle={{ paddingHorizontal: (width - width * 0.75) / 2 }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}
    />
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    width: width * 0.75,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default Carousel;
