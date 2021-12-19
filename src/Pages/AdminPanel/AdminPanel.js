import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Request from "./Request";
import Accept from "./Accepted";
import Reject from './Reject'
import Branchmanager from './Branchmanager'
function TabPanel(props) {
  const { children, value, index, ...other } = props;
return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
export default function Adp() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="Request" href="/foo" />
          <LinkTab label="Accepted" href="/bar" />
          <LinkTab label="Rejected" href="/baz" />
          <LinkTab label="Branch Manager" href="/bmg" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Request />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Accept />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Reject />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Branchmanager />
      </TabPanel>
    </div>
  );
}
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import { Avatar } from '@mui/material';
// import { Paper } from '@material-ui/core';
// import imurl from './saylani.png'
// import Request from './Request';
// export default function CenteredTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
//       <Paper align='center' > 
//       <img src={imurl} />
//       </Paper>
//       <Tabs value={value} onChange={handleChange} centered>
//         <Tab label="Request">
//           <TabPanel>

//           <Request />
//           </TabPanel>
//           <Request />
//           <Request />
//           <Request />
//           <Request />
//         </Tab>
//         <Tab label="Item Two" />
//         <Tab label="Item Three" />
//       </Tabs>
//     </Box>
//   );
// }