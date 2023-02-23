import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./ProductComp/Product";
import { Grid, Box, Container } from "@mui/material";
import "./Products.css";

const Products = () => {
  const [post, setPost] = useState(() => {
    return [];
  });

  const [counter, setCounter] = useState(() => {
    return [];
  });

  const [search, setSearch] = useState(() => {
    return "";
  });
  const baseURL = "https://fakestoreapi.com/products?limit=15";

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
    if (localStorage.getItem("items") === null) {
      localStorage.setItem("items", JSON.stringify(counter));
      setCounter(counter);
    } else {
      setCounter(JSON.parse(localStorage.getItem("items")));
    }
  }, [counter]);

  useEffect(() => {
    getData();
    //console.log(post);
  }, [post]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const newPost = post.filter((c) =>
    c.category.toLowerCase().includes(search.toLowerCase())
  );

  if (!post) return null;

  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <div className="product-search">
          <h1 className="product-test">Search Products</h1>
          <form>
            <input
              type="text"
              placeholder="Search"
              className="product-input"
              onChange={handleChange}
            />
          </form>
        </div>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {newPost.map((data) => (
            <Product key={data.id} data={data} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
