import React from 'react';
import ReactHookRedux from 'react-hooks-redux';
import RouterConfig from './routes'
import ErrorBoundary from '@pages/ErrorCatch'

import './App.scss';
import './mixin.scss';
// 通过 ReactHookRedux 获得 Provider 组件和一个 sotre 对象
export const { Provider, store } = ReactHookRedux({
  isDev: true, // 打印日志
  initialState: {
    "appName": "react-hooks-share"
  },
  middleware: []
})

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ErrorBoundary>
          <RouterConfig />
        </ErrorBoundary>
      </Provider>
    </div>
  );
}

export default App;
