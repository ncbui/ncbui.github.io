import { createTheme, Fab, Table, TableCell, TableContainer, TableRow } from '@mui/material';
import { Sheet, Button, Container, Typography, List, ListItem, ListSubheader } from '@mui/joy';
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import { TurnSlightRightOutlined } from '@mui/icons-material';

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
              '@media (min-width: 451px) and (max-width: 760px)' : {
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
  '@media (min-width: 451px) and (max-width: 760px)' : {
    padding:'1rem',
    width:'100vw',
    m:0,
  }
}));
export const BodySheets = styled(Sheets)(( ) => ({
  margin:0,
  paddingTop: '3rem',
  paddingLeft: '4rem',
  paddingRight: '2rem',
  width:'65vw',
  height: '100vh',
  justifyContent: 'space-between',
  overflowY: 'auto',
  '@media (min-width: 451px) and (max-width: 760px)' : {
    padding: '1vh 1vw',
    width:'94vw',
    margin:0,
    overflowY: 'auto',
  },
  '@media (max-width: 450px)' : {
    width:'94vw',
    padding: '1vh 1vw',
    margin:0,
    overflowY: 'auto',
  }
  }));
  export const WorkSheets = styled(BodySheets)(( ) => ({
    m:0,
    padding: '2rem 0',
    overflowX: 'hidden',
    overflowY: 'auto',
    width:'60vw',
    '@media (min-width: 451px) and (max-width: 760px)' : {
      width:'94vw',
      padding: '1vh 1vw',
      margin:0,
      overflowY: 'auto',
    },
    '@media (max-width: 450px)': {
      width:'94vw',
      padding: '1vh 1vw',
      margin:0,
      overflowY: 'auto',
    }
  }));
export const AppContainer = styled(Container)(( ) => ({
  display: 'flex',
  flexDirection:'row', 
  justifyContent: 'center',
  width: '100vw',
  minWidth: '380px',
  height: '100vh',
  overflow: 'hidden',
  m: 0,
  p: 0,
  '@media (max-width: 760px)' : {
    flexDirection:'column',
    overflowX: 'hidden',
    overflowY: 'auto',
    width: '98vw',
    minWidth: '380px',
    m: 0,
    p: 0,
  }
}));
export const NavSheets=styled(Sheets)(( ) => ({
  margin:0,
  paddingX:0,
  paddingBottom:0,
  width:'30vw',
  '@media (min-width: 451px) and (max-width: 760px)' : {
    width:'94vw',
    margin:0,
    padding:0,
  },
  '@media (max-width: 450px)' : {
    width:'94vw',
    margin:0,
    padding:0,
    
  }
}));

export const NavHeader=styled(List)(( ) => ({
  display:'flex', 
  flexDirection:'col', 
  // margin:0,
  padding:0,
  '@media (min-width: 451px) and (max-width: 760px)' : {
    width:'90vw',
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:0,
    padding:0,
  }, 
  '@media (max-width: 450px)' : {
    width:'90vw',
    flexDirection:'row', 
    justifyContent:'flex-start',
    alignItems:'center',
    marginBottom:0,
    paddingBottom:0,
  }
}));

export const NavName=styled(Typography)(( ) => ({
  fontFamily: 'Tourney Variable, Proza Libre, sans-serif',
  fontWeight: '600',
  color: theme.palette.light,
  textShadow:'.2rem .2rem 5px #290129',
  fontSize: '3rem',
  lineHeight: 1,
  '@media (min-width: 451px) and (max-width: 760px)' : { 
    width:'10rem', 
    fontSize: '2rem',
    margin: 0,
    padding: 0,
    lineHeight: 1,
   },
  '@media (max-width: 450px)' : { 
    width:'8rem', 
    fontSize: '1.7rem',
    margin: 0,
    padding: 0,
    lineHeight: 1,
  },
}));
export const NavTitleText = styled(Typography)(( ) => ({
  color: theme.palette.bright,
  fontFamily: 'Tourney Variable, Proza Libre, sans-serif',  
  fontWeight: '800', 
  fontSize: '1.4rem',
  lineHeight: 1,
  padding: '0 .5rem 0 1rem',
  textShadow:'.2rem .2rem 5px #290129',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  '@media (min-width: 451px) and (max-width: 760px)' : {
    fontSize: '1.1rem',
    lineHeight: 1,
    padding: 0,
  },
  '@media (max-width: 450px)' : { 
    fontSize: '1rem', 
    padding: 0,
    lineHeight: 1,
  }
  }));
export const NavSubtitle=styled(ListItem)(( ) => ({
  color: theme.palette.text,
  fontFamily: 'Hind, sans-serif', 
  fontWeight: '600', 
  marginBottom: '1rem',
  width:'inherit',
  lineHeight: 1.1,
  '@media (min-width: 451px) and (max-width: 760px)' : {
    display:'none'},
  '@media (max-width: 450px)': {
    padding: 0,
  }
  }));
export const NavContent=styled(List)(( ) => ({ 
  display:'flex', 
  flexDirection: 'col',
  m:0, p:0,
  alignItems:'bottom',
  '@media (min-width: 451px) and (max-width: 760px)': {
    flexDirection: 'row', 
    justifyContent:'space-between', 
    width: '98vw',
    }, 
  '@media (max-width: 450px)':{
    flexDirection: 'row',
    justifyContent:'start',
    width: '98vw',
    minWidth: '21rem',
    }
  }));
export const NavLinkList=styled(List)(( ) => ({ 
  display:'flex', 
  flexDirection: 'col',
  lineHeight: 1,
  marginTop:'1rem',
  '@media (min-width: 451px) and (max-width: 760px)': {
    flexDirection: 'row', 
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    width: '10vw',
    }, 
  '@media (max-width: 450px)':{
    width: '10vw',
    flexDirection: 'row', 
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    flexWrap: 'wrap',
    
    }
  }));
export const NavLinkListItem=styled(ListItem)(( ) => ({ 
  lineHeight: .25,
  display: 'inline',
  font: 'Tourney Variable, sans-serif',
  color: theme.palette.light,
  verticalAlign: 'bottom',
  '&:hover': {
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'none',
  },
  '&:disabled': {
    borderColor: theme.palette.text,
    color: theme.palette.text,
  },
  '@media (min-width: 451px) and (max-width: 760px)': {
    padding: '0 .3rem',
    }, 
  '@media (max-width: 450px)':{
    padding: '0 .3rem',
    }
  }));
export const NavSocials=styled(ListSubheader)(( ) => ({
  marginY: 3,  
  display: 'flex',  
  paddingLeft: '.5rem',
  flexDirection: 'row',
  minWidth: '10rem',
  '@media (min-width: 451px) and (max-width: 760px)' : {
    minWidth:'7rem', margin:0, marginY: 0, padding:0,flexDirection: 'row', fontSize:'2rem'
   },
  '@media (max-width: 450px)' : {
    minWidth:'6rem', margin:0,  marginY: 0,  padding:0, flexDirection: 'row', fontSize:'2rem'
   }
}));

export const NavSocialsListItem=styled(ListItem)(( ) => ({
  lineHeight: .25,
  display:'inline',
  verticalAlign: 'top',
  marginX: 0,
  padding: 0,
  font: 'Tourney Variable, sans-serif',
  color: theme.palette.light,
  '&:hover': {
    // backgroundColor: theme.palette.light2,
    // borderColor: theme.palette.light2,
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'none',
  },
  '&:disabled': {
    borderColor: theme.palette.text,
    color: theme.palette.text,
  },
  '@media (min-width: 451px) and (max-width: 760px)': {
    }, 
  '@media (max-width: 450px)':{
    }
}));

export const WorkFab = styled(Fab)(( ) => ({
  transform: 'scale(0.5)',
  marginLeft:'-2rem',
  padding: '0 .7rem',
  textTransform: 'none',
  backgroundColor: theme.palette.shiny,
  borderColor: theme.palette.shiny,
  color: theme.palette.dark1,
  fontWeight: '700',
  fontFamily: 'Hind',
  borderRadius: '.3rem',
  fontSize: 24,
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
  '@media (min-width: 451px) and (max-width: 760px)' : {
    marginLeft:'-1.5rem',
  },
  '@media (max-width: 450px)': {
    marginLeft:'-1.5rem',
  }
}))
export const WorkRow = styled(TableRow)(( ) => ({ 
  p:0, 
  m:0,   
  lineHeight: 1,
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  display: 'flex',
  flexDirection: 'row',
  '@media (min-width: 451px) and (max-width: 760px)' : {
    flexDirection: 'col',
    maxWidth: '90vw'
  },
  '@media (max-width: 450px)': {}
}));

export const WorkDateCell = styled(TableCell)(( ) => ({ 
  verticalAlign: 'top', 
  textAlign: 'right',
  borderRight:'3px dotted', 
  borderColor:theme.palette.bright, 
  borderBottom: 0,
  fontSize:'85%', 
  fontWeight: 'bold',
  minWidth: '9rem',
  padding:'0 1rem',
  color: theme.palette.text,
  '@media (min-width: 451px) and (max-width: 760px)' : {
    minWidth: '7rem',
  },
  '@media (max-width: 450px)': {
    minWidth: '7rem',
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
  margin: 0, 
  padding: '0 1rem',
  '@media (min-width: 451px) and (max-width: 760px)': {},
  '@media (max-width: 450px)': {} 
  }));
export const WorkPosition = styled(Typography)(( ) => ({
  fontSize:'1rem',
  fontWeight: '400',
  color: theme.palette.text,
  lineHeight: 1,
  '@media (min-width: 451px) and (max-width: 760px)' : {
    fontSize:'.9rem', 
  },
  '@media (max-width: 450px)': {
    fontSize:'.8rem', 
  }
}));
export const WorkList = styled(List)(( ) => ({
  fontSize: '.9rem', 
  color: theme.palette.text,
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  lineHeight: 1,
}));
export const WorkListItem = styled(ListItem)(( ) => ({
  color:'inherit', 
  fontFamily:'Hind',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  lineHeight: 1,
}));
export const LinkIcon = styled(TurnSlightRightOutlined)(( ) => ({
  color: theme.palette.bright, fontSize:'1rem'
}));

export const HeaderCell = styled(TableCell)(( ) => ({
  padding:'.5rem 0', 
  margin:0,  
  borderColor:theme.palette.bright,  
  fontWeight:'400',
  borderBottom: 0,
  justifyContent: 'bottom',
}));
export const ResumeContainer = styled(TableContainer)(( ) => ({
  backgroundColor: theme.palette.light,
  margin: 0,
  width:'inherit',
  maxWidth:'800px',
  padding: '0 1rem',
  color:theme.palette.dark1, 
  justifyContent: 'center',
  '@media (min-width: 451px) and (max-width: 760px)' : {
    width:'inherit',
  },
  '@media (max-width: 450px)': {
    width:'inherit',
  }
}))

export const ResumeTable = styled(Table)(( ) => ({
  margin: 0,
  padding: '0 1rem',
  width: '700px',
  '@media (min-width: 451px) and (max-width: 760px)' : {
  },
  '@media (max-width: 450px)': {
    maxWidth: 400
  }
}));
export const ResumeTableHeader = styled(TableCell)(( ) => ({
  display: 'flex',
  flexDirection: 'row',
  paddingBottom: 0,
  marginBottom: 0
}));
export const ResumeRow = styled(TableRow)(( ) => ({ 
  verticalAlign:'top',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  '@media (min-width: 451px) and (max-width: 760px)' : {
  },
  '@media (max-width: 450px)': {
  }
}));
export const ResumeCell = styled(TableCell)(( ) => ({ 
  verticalAlign: 'top', 
  margin: 0, 
  padding:0, 
  color: theme.palette.dark1,
  '@media (min-width: 451px) and (max-width: 760px)' : {
  },
  '@media (max-width: 450px)': {}
  }));
export const ResumeDateCell = styled(ResumeCell)(( ) => ({ 
  textAlign: 'right',
  fontWeight: 'bold',
  paddingRight: '.3rem',
  fontSize: '80%',
  '@media (min-width: 451px) and (max-width: 760px)' : {
  },
  '@media (max-width: 450px)': {}
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
  color: theme.palette.dark1,
  display:'block', 
  lineHeight:1,
  fontSize: '2.5rem',
  '@media (min-width: 451px) and (max-width: 760px)' : {
    fontSize: '1.7rem' 
  },
  '@media (max-width: 450px)': {
    fontSize: '1.3rem' 
  }
}));
export const ResumeTitleText = styled(Typography)(( ) => ({
  color: theme.palette.dark1,
  fontFamily: 'Tourney Variable, Proza Libre, sans-serif',  
  fontWeight: '800', 
  fontSize: '1.2rem',
  lineHeight: 1,
  padding: 0,
  margin: 0,
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  '@media (min-width: 451px) and (max-width: 760px)' : {
    fontSize: '1.1rem'},
  '@media (max-width: 450px)': {
    fontSize: '1.1rem'
  }
}));
export const ResumeSubtitle = styled(Typography)(( ) => ({
  color:theme.palette.dark1, 
  lineHeight: 1,
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  width: '30rem',
  '@media (min-width: 451px) and (max-width: 760px)' : {
  },
  '@media (max-width: 450px)': {
  }
}));

export const ResumeType = styled(Typography)(( ) => ({
  fontFamily: 'Hind, sans-serif',
  color: theme.palette.dark1,
  lineHeight: 1.3,
}))

export const ResumeLink = styled(Link)(( ) => ({
  color: theme.palette.dark1
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
  '@media (min-width: 451px) and (max-width: 760px)' : {},
  '@media (max-width: 450px)': {}
}));

export const GameTitleText=styled(Typography)(( ) => ({
  color: theme.palette.bright,
  fontFamily: 'Tourney Variable, Proza Libre, sans-serif',  
  fontWeight: '800', 
  fontSize: '1.4rem',
  lineHeight: 1.5,
  textShadow:'.2rem .2rem 5px #290129',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  '@media (min-width: 451px) and (max-width: 760px)' : {
    fontSize: '1.3rem',
    lineHeight: 1,
  },
  '@media (max-width: 450px)' : { 
    fontSize: '1.3rem', 
    lineHeight: 1,
  }
}));
export const GameSubtitleText=styled(Typography)(( ) => ({
  maxWidth: '30rem',
  color: theme.palette.text,
  fontFamily: 'Tourney Variable, Proza Libre, sans-serif',  
  fontStyle: 'italic', 
  fontWeight:'600',
  fontSize: '1rem',
  lineHeight: 1,
  textShadow:'.2rem .2rem 5px #290129',
  '@media (min-width: 451px) and (max-width: 760px)' : {
    fontSize: '.8rem',
    lineHeight: 1,
    width: '94vw',
  },
  '@media (max-width: 450px)' : { 
    fontSize: '.8rem', 
    lineHeight: 1,
    maxWidth: '94vw',
  }
}));

export const GameDescription=styled(Typography)(( ) => ({
  maxWidth: '30rem',
  fontSize:'1rem', 
  fontWeight: 'bold',
  color: theme.palette.text,
  lineHeight: 1,
  '@media (min-width: 451px) and (max-width: 760px)' : {
    width: '98vw',
    fontSize: '.8rem',
  },
  '@media (max-width: 450px)' : { 
    fontSize: '.8rem', 
    maxWidth: '98vw',
  }
}));

export const GameFooterText=styled(GameTitleText)(( ) => ({
  fontStyle: 'italic', 
  fontWeight:'900', 
  fontSize: '1rem', 
  margin:'1rem 0 0 1rem', 
}));

export const GameButton=styled(Button)(( ) => ({
  backgroundColor: theme.palette.shiny,
  color: theme.palette.dark1,
  fontFamily: 'Hind, sans-serif',
  fontWeight: '700',
  fontSize: '80%',
  textTransform: 'none',
  // margin: '0 .2rem 0 0',
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
  '@media (min-width: 451px) and (max-width: 760px)' : {
    fontSize: '.8rem',
    lineHeight: 1,
    margin: '.2rem',
    padding: '1px 4px',
  },
  '@media (max-width: 450px)' : { 
    fontSize: '.8rem', 
    lineHeight: 1,
    margin: '.2rem',
    padding: '1px 4px',
  }
}));
