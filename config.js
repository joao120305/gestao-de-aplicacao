// Configuração do projeto Firebase "gestao-de-aplicacoes"
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDAwRcSlIF7ZqoXrs6hUJldkN1c-LoIj9A",
  authDomain: "gestao-de-aplicacoes.firebaseapp.com",
  projectId: "gestao-de-aplicacoes",
  storageBucket: "gestao-de-aplicacoes.firebasestorage.app",
  messagingSenderId: "270145944999",
  appId: "1:270145944999:web:54a6370af325bbcf5b0a82"
};

// Login: "carlos" + empresa "agrodrone" vira "carlos.agrodrone@droneagro.app"
// O administrador é "admin@droneagro.app" (o mesmo nas regras do Firestore)
const DOMINIO_LOGIN = "droneagro.app";

// Leitura de notas com IA (Firebase AI Logic > Gemini Developer API).
// O app tenta os modelos nesta ordem e usa o primeiro que estiver disponível.
const GEMINI_MODELOS = ["gemini-3.1-flash-lite", "gemini-2.5-flash-lite", "gemini-2.5-flash"];
