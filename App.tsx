import { StatusBar } from "expo-status-bar";
import React = require("react");
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { lightThemeColors } from "./ui/theme";

export default function App() {
    return (
        <ThemeProvider theme={lightThemeColors}>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto" />
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
