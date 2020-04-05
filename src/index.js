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
    console.log('getMenu')
    return (
      <Menu theme='dark'>
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </Menu>
    )
  }

  getContent = () => {
    let menu = this.getMenu()
    console.log('getContent')
    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <Button style={{ marginLeft: 8 }}>
          Button <Icon type="down" />
        </Button>
      </Dropdown>
    )
  }

  componentDidMount = () => {
    console.log('component did mount')
  }

  render() {
    let sel = window.getSelection()
    document.getElementById('my-text-element').addEventListener('click', function(e) {
      let myElement = document.getElementById('my-text-element');
      console.log(sel)
      console.log(myElement.selectionStart)
      console.log(document.activeElement.selectionStart)
      console.log(document.activeElement)
      console.log(document.activeElement.value)
     })
    
    let content = this.getContent()

    let items = []
    for (let i = 0; i < 1000; i++) {
      let child = (<Popover placement="rightTop" title={'text'} content={content} trigger="click"
      getPopupContainer={function() {
        console.log('getPopupCaonianter')
        return document.getElementById("popup-"+i)
      }} style={{position: "static"}} id={"popup-"+i}>
      <Button size="small" type='primary'><Icon type='setting'/>RT</Button>
    </Popover>)

    let outer = (<div id={"btn-" + i} style={{position:"relative"}} key={"btn-"+i}>
      <div id={"popup-"+i}/>
      {child}
    </div>)

      items.push(outer)
    }
    return (
      <div className="lab" style={{overflow:"scroll", display: "flex", height:500}}>
      <React.Fragment>
        {items}
        </React.Fragment>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));