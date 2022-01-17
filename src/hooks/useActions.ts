import { MoviesActionCreators } from './../store/actionCreators';
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(MoviesActionCreators, dispatch)
}