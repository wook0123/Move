// 해당 코드는 React 앱의 진입점 역할을 하는 코드.

import { StrictMode } from "react"; // 엄격 모드에서 문제 빠르게 캐치
import { createRoot } from "react-dom/client"; // 렌더링 준비

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
