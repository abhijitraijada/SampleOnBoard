import { useMantineTheme, Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { HiCheckCircle } from "react-icons/hi"
import { Heading } from "../components/heading";

export const SetupCompletePage = ({formDetails}) => {
    const theme = useMantineTheme()
    const [firstName, setFirstname] = useState()
    useEffect(() => {
        console.log("Form Details: ", formDetails)
        setFirstname(formDetails.userDetails.fullName.split(" ")[0])
    }, [formDetails])
    return ( 
        <>
            <HiCheckCircle color={theme.colors.purple[8]} size="5vw" strokeWidth="1.5" style={{marginBottom: "5vh"}}/>
            <Heading title={"Congratulations, "+firstName+"!"} subtitle="You have completed onboarding, you can start using Eden!" style={{"marginBottom":"2vh"}}/>
            <Button type = "submit" size="lg" styles={{label: {fontWeight: "normal"}, root: {marginBottom: "10vh", width: "30vw"}}}>Create Workspace</Button>
        </>
    )
}