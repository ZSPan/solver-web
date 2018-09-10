import React from "react";
import ReactDOM from "react-dom";
import {Layout, Menu} from "element-react";
import Me from "./me/index.jsx";
import Test from "./test/index.jsx";
import strings from "../utils/strings";

import "element-theme-default";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
        <div>
          <Layout.Row className="tac">
            <Layout.Col span={16} push={4}>
              <Menu defaultActive="1" className="el-menu-demo" mode="horizontal"
                    theme={"dark"}>
                <Menu.Item index="1">{strings.solver}</Menu.Item>
              </Menu>
            </Layout.Col>
          </Layout.Row>
          <Router>
            <Layout.Row className="tac" style={{marginTop: '10px'}}>
              <Layout.Col span={4} push={4} >
                <Menu className="el-menu-vertical-demo" theme="dark">
                    <Link to="/me">
                      <Menu.Item>{strings.me}</Menu.Item>
                    </Link>
                    <Link to="/test">
                      <Menu.Item>{strings.test}</Menu.Item>
                    </Link>
                </Menu>
              </Layout.Col>
              <Layout.Col span={12} push={4}>
                <div className="content" style={{paddingLeft: '20px', paddingRight: '20px'}}>
                  <Route path="/me" component={Me}/>
                  <Route path="/test" component={Test}/>
                </div>
              </Layout.Col>
            </Layout.Row>
          </Router>
        </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));