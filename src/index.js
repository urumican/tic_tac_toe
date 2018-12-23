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
      <Menu theme='dark'>
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

    let items = []
    for (let i = 0; i < 1000; i++) {
      items.push(<div id={"btn-" + i} style={{position:"static"}}><Popover placement="rightTop" title={'text'} content={content} trigger="click"
      getPopupContainer={function() {
        return document.getElementById('btn-' + i)
      }} style={{position: "static"}} id={"popup-"+i}>
      <Button size="small" type='primary'><Icon type='setting'/>RT</Button>
    </Popover></div>)
    }
    return (
      <div className="lab" style={{overflow:"scroll", display: "flex", height:500}}>
        {items}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));