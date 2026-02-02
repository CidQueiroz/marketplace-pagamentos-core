import { useEffect, useState } from 'react';
import getAxios from './utils/axiosConfig';

function App() {
  const [status, setStatus] = useState('Testando conexão...');

  useEffect(() => {
    // Tenta bater numa rota padrão do Spring (ou vai dar 404, mas responde)
    getAxios().get('/')
      .then(() => setStatus('✅ Backend Conectado! (200 OK)'))
      .catch((err) => {
        // Se der 404 ou 401, significa que o servidor respondeu -> SUCESSO DE REDE
        if (err.response) setStatus(`✅ Backend Respondeu! (Erro ${err.response.status} esperado)`);
        // Se der Network Error, significa que não achou o servidor -> FALHA
        else setStatus('❌ Erro de Conexão: Backend fora do ar ou porta errada.');
      });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">{status}</h1>
    </div>
  );
}

export default App;