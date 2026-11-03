import {createRoot} from 'react-dom/client';
import App from './app/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('앱을 마운트할 #root 요소를 찾을 수 없습니다람쥐.');
}

createRoot(rootElement).render(<App />);
