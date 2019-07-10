
import React from 'react';
import './login.css';
// 按需导入组件
import { Icon ,Form ,Button ,Divider} from 'semantic-ui-react';
// import axios from 'axios';

class Login extends React.Component {
    render (){
        return <div className='login_container'>
            {/* 顶部Logo */}
            <div className='login_logo'>
                <Icon name='home' size='huge'></Icon>
            </div>
            {/* 表单区域 */}
            <div className='login_form'>
                <Form>
                    <Form.Input
                    icon='user' 
                    required 
                    size='big' 
                    iconPosition='left' 
                    name='username'
                    placeholder='请输入用户名...' 
                    />
                </Form>
                <Form>
                    <Form.Input
                    icon='lock' 
                    required 
                    size='big' 
                    iconPosition='left' 
                    name='password'
                    placeholder='请输入密码...' 
                    />
                <Button fluid primary className='login_btn'>登录</Button>
                </Form>
                {/* 第三方服务 */}
                <Divider horizontal>第三方服务</Divider>
                <div className="login-third">
                    <Icon size='large' blue name='qq'/>
                    <Icon size='large' name='rocketchat'/>
                </div>
            </div>
        </div>
    }
}

export default Login