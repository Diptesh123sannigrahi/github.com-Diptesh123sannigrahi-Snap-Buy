import React from "react";
import { IconButton, Grid, Typography, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const CartItem = (props) => {
  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = (id) => { //automatically binds event handler with this
  //     this.setState({ count: this.state.count + 1 }); // make the update aware to the React
  //     // console.log('Increment Clicked', this);
  // };

  // doHandleIncrement = () => {
  //     this.handleIncrement({ id: this.props.id });
  // };

  // renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  // }
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      <Grid item>
        <img
          src={props.counter.image}
          alt={props.counter.name}
          width="85"
          height="70"
        />
      </Grid>
      <Grid item>
        <Typography variant="h7">{props.counter.name}</Typography>
      </Grid>
      <Grid item>
        <IconButton onClick={() => props.onIncrement(props.counter)}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Grid>
      <Grid item>{props.counter.value}</Grid>
      <Grid item>
        <IconButton onClick={() => props.onDecrement(props.counter)}>
          <RemoveCircleOutlineIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <Button
          variant="text"
          disableRipple
          disableElevation
          disableTouchRipple
        >
          <AttachMoneyIcon />
          <Typography variant="h6">{props.counter.totalCost}</Typography>
        </Button>
      </Grid>
      <Grid item>
        <IconButton
          color="error"
          onClick={() => props.onDelete(props.counter.id)}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          sx={{ color: "green" }}
          onClick={() => props.onBuy(props.counter.id)}
        >
          <ShoppingCartIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CartItem;
