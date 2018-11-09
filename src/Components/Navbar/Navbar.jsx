import React , {Component} from 'react'
import { Layout, Menu  } from 'antd'

const { Header } = Layout;

class Navbar extends Component{

    render(){
        return(
            <Header>
        <h2 style={{color: 'white'}}>TODO Firebase React </h2>
            <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }} >

               <Menu.Item key="1"></Menu.Item>
              

            </Menu>

          </Header>
        );
    }

}

export default Navbar;