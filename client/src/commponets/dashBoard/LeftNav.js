import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 524,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function LeftNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Eight" {...a11yProps(7)} />
        <Tab label="Item Nine" {...a11yProps(8)} />
        <Tab label="Item Ten" {...a11yProps(9)} />
        <Tab label="Item Eleven" {...a11yProps(10)} />
        <Tab label="Item Twelve" {...a11yProps(11)} />
        <Tab label="Item Thirteen" {...a11yProps(12)} />
        <Tab label="Item Fourteen" {...a11yProps(13)} />
        <Tab label="Item Fifteen" {...a11yProps(14)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item First
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Second
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Third
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Fourth
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Fifth
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Sixth
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seventh
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Eighth
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item Ninth
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item Tenth
      </TabPanel>
      <TabPanel value={value} index={10}>
        Item Eleventh
      </TabPanel>
      <TabPanel value={value} index={11}>
        Item Tvelves
      </TabPanel>
    </div>
  );
}
