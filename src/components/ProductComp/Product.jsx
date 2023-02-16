import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Product = (props) => {
  const navigate = useNavigate();

  const openProduct = (id) => {
    navigate("/ProductDetails/" + id);
  };
  const returnDescription = (data) => {
    return data.substr(0, 200);
  };

  return (
    <Grid item xs={12} sm={8} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: "30.25%",
          }}
          image={props.data.image}
          alt={props.data.title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {returnDescription(props.data.description)}
          </Typography>
        </CardContent>
        <CardActions>
          <Box sx={{ flexGrow: 1 }}>
            <Button variant="text" size="small">
              <AttachMoneyIcon />
              {props.data.price}
            </Button>
            <Button
              variant="outlined"
              color="success"
              size="small"
              onClick={() => {
                openProduct(props.data.id);
              }}
            >
              Add
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
