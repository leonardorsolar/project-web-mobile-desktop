import React from "react"
    import { StyleSheet, Text, View, Button, Alert } from "react-native"

    export default function App() {
        const handleClick = () => {
            Alert.alert("Você clicou no botão!")
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Bem-vindo!</Text>
                <Button title='Clique aqui' onPress={handleClick} />
            </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f0f0f0",
        },
        title: {
            fontSize: 24,
            color: "#333",
            marginBottom: 20,
        },
    })