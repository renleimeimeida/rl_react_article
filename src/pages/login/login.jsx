import React,{Component} from 'react'
import './css/login.less'
import logo from './img/logo.png'
import { Form, Icon, Input, Button } from 'antd';
const {Item}=Form

class Login extends Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div id="login">
                <div className="header">
                    <img src={logo} alt=""/>
                    <h1>商品管理系统</h1>
                </div>
                <div className="content">
                    <h3>用户登录</h3>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                        {getFieldDecorator('username', {
                            rules: [
                                { required: true, message: '请输入你的名字!' },
                                { min:4,message:'长度必须大于等于4'},
                                { max:12,message:'长度必须小于等于12'},
                                {pattern:/^\w+$/,message:'用户名必须是数字,字母或下划线'}
                            ],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                            />,
                        )}
                        </Item>
                        <Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }
                        ],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                            />,
                        )}
                        </Item>
                        <Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        )}
                        </Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Form.create()(Login);