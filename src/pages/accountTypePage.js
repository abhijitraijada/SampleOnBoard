import React, {useState} from "react";
import { Heading } from "../components/heading"
import { Button, Card, Text, useMantineTheme } from "@mantine/core";
import { HiUser, HiUserGroup } from "react-icons/hi";

export const AccountTypepage = ({nextStep, formDetails, setFormDetails}) => {
    const theme = useMantineTheme()
    const [selectedCard, setSelectedCard] = useState("")
    function nextPage(e) {
        setFormDetails({...formDetails, accountType: selectedCard})
        nextStep()
        nextStep()
    }
    function onCardClick (clickedCard) {
        console.log("Data from step 3: ", clickedCard)
        setSelectedCard(clickedCard)
    }
    return (
        <>
            <Heading title="How are you planning to use Eden?" subtitle="We'll streamline your setup experience accordingly." style={{"marginBottom": "5vh"}}/>
            <div style={{display: "flex", width: "30vw", marginBottom: "2vh", justifyContent: "space-between"}}>
                <Card shadow="sm" p="lg" radius="md" withBorder style={{width: "13vw", borderColor: selectedCard === 'personal' ? theme.colors.purple[8] : theme.colors.gray[3]}} onClick={() => {onCardClick("personal")}}>
                    <HiUser size="4vh" color={theme.colors.purple[8]} style={{marginBottom: "1vh"}}></HiUser>
                    <Text weight={500} style={{marginBottom: "1vh"}}>For myself</Text>
                    <Text color="dimmed">Write better. Think more clearly. Stay organised</Text>
                </Card>
                <Card shadow="sm" p="lg" radius="md" withBorder style={{width: "13vw", borderColor: selectedCard === 'team' ? theme.colors.purple[8] : theme.colors.gray[3]}} onClick={() => {onCardClick("team")}}>
                    <HiUserGroup size="4vh" color={theme.colors.purple[8]} style={{marginBottom: "1vh"}}></HiUserGroup>
                    <Text weight={500} style={{marginBottom: "1vh"}}>With my team</Text>
                    <Text color="dimmed">Wikis, docs, tasks & projects, all in one place</Text>
                </Card>
            </div>
            <Button type = "button" onClick={nextPage} size="lg" styles={{label: {fontWeight: "normal"}, root: {marginBottom: "10vh", width: "30vw"}}}>Create Workspace</Button>
        </>
    )
}