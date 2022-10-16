import {useLocation, useNavigate, useParams, useSearchParams} from 'react-router-dom'

export function withRouter(WrapperComponent) {
    return function (props) {
        const navigate = useNavigate()
        const params = useParams()
        const location = useLocation()
        const [searchParams] = useSearchParams()
        const query = Object.fromEntries(searchParams);
        const router = {
            navigate,
            params,
            query,
            location
        }
        return <WrapperComponent {...props} router={router}/>
    }
}