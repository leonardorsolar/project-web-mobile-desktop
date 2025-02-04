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

### Start2:

1- Navegue até a pasta 2-meu-projeto-react e dentro dela digite no terminal: code .
2- instalar as dependências. no terminal digite: npm install
3- Dentro da pasta da aplicação, digite no terminal: npm run dev

### Passos para implementação:

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
