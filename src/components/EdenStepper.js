import { Stepper, Text } from "@mantine/core";
import React, {useState} from "react";
import { AccountTypepage } from "../pages/accountTypePage";
import { SetupCompletePage } from "../pages/setupCompletePage";
import { UserDetailsPage } from "../pages/userDetailsPage";
import { WorkSpaceDetailsPage } from "../pages/workSpaceDetailsPage";

export const EdenStepper = () => {
    const [active, setActive] = useState(0);
    const [formDetails, setFormDetails] = useState({})
    const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current)); 
    return (
        <>
            <Stepper active={active} onStepClick={setActive} breakpoint="sm" styles={{
                root: {minWidth: "30vw"},
                content: {display: "flex", alignItems: "center", flexDirection: "column"},
                steps: {margin: "10vh"},
            }}>
                <Stepper.Step completedIcon={<Text>1</Text>}>
                    <UserDetailsPage nextStep={nextStep} formDetails = {formDetails} setFormDetails = {setFormDetails}/>
                </Stepper.Step>
                <Stepper.Step completedIcon={<Text>2</Text>}>
                    <WorkSpaceDetailsPage nextStep={nextStep} formDetails = {formDetails} setFormDetails = {setFormDetails}/>
                </Stepper.Step>
                <Stepper.Step completedIcon={<Text>3</Text>}>
                    <AccountTypepage nextStep={nextStep} formDetails = {formDetails} setFormDetails = {setFormDetails}/>
                </Stepper.Step>
                <Stepper.Step completedIcon={<Text>4</Text>}>
                    <SetupCompletePage formDetails = {formDetails}/>
                </Stepper.Step>
                <Stepper.Completed completedIcon={<Text>4</Text>}>
                    <SetupCompletePage formDetails = {formDetails}/>
                </Stepper.Completed>
            </Stepper>
        </>
    )
}