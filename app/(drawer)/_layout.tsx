import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <Drawer screenOptions={{headerShown:false}}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />
      <Drawer.Screen
        name="support"
        options={{
          title: "Support",
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
