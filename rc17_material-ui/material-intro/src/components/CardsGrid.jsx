import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import data from "../data";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

export default function MediaCard() {
  return (
    <Container>
      <Typography variant="h4" align="center" color="error" mt={4}>
        CARDS & GRIDS
      </Typography>
      <Grid container spacing={3}>
        {data.map((card) => {
          const { id, name, text, img } = card;
          return (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia component="img" image={img} alt="name" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}