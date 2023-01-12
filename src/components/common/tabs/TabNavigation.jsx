import * as React from "react";
import TabPanel from "./TabPanel";
import a11yProps from "./helper/a11yProps";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";

const tabsStyle = {
  "& .MuiTabs-indicator": {
    height: "4px",
  },
};

const tabStyle = {
  textTransform: "capitalize",
  fontSize: "18px",
  marginTop: "40px",
  paddingLeft: { xs: "30px", md: "80px" },
  paddingRight: { xs: "30px", md: "80px" },
  minHeight: "70px",
  "&.Mui-selected": {
    color: "#000",
    fontWeight: "600",
  },
};

export function TabNavigation({ components, tabNameList }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={tabsStyle}
          centered
          aria-label="tabNavigation"
        >
          {/* <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}
          {tabNameList.map((tabName, index) => {
            return (
              <Tab
                disableRipple
                sx={tabStyle}
                key={index}
                label={tabName}
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
      {components.map((component, index) => {
        return (
          <TabPanel key={index} value={value} index={index}>
            {component}
          </TabPanel>
        );
      })}
    </Box>
  );
}

export default TabNavigation;
