import { createStyles } from "@mantine/core";
import React from "react";
import { EdenStepper } from "../components/EdenStepper";
import { Logo } from "../components/logo";

// const useStyle = createStyles((theme, params, getRef) => ({
    
// }))
const useStyles = createStyles((theme, _params, getRef) => ({
    wrapper: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: theme.radius.sm,
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        [`& .${getRef('child')}`]: {
          fontSize: theme.fontSizes.xs,
        },
      },
    },
  
    child: {
      ref: getRef('child'),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      padding: theme.spacing.md,
      borderRadius: theme.radius.sm,
      boxShadow: theme.shadows.md,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      minWidth: "80vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },

  }))

export const SignUpPage = () => {
    const { classes } = useStyles()
    return (
        <div className={ classes.wrapper } >
            <div className={ classes.child }>
              <Logo style={{"marginTop": "5vh"}}/>
              <EdenStepper/>
            </div>
        </div>
    )
}
