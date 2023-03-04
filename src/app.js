import React from 'react';
import { createRoot } from 'react-dom/client';
import WebsiteLayout from './components/WebsiteLayout';


const App = () => (
    <WebsiteLayout/>
);

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
