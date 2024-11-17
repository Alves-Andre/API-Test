
# **Testes Automatizados da API de Piadas**

Este projeto realiza testes automatizados na API de piadas localizada em `https://official-joke-api.appspot.com/random_joke`. Os testes foram desenvolvidos utilizando o Cypress, com geração de relatórios através da biblioteca **Mochawesome**, e seguem boas práticas para garantir a qualidade da API.

---

## **Requisitos**
- Node.js (versão 14 ou superior)
- Cypress (instalado no projeto)
- Mochawesome (para geração de relatórios)

---

## **Instalação**
1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd <diretorio-do-projeto>
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

---

## **Configuração**
Este projeto utiliza um arquivo `cypress.env.json` para armazenar variáveis de ambiente, incluindo a URL do endpoint da API. Certifique-se de criar esse arquivo no diretório raiz com o seguinte conteúdo:

```json
{
  "jokesApiUrl": "https://official-joke-api.appspot.com/random_joke"
}
```

---

## **Execução dos Testes**
- Para executar os testes no modo interativo:
  ```bash
  npx cypress open
  ```
- Para executar os testes no modo headless:
  ```bash
  npx cypress run --spec "cypress/e2e/api-tests.cy.js" --reporter mochawesome
  ```

Após a execução no modo headless, um relatório será gerado na pasta `mochawesome-report`.

---

## **Estrutura dos Testes**
Os testes estão localizados no arquivo `cypress/e2e/api-tests.cy.js`. Cada cenário é tratado de forma independente em blocos `it`, garantindo organização e clareza.

---

## **Cenários Testados**

### **1. Verificar se o corpo da resposta está no formato JSON válido**
- **Objetivo**: Certificar que a resposta está em formato JSON válido.
- **Validações**:
  - O cabeçalho `Content-Type` deve incluir `application/json`.
  - O corpo da resposta deve ser parseável como JSON.

---

### **2. Verificar a presença e o tipo dos campos obrigatórios**
- **Objetivo**: Garantir que a API retorna todos os campos esperados e que os tipos de dados estão corretos.
- **Validações**:
  - Campos obrigatórios: `type`, `setup`, `punchline`, `id`.
  - Tipos esperados:
    - `type`: `string` (não vazio)
    - `setup`: `string` (não vazio)
    - `punchline`: `string` (não vazio)
    - `id`: `number`

---

### **3. Verificar se os IDs são únicos em 100 requisições**
- **Objetivo**: Assegurar que cada piada retornada tenha um ID único.
- **Validações**:
  - IDs devem ser únicos em 100 requisições consecutivas.

---

## **Estrutura do Projeto**
```
├── cypress
│   ├── e2e
│   │   └── api-tests.cy.js  # Arquivo principal com os testes
│   ├── support
│   └── fixtures
├── mochawesome-report        # Pasta com relatórios gerados (após execução)
├── cypress.env.json          # Configuração das variáveis de ambiente
├── package.json              # Dependências e scripts
└── README.md                 # Este arquivo
```
