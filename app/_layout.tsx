import { Stack } from "expo-router";

export default function RootLayout() {
  return (<Stack>
    <Stack.Screen name="(tabs)" options={{headerShown:false }} />
  </Stack>);
}

//Inside the Rootlayout, we define the shared UI elements, which should stay consistant between all different screens.
