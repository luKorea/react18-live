import ThemeContext from './context';

function FunContent() {
  return (
      <ThemeContext.Consumer>
        {
          value => <h1 style={value}>函数式组件使用context</h1>
        }
      </ThemeContext.Consumer>
  )
}

export default FunContent;
