import { useContext } from 'react'
import { ThemeContext, TokenContext, UserContext } from '../context'

function useUserToken() {
  const user = useContext(UserContext)
  const token = useContext(TokenContext)
  const theme = useContext(ThemeContext);
  return [user, token, theme]
}

export default useUserToken