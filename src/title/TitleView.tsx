import React from 'react';
import { StateProps, DispatchProps } from "./Title";

type TitleProps = StateProps & DispatchProps

export const TitleView: React.SFC<TitleProps> = ({title, onClick}) => {
    return (
        <div onClick={onClick}>{title}</div>
    )
}