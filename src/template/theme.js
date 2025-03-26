import { createTheme, Fab, TableCell, TableRow } from '@mui/material';
import { Sheet, Button, Container, Typography, List, ListItem, ListSubheader } from '@mui/joy';
import { styled } from "@mui/material/styles";

const shades = {
  primary: {
    100: "rgb(224, 217, 252)",
    200: "rgb(222, 139, 190)",
    300: " #451233",
    400: " #3D2645",
    500: "rgb(52, 0, 33)",
    600: "#290129",
    700: " #000000",
    800: "#bdb8d2",
    900: '#DFB64E',
    1000: "rgb(217, 40, 149)",
  },
}

const style = { 
  root: {
    height: '100vh',
    overflow: 'hidden',
    width: '100vw',
    padding: 0,
    margin: 0,
  },
  palette: {
      light: shades.primary[100],
      light2: shades.primary[200],
      bright: shades.primary[1000],
      shiny: shades.primary[900],
      main: shades.primary[300],
      dark1: shades.primary[500],
      text: shades.primary[800],
      headers: shades.primary[100],
      background: shades.primary[600],
      shadow: shades.primary[200],
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Tourney Variable', 
        'Proza Libre', 
        'Hind',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      color: 'inherit',
      h1: {
        fontSize: "3rem",
        fontWeight: 500,
        fontFamily: "serif",
        fontStyle: "italic",
        color: shades.primary[100],
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: 'Hind, sans-serif',
          },
        },
      },
    },
  }

export const theme = createTheme(style)

export const global = {
            html: {
              fontSize: "100%",
              color: theme.palette.text,
              '@media (max-width: 780px)' : {
                fontSize: '90%',
              }
            },
            body: { 
              fontFamily: 'Hind, sans-serif',
              backgroundColor: theme.palette.background,
              backgroundImage: 'radial-gradient(at 10% 15%, rgb(145, 152, 229, .2),rgb(230, 100, 101, .2))',
              color: theme.palette.text,
              margin: 0,
              padding: 0,
              display: 'flex', 
              justifyContent: 'center',
              overflow: 'hidden',
              width: '100vw',
              height: '100vh',
            },
            a: { 
              color: theme.palette.text, 
              textDecoration: 'none',
              fontWeight: '800',
              fontFamily: 'Tourney Variable, sans-serif',
              '&:active': {
                color: 'goldenrod',
              },
              '&:hover': {
                color: 'goldenrod',
              },
            },
          }
export const BootstrapButton = styled(Button)(( ) => ({
  backgroundColor: theme.palette.shiny,
  color: theme.palette.dark1,
  fontFamily: 'Hind, sans-serif',
  fontWeight: '700',
  fontSize: '80%',
  textTransform: 'none',
  marginRight: '.2rem',
  marginBottom: '.3rem',
  padding: '1px 6px',
  borderRadius: '.2rem',
  '&:hover': {
    backgroundColor: theme.palette.light2,
    borderColor: theme.palette.light2,
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:disabled': {
    borderColor: theme.palette.text,
    color: theme.palette.text,
  },
}));

export const Sheets = styled(Sheet)(( ) => ({
  fontFamily: 'Hind, sans-serif',
  fontWeight: '500',
  backgroundColor: 'inherit',
  color: theme.palette.text,
  m:0,
  paddingTop: '2rem', 
  paddingLeft: '1rem',
  '@media (max-width: 780px)' : {
    padding:'1rem',
    width:'100vw',
    m:0,
  }
}));
export const BodySheets = styled(Sheets)(( ) => ({
  m:0,
  paddingTop: '4rem', 
  paddingLeft: '4rem',
  paddingRight: '2rem',
  width:'65vw',
  height: '100vh',
  justifyContent: 'space-between',
  '@media (max-width: 780px)' : {
    padding: '1vh 1vw',
    width:'90vw',
    m: 0,
  }
  }));
  export const WorkSheets = styled(BodySheets)(( ) => ({
    m:0,
    padding:'3rem 0',
    overflow: 'auto',
    '@media (max-width: 780px)' : {
      width:'100vw',
    }
  }));
export const AppContainer = styled(Container)(( ) => ({
  display: 'flex',
  flexDirection:'row', 
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  m: 0,
  p: 0,
  '@media (max-width: 780px)' : {
    flexDirection:'column',
    overflowX: 'hidden',
    overflowY: 'auto',
    m: 0,
    p: 0,
  }
}));
export const NavSheets=styled(Sheets)(( ) => ({
  width:'30vw',
  '@media (max-width: 780px)' : {
  width:'100vw',
  m:0,
  }
}));
export const NavSubtitle=styled(ListItem)(( ) => ({
  color: theme.palette.text,
  fontFamily: 'Hind, sans-serif', 
  fontWeight: '600', 
  marginBottom: '1rem',
  width:'inherit',
  lineHeight: 1.1,
  '@media (max-width: 780px)' : {
    display:'none'}
}));
export const NavName=styled(Typography)(( ) => ({
  fontFamily: 'Tourney Variable, Proza Libre, sans-serif',
  fontWeight: '600',
  color: theme.palette.light,
  textShadow:'.2rem .2rem 5px #290129',
  fontSize: '3rem',
  '@media (max-width: 780px)' : { width:'28vw', fontSize: '1.7rem' }
}));
export const NavTitleText = styled(Typography)(( ) => ({
  color: theme.palette.bright,
  fontFamily: 'Tourney Variable, Proza Libre, sans-serif',  
  fontWeight: '800', 
  fontSize: '1.4rem',
  lineHeight: 1,
  textShadow:'.2rem .2rem 5px #290129',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  '@media (max-width: 780px)' : {fontSize: '1.1rem'}
}));
export const NavSocials=styled(ListSubheader)(( ) => ({
  my: 3,  
  display: 'flex',  
  flexDirection: 'row',
  width:'20vw',
  '@media (max-width: 780px)' : {width:'30vw',m:0, flexDirection: 'row'}
}));
export const WorkRow = styled(TableRow)(( ) => ({ 
  p:0, 
  m:0,   
  lineHeight: 1,
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  display: 'flex',
  flexDirection: 'row',
  '@media (max-width: 780px)' : {
    flexDirection: 'col',
    maxWidth: '90vw'
  }
}));

export const WorkDateCell = styled(TableCell)(( ) => ({ 
  verticalAlign: 'top', 
  alignItems: 'left',
  borderRight:'3px dotted', 
  borderColor:theme.palette.bright, 
  borderBottom: 0,
  fontSize:'85%', 
  fontWeight: 'bold',
  color: theme.palette.bright,
  '@media (max-width: 780px)' : {
  }
}));
export const WorkDate = styled(Typography)(( ) => ({
  fontSize:'.8rem', 
  fontWeight: 'bold',
  color: theme.palette.text,
}));
export const WorkBodyCell = styled(TableCell)(( ) => ({ 
  verticalAlign: 'top', 
  borderBottom: 0, 
  '@media (max-width: 786px)': {} 
  }));
export const WorkPosition = styled(Typography)(( ) => ({
  fontSize:'1rem',
  fontWeight: '800',
  color: theme.palette.light,
}));
export const WorkList = styled(List)(( ) => ({
  fontSize: '1rem', color: theme.palette.text,
  whiteSpace: 'normal',
  wordWrap: 'break-word',
}));
export const WorkListItem = styled(ListItem)(( ) => ({
  color:'inherit', fontFamily:'Hind',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
}));
export const HeaderCell = styled(TableCell)(( ) => ({
  horizontalAlign: 'right', 
  verticalAlign: 'top', 
  p:0, 
  m:0,  
  borderColor:theme.palette.bright,  
  fontWeight:'400',
  borderBottom: 0,
}));
export const ResumeContainer = styled(Container)(( ) => ({
  color:theme.palette.dark1, 
  backgroundColor:'white',
}))
export const ResumeRow = styled(TableRow)(( ) => ({ 
  border: '1px solid blue',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  '@media (max-width: 780px)' : {
    flexDirection: 'col',
    maxWidth: '100vw'
  }
}));
export const ResumeCell = styled(TableCell)(( ) => ({ 
  verticalAlign: 'top', 
  alignItems: 'left',
  borderRight: '5px dotted', 
  borderColor: theme.palette.bright, 
  borderTop: 0,
  borderBottom: 0,
  fontSize:1, 
  fontWeight: 'bold',
  width:'',
  color: theme.palette.dark1,
  '@media (max-width: 780px)' : {
  }
  }));

export const ResumeFab = styled(Fab)(( ) => ({
  position: 'fixed',
  bottom: '5%',
  backgroundColor: theme.palette.shiny,
  borderColor: theme.palette.shiny,
  color: theme.palette.dark1,
  fontWeight: '700',
  fontFamily: 'Hind',
  borderRadius: '.3rem',
  lineHeight: 1,
  '&:hover': {
    backgroundColor: theme.palette.light2,
    borderColor: theme.palette.light2,
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:disabled': {
    display: 'none'
  },
}))

export const ResumeName=styled(Typography)(( ) => ({
  fontFamily: 'Tourney Variable, Proza Libre, sans-serif',
  fontWeight: '600',
  color: theme.palette.light,
  fontSize: '3rem',
  '@media (max-width: 780px)' : { width:'28vw', fontSize: '1.7rem' }
}));
export const ResumeTitleText = styled(Typography)(( ) => ({
  color: theme.palette.bright,
  fontFamily: 'Tourney Variable, Proza Libre, sans-serif',  
  fontWeight: '800', 
  fontSize: '1.4rem',
  lineHeight: 1,
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  '@media (max-width: 780px)' : {fontSize: '1.1rem'}
}));

export const ResumeType = styled(Typography)(( ) => ({
  fontFamily: 'Hind, sans-serif',
  color: theme.palette.dark1,
}))

export const ResumeButton = styled(Typography)(( ) => ({
  fontFamily: 'Hind, sans-serif',
  fontWeight: 'bold',
  textTransform: 'none',
  fontSize: '80%',
  marginRight: '.2rem',
  marginBottom: '.5rem',
  padding: '1px 5px',
  border: '1px solid',
  borderRadius: '.3rem',
  '&:disabled': {
    borderColor: theme.palette.text,
    color: theme.palette.text,
}}))
export const Subtitle=styled(ListItem)(( ) => ({
  color: theme.palette.text,
  fontFamily: 'Hind, sans-serif', 
  fontWeight: '600', 
  marginBottom: '1rem',
  lineHeight: 1,
  '@media (max-width: 780px)' : {}
}));

export const GameButton=styled(Button)(( ) => ({
  backgroundColor: theme.palette.shiny,
  color: theme.palette.dark1,
  fontFamily: 'Hind, sans-serif',
  fontWeight: '700',
  fontSize: '80%',
  textTransform: 'none',
  margin: '0 .2rem 0 0',
  padding: '1px 6px',
  borderRadius: '.2rem',
  '&:hover': {
    backgroundColor: theme.palette.light2,
    borderColor: theme.palette.light2,
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:disabled': {
    borderColor: theme.palette.text,
    color: theme.palette.text,
  },
}))