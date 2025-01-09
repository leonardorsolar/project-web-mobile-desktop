Aqui está um guia passo a passo detalhado mostrando a estrutura de diretórios e como criar os projetos com base no mesmo código:

---

git
resumo:
react -> npm run dev
react native -> npm start
electron -> npm start

## **1. Criar uma página simples com HTML, CSS e JavaScript**

### Diretório do projeto:

```
meu-projeto-html/
├── index.html
├── style.css
└── script.js
```

### Passos:

1. **Crie a pasta do projeto:**

    ```bash
    mkdir meu-projeto-html
    cd meu-projeto-html
    ```

2. **Adicione os arquivos:**

    **`index.html`**

    ```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Página Simples</title>
            <link rel="stylesheet" href="style.css" />
        </head>
        <body>
            <div id="app">
                <h1>Bem-vindo!</h1>
                <button id="btn">Clique aqui</button>
            </div>
            <script src="script.js"></script>
        </body>
    </html>
    ```

    **`style.css`**

    ```css
    body {
        font-family: Arial, sans-serif;
        text-align: center;
        background-color: #f0f0f0;
    }

    h1 {
        color: #333;
    }

    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
    ```

    **`script.js`**

    ```javascript
    document.getElementById("btn").addEventListener("click", () => {
        alert("Você clicou no botão!")
    })
    ```

3. Abra o arquivo `index.html` no navegador para visualizar o resultado.

---

## **2. Criar um projeto React.js com Vite**

### Diretório do projeto:

```
meu-projeto-react/
├── node_modules/
├── public/
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
├── package.json
├── vite.config.js
└── index.html
```

### Passos:

1. **Crie o projeto com Vite:**

    ```bash
    npm create vite@latest meu-projeto-react --template react
    cd meu-projeto-react
    npm install
    ```

2. **Edite os arquivos do projeto:**

    **`src/App.jsx`**

    ```jsx
    import React from "react"
    import "./App.css"

    function App() {
        const handleClick = () => {
            alert("Você clicou no botão!")
        }

        return (
            <div id='app'>
                <h1>Bem-vindo!</h1>
                <button onClick={handleClick}>Clique aqui</button>
            </div>
        )
    }

    export default App
    ```

    **`src/App.css`**

    ```css
    body {
        font-family: Arial, sans-serif;
        text-align: center;
        background-color: #f0f0f0;
    }

    h1 {
        color: #333;
    }

    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
    ```

3. Inicie o servidor:
    ```bash
    npm run dev
    ```

---

Limpar o Cache do NPM

Às vezes, o cache do NPM pode causar problemas. Limpe-o com o comando:

## npm cache clean --force

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

### Passos:

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

## **4. Criar um projeto Electron**

### Diretório do projeto:

```
meu-projeto-electron/
├── node_modules/
├── main.js
├── index.html
├── style.css
├── script.js
├── package.json
```

### Passos:

1. **Configure o projeto Electron:**

    ```bash
    mkdir meu-projeto-electron
    cd meu-projeto-electron
    npm init -y
    npm install electron --save-dev
    ```

2. **Adicione os arquivos:**

    **`main.js`**

    ```javascript
    const { app, BrowserWindow } = require("electron")

    let mainWindow

    app.on("ready", () => {
        mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
            },
        })

        mainWindow.loadFile("index.html")
    })
    ```

    Copie os arquivos `index.html`, `style.css`, e `script.js` da etapa 1 para o mesmo diretório.

3. **Atualize o `package.json`:**
   Adicione o seguinte:

    ```json
    "main": "main.js",
    "scripts": {
      "start": "electron ."
    }
    ```

4. Inicie o projeto:
    ```bash
    npm start
    ```

---

Esses passos garantirão que você tenha a mesma funcionalidade em diferentes ambientes: web, React.js, mobile e desktop!
