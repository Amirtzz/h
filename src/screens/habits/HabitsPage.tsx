import { Box, Card, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { HabitContext } from "../../data/contexts/HabitsDataContext";

export default function HabitPage(){
    const {habits}=useContext(HabitContext)
    return <Paper>
        <Box p={1}> 
            <Typography variant="subtitle1">Habits</Typography>
            {habits.map((habitsName)=> 
                <Card style={{marginTop:8}}>
                    {habitsName}
                </Card>
                )
            }
        </Box>
    </Paper>
}