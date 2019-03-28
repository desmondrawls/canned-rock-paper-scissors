import { connect } from 'react-redux'
import { TITLE } from '../reducer';
import { TitleView } from './TitleView';


export interface StateProps { title: string }
export interface DispatchProps { onClick: () => void }

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch({type: TITLE})
})

export const Title = connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(TitleView)