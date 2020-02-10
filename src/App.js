import React,{Component} from 'react'
import {} from 'antd'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'
import {Switch,Route} from 'react-router-dom'


export default class App extends Component{
    render(){
        return(
            <Switch>
                <Route path="/admin" component={Admin}/>
                <Route path="/login" component={Login}/>
            </Switch>
        )
    }
}