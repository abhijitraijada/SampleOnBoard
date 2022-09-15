import React from "react";
import { Heading } from "../components/heading"
import { useForm } from "@mantine/form"
import { TextInput, useMantineTheme, Button } from "@mantine/core";

export const UserDetailsPage = ({nextStep, formDetails, setFormDetails}) => {
    const theme = useMantineTheme()
    const form = useForm({
        initialValues: {
            fullName: "",
            displayName: "",
        },
        validate: {
            fullName: (value) => (value.length > 2 ? null : "Name should be more than 2 characters"),
            displayName: (value) => (value.length > 0 ? null : "Display name cannot be empty")
        },
    })
    function formSubmit(values, e) {
        console.log("Data from step 1: ", values)
        setFormDetails({...formDetails, userDetails: values})
        nextStep()
    }
    return (
        <>
            <Heading title="Welcome! First things first..." subtitle="You can always change them later." style={{"marginBottom": "5vh"}}/>
            <form onSubmit={form.onSubmit((values, e) => {formSubmit(values, e)})} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <TextInput label="Full Name" placeholder="Steve Jobs" {...form.getInputProps("fullName")}
                    styles={{
                        root: {minHeight: "5vh", marginBottom: "2vh"},
                        wrapper: {width: "30vw", minHeight: "1vh"}, 
                        input: {fontSize: "1.75vh", padding: "1vh", minHeight: "5vh"}, 
                        label: {fontSize: '1.75vh', color: theme.colors.gray[7]},
                    }}
                />
                <TextInput label="Display Name" placeholder="Steve" {...form.getInputProps("displayName")}
                    styles={{
                        root: {minHeight: "5vh", marginBottom: "2vh"},
                        wrapper: {width: "30vw", minHeight: "1vw"}, 
                        input: {fontSize: "1.75vh", padding: "1vh", minHeight: "5vh"}, 
                        label: {fontSize: '1.75vh', color: theme.colors.gray[7]},
                    }}
                />
                <Button type = "submit" size="lg" styles={{label: {fontWeight: "normal"}, root: {marginBottom: "10vh", width: "30vw"}}}>Create Workspace</Button>
            </form>
        </>
    )
}