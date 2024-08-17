import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create a root
root.render(<App />); // Render your app

