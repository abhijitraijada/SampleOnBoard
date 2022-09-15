import React from "react";
import { Heading } from "../components/heading"
import { useForm } from "@mantine/form"
import { TextInput, useMantineTheme, Button } from "@mantine/core";

export const WorkSpaceDetailsPage = ({nextStep, formDetails, setFormDetails}) => {
    const theme = useMantineTheme()
    const form = useForm({
        initialValues: {
            fullName: "",
            displayName: "",
        },
        validate: {
            fullName: (value) => (value.length > 2 ? null : "Workspace name should be more than 2 characters"),
        },
    })
    function formSubmit(values, e) {
        console.log("Data from step 2: ", values)
        setFormDetails({...formDetails, workspaceDetails: values})
        nextStep()
    }
    return (
        <>
            <Heading title="Let's setup home for all your work" subtitle="You can always create another workspace later." style={{"marginBottom": "5vh"}}/>
            <form onSubmit={form.onSubmit((values, e) => {formSubmit(values, e)})} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <TextInput label="Workspace" placeholder="Eden" {...form.getInputProps("fullName")}
                    styles={{
                        root: {minHeight: "5vh", marginBottom: "2vh"},
                        wrapper: {width: "30vw", minHeight: "1vh"}, 
                        input: {fontSize: "1.75vh", padding: "1vh", minHeight: "5vh"}, 
                        label: {fontSize: '1.75vh', color: theme.colors.gray[7]},
                    }}
                />
                <TextInput 
                    label={<><span>Workspace URL</span><span style={{color: theme.colors.dark[0]}}>(optional)</span></>}
                    icon={<><span>www.eden.com/</span></>}
                    iconWidth = {150}
                    placeholder="Example" 
                    {...form.getInputProps("displayName")}
                    styles={{
                        root: {minHeight: "5vh", marginBottom: "2vh"},
                        wrapper: {width: "30vw", minHeight: "1vw", display: "flex", flexDirection: 'row'}, 
                        input: {fontSize: "1.75vh", minHeight: "5vh", marginLeft: "5px"}, 
                        label: {fontSize: '1.75vh', color: theme.colors.gray[7]},
                        icon: {backgroundColor: theme.colors.gray[1], border: `0.5px solid ${theme.colors.gray[5]}`, borderTopLeftRadius:"4px", borderBottomLeftRadius: "4px"}
                    }}
                />
                <Button type = "submit" size="lg" styles={{label: {fontWeight: "normal"}, root: {marginBottom: "10vh", width: "30vw"}}}>Create Workspace</Button>
            </form>
        </>
    )
}