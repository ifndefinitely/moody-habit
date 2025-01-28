import { Stack } from "expo-router";

// https://docs.expo.dev/develop/file-based-routing/

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false }} />
    </Stack>
  );
}
