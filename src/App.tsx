import FileUploadAndParser from "./Uploader.tsx";
import * as React from 'react';
import Box from '@mui/material/Box';
import {Paper, Typography} from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function App() {

    const [value, setValue] = React.useState('1');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
  return (
    <>

        <Box sx={{paddingX:'10%'}}>
            <Box marginX={"20px"} paddingY={'20px'}>
                <Typography>
                    <h1>我们真的需要认知实习吗 - 2024.1</h1>
                    作者：很多人
                    <br/>
                    Tools: React + Django
                    <br/>
                </Typography>
            </Box>
        <Paper elevation={10} sx={{paddingX:'1%', paddingY:'2%'}}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider'} }>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1"><FileUploadAndParser/></TabPanel>
                <TabPanel value="2">New</TabPanel>
                <TabPanel value="3">OK</TabPanel>
            </TabContext>
        </Box>
        </Paper>
        </Box>

    </>
  )
}

export default App
