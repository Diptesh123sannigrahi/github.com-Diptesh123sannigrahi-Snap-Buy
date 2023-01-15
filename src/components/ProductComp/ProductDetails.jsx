import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Description.css";
import { Typography, Button } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const ProductDetails = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  let params = useParams();
  const [post, setPost] = useState(() => {
    return [];
  });

  //   function capitalizeFirstLetter(string) {
  //     return string.charAt(0).toUpperCase() + string.slice(1);
  //   }

  const baseURL = "https://fakestoreapi.com/products/" + params.id;

  const getData = async () => {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="details">
      <div className="big-img">
        <img src={post.image} alt={post.title} />
      </div>

      <div className="box">
        <div className="row">
          <h2>{post.title}</h2>
          <Button varaint="text" size="large" sx={{ flexGrow: 1 }}>
            <AttachMoneyIcon />
            {post.price}
          </Button>
        </div>
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
        <Typography variant="h5">{post.category}</Typography>
        <Typography variant="body2">{post.description}</Typography>
        <button className="cart">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
