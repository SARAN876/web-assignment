import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Link,  Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { 
  List,
  ListItemButton,
    ListItemIcon,
    ListItemText,
    Input,Badge,
    Avatar,
    Box,
    IconButton,
    Divider,
    Toolbar,
  } from '@mui/material';
  
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Icon } from '@iconify/react/dist/iconify.js';

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: 'black',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    background: '#B2ABAC',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(8)
      }
    })
  }
}));

const mdTheme = createTheme({
  palette: {
    primary: {
      light: '#9ffcc980',
      main: '#1dce6e',
      dark: '#1dce6e',
      contrastText: '#ffffff'
    },
    background: {
      paper: '#FFFFFF',
      default: '#FFFFFF'
    }
  }
});
function Themebar() {

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" >
          <Toolbar
            sx={{
              pr: '24px'
            }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{
                marginRight: '30px',
              
              }}>
              <DashboardIcon/>
            </IconButton>
            <Input
              disabled={false}
              placeholder="search"
              variant="outlined"
              sx={{
                backgroundColor: 'white',
                borderRadius: 1,
                padding: '3px 12px'
              }}
            />
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit">
              <Icon icon="lets-icons:message-light" width="1.5em" height="1.5em"  style={{color: 'white'}} />
            </IconButton>
            <IconButton color="inherit">
              <Icon icon="mage:settings" width="1.2em" height="1.2em"  style={{color: 'white'}} />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Avatar alt="Saran"src={'/image.png'} sizes='small' />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent">
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1]
            }}>
          </Toolbar>
          <Divider />
          <List sx={{ mt: 2, color: 'black' }}>
            <ListItemButton
              to="/"
              component={Link}
              role="button"
              >
              <ListItemIcon>
                <Icon icon="tdesign:chart" width="1.5em" height="2em"  style={{color: 'white'}} />
              </ListItemIcon>
              <ListItemText primary="Funds" />
            </ListItemButton>
            <ListItemButton
              to="/"
              component={Link}
              role="button"
              >
              <ListItemIcon>
              <Icon icon="charm:notes-tick" width="1.5em" height="1.5em"  style={{color: 'white'}} />
              </ListItemIcon>
              <ListItemText primary="notes" />
            </ListItemButton>
            <ListItemButton
              to="/"
              component={Link}
              role="button"
              >
              <ListItemIcon>
              <Icon icon="mingcute:wallet-line" width="1.6em" height="1.6em"  style={{color: 'white'}} />              </ListItemIcon>
              <ListItemText primary="wallet" />
            </ListItemButton>
          </List>
          <List sx={{ mt: 'auto' }}>
            <ListItemButton to="/" component={Link} role="button">
              <ListItemIcon>
              <Icon
                  icon="fa6-solid:power-off"
                  width="1.2em"
                  height="1.2em"
                  style={{ color: 'white', transform: 'rotate(90deg)' }}
                />
              </ListItemIcon>
              <ListItemText primary="More" />
            </ListItemButton>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Themebar;
