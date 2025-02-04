## **3. Criar um projeto mobile com Expo React Native**

### Diretório do projeto:

```
meu-projeto-mobile/
├── App.js
├── node_modules/
├── package.json
├── metro.config.js
└── app.json
```

### Start3:

1- Navegue até a pasta 3-meu-projeto-mobile e dentro dela digite no terminal: code .
2- instalar as dependências. no terminal digite: npm install
3- Dentro da pasta da aplicação, digite no terminal: nnpm start

### Passos para implementação:

1. **Crie o projeto com Expo:**

    ```bash
    npx create-expo-app meu-projeto-mobile
    cd meu-projeto-mobile
    ```

2. **Edite o arquivo `App.js`:**

    **`App.js`**

    ```javascript
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
    ```

3. Inicie o projeto:
    ```bash
    npm start
    ```

---
