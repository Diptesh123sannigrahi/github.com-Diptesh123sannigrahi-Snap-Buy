import React from "react";
import { Button } from "@mui/material";

const Counter = (props) => {
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
    <div>
      {props.counter.name}
      {props.counter.value}
      {/* <img src={this.state.imageUrl} alt="" /> */}
      <Button onClick={() => props.onIncrement(props.counter)}>
        Increment
      </Button>
      <Button onClick={() => props.onDelete(props.counter.id)}>Delete</Button>
    </div>
  );
};

export default Counter;
