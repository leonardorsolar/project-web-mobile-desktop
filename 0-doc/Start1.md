## **1. Criar uma página simples com HTML, CSS e JavaScript**

### Diretório do projeto:

```
meu-projeto-html/
├── index.html
├── style.css
└── script.js
```

### Start:

1-clique no arquivo index.html em 1-meu-projeto-html/index.html

### Passos para implementação:

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
