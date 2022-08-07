import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { View } from "react-native";
export default function AppMiniMenu() {
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  return (
    <>
      <View
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Menu
          visible={visible}
          anchor={<Text onPress={showMenu}>...</Text>}
          onRequestClose={hideMenu}
        >
          <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
          <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
          <MenuDivider />
          <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
        </Menu>
      </View>
    </>
  );
}
