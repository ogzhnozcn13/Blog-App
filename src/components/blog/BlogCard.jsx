import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const BlogCard = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" align="justify">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={2} >
          29.03.2023 17:27:38
          </Typography>
         <Typography sx={{display:"flex", alignItems:"center"}}>
            {/* <Avatar
              alt="Remy Sharp"
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
              sx={{ width: 24, height: 24,mt:2 }}
            />  */}
            <AccountCircleIcon />
            Admin
         </Typography>
        </CardContent>
        <CardActions sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}} >
          <Typography >
            <IconButton>
              <FavoriteBorderIcon/> <span>3</span>
            </IconButton>
            <IconButton>
              <ChatBubbleOutlineIcon/> <span>5</span>
            </IconButton>
            <IconButton>
              <RemoveRedEyeIcon/> <span>9</span>
            </IconButton>
          </Typography>
          <Button size="small" variant="contained">Read More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BlogCard