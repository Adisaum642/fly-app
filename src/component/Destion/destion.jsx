import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Paris from "../../utility/ParisImage.png"
import Greece from "../../utility/GreeceImage.png"
import Norway from "../../utility/NorwayImage.png"
import Tuscany from "../../utility/TuscanyImage.png"
import "./destion.css"

const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
}));

export default function Destion() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs="auto" className='paris'>
          <Item><img src={Paris} alt="Paris"/><div className='title-paris'>Paris</div ><div ><span className='from'>From</span> <br/> <span className="price-paris">$600</span></div></Item>
        </Grid>
        <Grid item xs="auto" className='greece'>
          <Item ><img src={Greece} alt="Greece"/><div className='title-greece'>Greece</div ><div ><span className='from'>From</span> <br/> <span className="price-paris">$600</span></div></Item>
        </Grid>
        <Grid item xs="auto" className='norway'>
          <Item><img src={Norway} alt="Norway"/><div className='title-paris'>Paris</div ><div ><span className='from'>From</span> <br/> <span className="price-paris">$600</span></div></Item>
        </Grid>
        <Grid item xs="auto" className='tuscany'>
          <Item><img src={Tuscany} alt="Tuscany"/><div className='title-paris'>Paris</div ><div ><span className='from'>From</span> <br/> <span className="price-paris">$600</span></div></Item>
        </Grid>
      </Grid>
    </Box>
  );
}

