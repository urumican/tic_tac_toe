import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu, Icon, Button, Dropdown, Select, Popover  } from 'antd';

const SubMenu = Menu.SubMenu;
const Option = Select.Option

class App extends React.Component {
  state = {
    collapsed: true,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  handleChange = (value)=> {
    console.log(`selected ${value}`);
  }

  getMenu = () => {
    return (
      <Menu>
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </Menu>
    )
  }

  getContent = () => {
    let menu = this.getMenu()
    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <Button style={{ marginLeft: 8 }}>
          Button <Icon type="down" />
        </Button>
      </Dropdown>
    )
  }

  render() {
    let content = this.getContent()

    return (
      <div>
        <Popover placement="rightTop" title={'text'} content={content} trigger="click">
          <Button>RT</Button>
        </Popover>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));