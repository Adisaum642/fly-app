import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Bali from "../../utility/image1.png"
import Greece from "../../utility/imag2.png"
import Norway from "../../utility/img3.png"
import Tuscany from "../../utility/img3.png"
import "./Holiday.css"

const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
}));

export default function Holiday() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs="auto" className='title-box'>
          <Item><img src={Bali} alt="bali" /><div className='price'>$800</div ><div ><span className='name'>Bali</span> <br /> <span className="days">4D3N</span></div></Item>
        </Grid>
        <Grid item xs="auto" className='swiss'>
          <Item ><img src={Greece} alt="Greece" /><div className='price'>$900</div ><div ><span className='name'>Swiss</span> <br /> <span className="days">6D5N</span></div></Item>
        </Grid>
        <Grid item xs="auto" className='boracay'>
          <Item><img src={Norway} alt="Norway" /><div className='price'>$699</div ><div ><span className='name'>Boracay</span> <br /> <span className="days">5D4N</span></div></Item>
        </Grid>
        <Grid item xs="auto" className='palawan'>
          <Item><img src={Tuscany} alt="Tuscany" /><div className='price'>$789</div ><div ><span className='name'>Palawan</span> <br /> <span className="days">4D3N</span></div></Item>
        </Grid>
      </Grid>
    </Box>
  );
}

