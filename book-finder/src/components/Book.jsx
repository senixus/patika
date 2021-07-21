import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
import NoCover from "../no_book_cover.jpg";
import Modal from "./Modal";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  gridMargin: {
    marginTop: "5rem",
    marginBottom: "2rem",
  },
  image: {
    height: "300px",
    objectFit: "cover",
    width: "100%",
  },
});

const Book = ({ books }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState({});

  const handleClickOpen = (book) => {
    setBook(book);
    setOpen(true);
    console.log(book);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Modal book={book} handleClose={handleClose} open={open} />
      <Grid container spacing={3} className={classes.gridMargin}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={book.id}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.image}
                  component="img"
                  alt="Contemplative Reptile"
                  image={book.volumeInfo.imageLinks?.thumbnail || NoCover}
                  title={book.volumeInfo.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="h2">
                    {book.volumeInfo.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {book.volumeInfo.authors[0]}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() => handleClickOpen(book)}
                  size="small"
                  color="primary"
                >
                  Detail
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Book;
