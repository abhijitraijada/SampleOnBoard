import { createStyles, Image, Title } from "@mantine/core";
import React from "react";
import logo from "../assets/logo.png"

const useStyle = createStyles((theme, params, getRef) => ({
    wrapper: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
}))
 
export const Logo = ({style}) => {
    const { classes } = useStyle()
    return (
        <div className={classes.wrapper} style={style}>
            <Image
                radius="md"
                src={logo}
                width="5vh"
            />
            <Title order={2} weight="bolder">Eden</Title>
        </div>
    )
}