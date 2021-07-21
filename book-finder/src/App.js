import {
  Container,
  Grid,
  TextField,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Book from "./components/Book";
import library from "./library.jpg";

const useStyles = makeStyles({
  root: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url(${library})`,
    width: "100%",
    height: "60vh",
    backgroundOrigin: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  inputStyle: {
    backgroundColor: "#ffffff",
    color: "#181818",
    verticalAlign: "middle",
    width: "100%",
  },
  button: {
    padding: ".8rem",
    width: "100%",
    margin: "1rem 0",
  },
  form: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
});

function App() {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value;
    setQuery(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query === "") {
      alert("input cannot be empty");
      return;
    }

    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${query}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBooks(data.items);
      });

    setQuery("");
  };

  return (
    <React.Fragment>
      <Box className={classes.root} component="div">
        <Grid container>
          <Grid item xs={12} md={12}>
            <form
              className={classes.form}
              style={{ textAlign: "center" }}
              onSubmit={handleSubmit}
            >
              <TextField
                className={classes.inputStyle}
                id="standard-basic"
                label="Book title"
                value={query}
                onChange={handleChange}
              />
              <Button
                className={classes.button}
                type="submit"
                color="primary"
                variant="contained"
              >
                Search
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>

      <Container maxWidth="md">
        <Book books={books} />
      </Container>
    </React.Fragment>
  );
}

export default App;
