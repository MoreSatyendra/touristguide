import { FontAwesome5, Octicons } from "@expo/vector-icons";
export const Icons = {
  index: (props) => <Octicons name="home" size={20} {...props} />,
  discover: (props) => <FontAwesome5 name="compass" size={20} {...props} />,
  saved: (props) => <FontAwesome5 name="bookmark" size={20} {...props} />,
  profile: (props) => <FontAwesome5 name="user" size={20} {...props} />,
};
