import { FontAwesome5, Octicons } from "@expo/vector-icons";
export const Icons = {
  Home: (props) => <Octicons name="home" size={20} {...props} />,
  Discover: (props) => <FontAwesome5 name="compass" size={20} {...props} />,
  Saved: (props) => <FontAwesome5 name="bookmark" size={20} {...props} />,
  Profile: (props) => <FontAwesome5 name="user" size={20} {...props} />,
};
