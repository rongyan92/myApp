import React from 'react';
import './App.css';
import { BrowserRouter , Route, Switch,Redirect} from 'react-router-dom';

// 导入semanticUI样式
import 'semantic-ui-css/semantic.min.css'
// 按需导入组件
import { Button } from 'semantic-ui-react'



function Login(){
  return <div>
    <Button primary>点击</Button>
  </div>
}

function Home (){
  return <div>首页</div>
}

function App() {
  return (
    <BrowserRouter>
      {/* 路由映射 */}
      <Switch>
      <Route path='/login' component={Login}></Route>
      <Route path='/home' component={Home}></Route>
      <Redirect from='/' to='/login'></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
