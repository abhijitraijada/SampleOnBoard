import React from "react";
import { Title } from '@mantine/core'

export const Heading = ({title, subtitle, style}) => {
    let nativeStyle = {"display": "flex", "flexDirection": "column", "alignItems": "center"}
    return (
        <div style={Object.assign(nativeStyle, style)}>
            <Title>{title}</Title>
            <Title order={5} color="dimmed" weight="normal">{subtitle}</Title>
        </div>
    )
}