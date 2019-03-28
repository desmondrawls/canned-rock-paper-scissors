import React from 'react';
import { connect } from 'react-redux'
import { TITLE } from './reducer';


interface StateProps { title: string }
interface DispatchProps { onClick: () => void }
type TitleProps = StateProps & DispatchProps

const TitleView: React.SFC<TitleProps> = ({title, onClick}) => {
    return (
        <div onClick={onClick}>{title}</div>
    )
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch({type: TITLE})
})

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(TitleView)