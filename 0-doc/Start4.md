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

### Start4:

1- Navegue até a pasta 4-meu-projeto-electron e dentro dela digite no terminal: code .
2- instalar as dependências. no terminal digite: npm install
3- Dentro da pasta da aplicação, digite no terminal: nnpm start

### Passos para implementação:

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
