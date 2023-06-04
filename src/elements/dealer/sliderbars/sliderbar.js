import menuLeftDealer from "@configs/Menuleft-dealer";
import {
  Avatar,
  Box,
  Button,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery
} from "@mui/material";
import { Stack } from "@mui/system";
import { ColorStyles } from "@theme/Designs";
import FeatherIcon from "feather-icons-react";
import {
  ChevronDown,
  ChevronRight,
  LifeBuoy,
  LogOut,
  Settings
} from "feather-icons-react/build/IconComponents";
import Link from "next/link";
import React from "react";
import Progressbar from "./progressbar";
import Searchfilter from "./Searchfilter";

const Sliderbar = ({ isMobileSidebarOpen, onSidebarClose }) => {
  const [open, setOpen] = React.useState(true);
  const desktop = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const handleClick = (index) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
      console.log(location);
    } else {
      setOpen(index);
    }
  };
  const ContentSiderbar = (
    <Box height="100%" sx={ {
      paddingTop: {
        xs: "0px",
        md: "32px"
      }
    } }>
      <Searchfilter />
      <List>
        {menuLeftDealer.map((item, index) => {
          return (
            <Box key={item.title}>
              <ListItem
                component="li"
                onClick={() => handleClick(index)}
              >
                <ListItemIcon>
                  <FeatherIcon
                    icon={item.icon}
                    width="20"
                    height="20"
                    color={ColorStyles.gray[500]}
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                     variant="text2"
                  >
                    {item.title}
                  </Typography>
                </ListItemText>
                {index === open ? (
                  <ChevronRight color={ ColorStyles.gray[ 400 ] } size={ 20 }/>
                ) : (
                  <ChevronDown color={ColorStyles.gray[400]} size={20}/>
                )}
              </ListItem>
              <Collapse in={index === open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Stack direction="column">
                    {item.children.map((child) => {
                      return (
                        <Link key={child.title} href={child.href}>
                          <ListItem>
                            <ListItemText >
                              <Typography variant="text2" pl = {4}>
                                {child.title}
                              </Typography>
                            </ListItemText>
                          </ListItem>
                        </Link>
                      );
                    })}
                  </Stack>
                </List>
              </Collapse>
            </Box>
          );
        })}
      </List>
      <Box
        width="100%"
        sx={{
          marginTop: {
            lg: "207px",
            xs: "20px",
          },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LifeBuoy color={ ColorStyles.gray[ 500 ] } />
              </ListItemIcon>
              <Typography
                variant="text2"
              >
                Support
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings color={ ColorStyles.gray[ 500 ] } />
              </ListItemIcon>
              <Typography
                variant="text2"
              >
                Settings
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box mt={2}>
        <Stack direction="column" spacing={1} py={1} px={1.6}>
          <Typography
            variant="text4"
          >
            Used space
          </Typography>
          <Typography variant="text1">
            Your team has used 80% of your available space. Need more?
          </Typography>
          {/*PROGRESS BAR  */}
          <Box py={2}>
              <Progressbar value={ 80 } />
            <Stack direction="row" spacing={2} mt={2}>
              <Button>
                <Typography variant="text4">
                  Dismiss
                </Typography>
              </Button>
              <Button>
                <Typography
                  variant="text4"
                  color={ColorStyles.primary[900]}
                >
                  Upgrade plan
                </Typography>
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
      {/* user logout */}
      <Box mt={4}>
        <Stack
          direction="row"
          spacing={1.5}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center">
            <Avatar alt="Remy Sharp" src="/avatar.jpg" />
            {/* <Avatar>H</Avatar> */}
            <Stack px={ 2 } direction="column" >
              <Typography variant="text4">
                Olivia Rhye
              </Typography>
              <Typography variant="text1">
                olivia@untitledui.com
              </Typography>
            </Stack>
          </Stack>
          <Box>
            <LogOut />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
  if (desktop) {
    return <>{ContentSiderbar}</>;
  }
  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: "310px",
          border: "0 !important",
          padding: "20px",
        },
      }}
    >
      {ContentSiderbar}
    </Drawer>
  );
};

export default Sliderbar;
