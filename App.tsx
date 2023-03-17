import { ThemeProvider } from "styled-components";
import { Groups } from "./src/screens/Groups";
import { NewGroup } from "./src/screens/NewGroup";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import theme from "./src/theme";
import { StatusBar } from "react-native";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={"light-content"}
          translucent
          backgroundColor={"transparent"}
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </>
  );
}
