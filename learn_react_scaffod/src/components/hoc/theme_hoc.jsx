import ThemeContext from "./theme_context"

function withTheme(WrapperComponent) {
  return (props) => {
    return (
      <ThemeContext.Consumer>
        {
          value => <WrapperComponent {...value} {...props} /> 
        }
      </ThemeContext.Consumer>
    )
  }
}

export default withTheme