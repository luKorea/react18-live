import styled from 'styled-components';


// props 传递
// attrs 设置默认值
export const AppWrap = styled.div.attrs(props => {
  return {
    padding: props.padding || '20px'
  }
})`
.title {
  color: red;
  font-size: 20px;
  padding: ${props => props.padding};
}
`

//  属性继承
const kButton = styled.button`
border: 1px solid red;
`
export const AppButton = styled(kButton)`
font-size: 20px;
`