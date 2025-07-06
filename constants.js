import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export const room = [
  { name: "Living room" },
  { name: "Bedroom" },
  { name: "Bathroom" },
  { name: "Kitchen" },
  { name: "Dining room" },
  { name: "Attic" },
  { name: "Study" },
  { name: "Kids room" },
  { name: "Formal dining room" },
  { name: "Home theatre" },
  { name: "Balcony" },
  { name: "Workshop" },
  { name: "Gym" },
  { name: "Coffee shop" },
  { name: "Restaurant" },
];
export const rooms = [
  {
    name: "Soft",
    description: "Green, sunny, colorful.",
  },
  {
    name: "Balanced",
    description: "Green, sunny, colorful.",
  },
  {
    name: "Strong",
    description: "Green, sunny, colorful.",
  },
  {
    name: "Extreme",
    description: "Green, sunny, colorful.",
  },
];
export const stylesList = [
  {
    name: "Artdeco",
    image: require("./assets/images/Artdeco.png"),
    description: "Bright, airy, clean",
  },
  {
    name: "Bauhaus",
    image: require("./assets/images/Bauhaus.png"),
    description: "Minimal, clear, purposeful",
  },
  {
    name: "Futuristic",
    image: require("./assets/images/Futuristic.png"),
    description: "Bright, airy, clean",
  },
  {
    name: "Japanese",
    image: require("./assets/images/Japanese.png"),
    description: "Bright, airy, clean",
  },
  {
    name: "Scandinavian",
    image: require("./assets/images/Scandinavian.png"),
    description: "Bright, airy, clean",
  },
  {
    name: "Tropical",
    image: require(".//assets/images/Tropical.png"),
    description: "Green, sunny, colorful.",
  },
];
export const styleImages = {
  Artdeco: require("./assets/images/Artdeco.png"),
  Bauhaus: require("./assets/images/Bauhaus.png"),
  Futuristic: require("./assets/images/Futuristic.png"),
  Japanese: require("./assets/images/Japanese.png"),
  Scandinavian: require("./assets/images/Scandinavian.png"),
  Tropical: require(".//assets/images/Tropical.png"),
};
export const ONBOARDING_SCREENS = [
  "DesiredResultsScreen",
  "SelectRoomsScreen",
  "LivingRoomStatsScreen",
  "CurrentHomeFeelScreen",
  "SpaceAffectsMoodScreen",
  "EighthScreen",
  "RedesignExperienceScreen",
  "RedesignChallengesScreen",
  "EleventhScreen",
  "FinalRoomsScreen",
  "ThirteenthScreen",
  "StyleRecommendationScreen",
];
export const DesiredResultsScreen = [
  {
    id: 1,
    icon: <AntDesign name="star" size={24} color="black" />,
    text: "Get inspired by design ideas",
  },
  {
    id: 2,
    icon: <AntDesign name="cloud" size={24} color="black" />,
    text: "Just curious to see how my\nspace could look",
  },
  {
    id: 3,
    icon: <Entypo name="home" size={24} color="black" />,
    text: "Plan renovations",
  },
  {
    id: 4,
    icon: <MaterialCommunityIcons name="sofa" size={24} color="black" />,
    text: "Find and purchase products",
  },
  {
    id: 5,
    icon: <FontAwesome6 name="face-flushed" size={24} color="black" />,
    text: "Other",
  },
];
export const SelectRoomsScreen = [
  {
    id: 1,
    icon: <MaterialCommunityIcons name="sofa" size={24} color="black" />,
    text: "Living room",
  },
  {
    id: 2,
    icon: <MaterialCommunityIcons name="chef-hat" size={24} color="black" />,
    text: "kitchen",
  },
  {
    id: 3,
    icon: <MaterialIcons name="dining" size={24} color="black" />,
    text: "Dining room",
  },
  {
    id: 4,
    icon: <FontAwesome5 name="bath" size={24} color="black" />,
    text: "Bathroom",
  },
  {
    id: 5,
    icon: <FontAwesome name="bed" size={24} color="black" />,
    text: "Bedromm",
  },
  {
    id: 6,
    icon: <FontAwesome6 name="face-flushed" size={24} color="black" />,
    text: "other",
  },
];
export const carouselData = [
  { id: "1", image: require("./assets/images/Artdeco.png") },
  { id: "2", image: require("./assets/images/Bauhaus.png") },
  { id: "3", image: require("./assets/images/Japanese.png") },
  { id: "4", image: require("./assets/images/Tropical.png") },
  { id: "5", image: require("./assets/images/Scandinavian.png") },
];
export const CurrentHomeFeelScreen = [
  {
    id: 1,
    icon: <FontAwesome5 name="sad-cry" size={24} color="black" />,
    text: "Frustrated and unhappy",
  },
  {
    id: 2,
    icon: <Entypo name="emoji-sad" size={24} color="black" />,
    text: "Needs improvement",
  },
  {
    id: 3,
    icon: <Entypo name="emoji-neutral" size={24} color="black" />,
    text: "Okay but could be better",
  },
  {
    id: 4,
    icon: <Entypo name="emoji-happy" size={24} color="black" />,
    text: "I like it, but it needs updates",
  },
  {
    id: 5,
    icon: <FontAwesome6 name="grin-hearts" size={24} color="black" />,
    text: "I absolutely love my home!",
  },
];
export const SpaceAffectsMoodScreen = [
  {
    id: 1,
    icon: <AntDesign name="like1" size={24} color="black" />,
    text: "Fully agree",
  },
  {
    id: 2,
    icon: <MaterialCommunityIcons name="hand-okay" size={24} color="black" />,
    text: "Partially agree",
  },
  {
    id: 3,
    icon: <Entypo name="emoji-neutral" size={24} color="black" />,
    text: "Somewhat disagree",
  },
  {
    id: 4,
    icon: <AntDesign name="dislike1" size={24} color="black" />,
    text: "Fully disagree",
  },
];
export const RedesignExperienceScreen = [
  {
    id: 1,
    icon: <AntDesign name="like1" size={24} color="black" />,
    text: "Yes",
  },
  {
    id: 2,
    icon: <AntDesign name="dislike1" size={24} color="black" />,
    text: "No",
  },
  {
    id: 3,
    icon: <Entypo name="emoji-flirt" size={24} color="black" />,
    text: "I wanted to do it, but didn’t date",
  },
];
export const RedesignChallengesScreen = [
  {
    id: 1,
    icon: <FontAwesome5 name="money-bill-wave" size={24} color="black" />,
    text: "Going over budget",
  },
  {
    id: 2,
    icon: (
      <MaterialCommunityIcons name="dance-ballroom" size={24} color="black" />
    ),
    text: "Not achieving the desired look",
  },
  {
    id: 3,
    icon: <MaterialIcons name="timer" size={24} color="black" />,
    text: "The process taking too long",
  },
  {
    id: 4,
    icon: <Entypo name="emoji-flirt" size={24} color="black" />,
    text: "Not being able to visualize the outcome",
  },
  {
    id: 5,
    icon: <FontAwesome6 name="sad-cry" size={24} color="black" />,
    text: "Lack of design expertise",
  },
  {
    id: 6,
    icon: <Entypo name="emoji-neutral" size={24} color="black" />,
    text: "Other",
  },
];
export const testimonials = [
  {
    id: "1",
    text: "Like Having a Pro at home",
    maintext:
      "Recently started remodeling our bedroom and I was stuck for ideas. Tried this app out of curiosity and I'm so glad I did! It's like having a professional help.",
    name: "Our user",
  },
  {
    id: "2",
    text: "Like Having a Pro at home",
    maintext:
      "Recently started remodeling our bedroom and I was stuck for ideas. Tried this app out of curiosity and I'm so glad I did! It's like having a professional help.",
    name: "Our user",
  },
  {
    id: "3",
    text: "Like Having a Pro at home",
    maintext:
      "Recently started remodeling our bedroom and I was stuck for ideas. Tried this app out of curiosity and I'm so glad I did! It's like having a professional help.",
    name: "Our user",
  },
];
export const FinalRoomsScreen = [
  {
    id: 1,
    icon: <AntDesign name="star" size={24} color="black" />,
    text: "Interior design",
  },
  {
    id: 2,
    icon: <AntDesign name="cloud" size={24} color="black" />,
    text: "Exterior design",
  },
  {
    id: 3,
    icon: <Entypo name="home" size={24} color="black" />,
    text: "Upgrade furniture",
  },
  {
    id: 4,
    icon: <MaterialCommunityIcons name="sofa" size={24} color="black" />,
    text: "Upgrade walls",
  },
  {
    id: 5,
    icon: <FontAwesome6 name="face-flushed" size={24} color="black" />,
    text: "Upgrade flooring",
  },
  {
    id: 6,
    icon: <FontAwesome6 name="face-flushed" size={24} color="black" />,
    text: "Refresh colors",
  },
  {
    id: 7,
    icon: <FontAwesome6 name="face-flushed" size={24} color="black" />,
    text: "Fill empty space",
  },
  {
    id: 8,
    icon: <FontAwesome6 name="face-flushed" size={24} color="black" />,
    text: "Remove objects",
  },
  {
    id: 9,
    icon: <FontAwesome6 name="face-flushed" size={24} color="black" />,
    text: "Other",
  },
];
