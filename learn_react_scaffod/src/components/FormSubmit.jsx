import React, { PureComponent } from "react";

export class FormSubmit extends PureComponent {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      fruit: ["orange"],
    };
  }

  handleSubmitClick(event) {
    // 1.阻止默认的行为
    event.preventDefault();

    // 2.获取到所有的表单数据, 对数据进行组件
    console.log("获取所有的输入内容");
    console.log(this.state);

    // 3.以网络请求的方式, 将数据传递给服务器(ajax/fetch/axios)
  }

  handleChangeData(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  //  处理select多选组件
  handleFruitChange(e) {
    console.log(e.target.selectedOptions);
    const fruit = Array.from(e.target.selectedOptions, (item) => item.value);
    this.setState({ fruit });
  }

  render() {
    const { username, password, fruit } = this.state;

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          {/* 1.用户名和密码 */}
          <label htmlFor="username">
            用户:
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => this.handleChangeData(e)}
            />
          </label>
          <label htmlFor="password">
            密码:
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => this.handleChangeData(e)}
            />
          </label>
          <select
            value={fruit}
            onChange={(e) => this.handleFruitChange(e)}
            multiple
          >
            <option value="apple">苹果</option>
            <option value="orange">橘子</option>
            <option value="banana">香蕉</option>
          </select>
          <button type="submit">注册</button>
        </form>
      </div>
    );
  }
}

export default FormSubmit;
