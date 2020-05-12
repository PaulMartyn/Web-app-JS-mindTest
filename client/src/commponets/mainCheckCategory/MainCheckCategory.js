import React from "react";
import { Category } from "./Category";
import Grid from '@material-ui/core/Grid';


function MainCheckCategory() {
  return (
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {[0, 1, 2, 3, 4, 5].map((value) => (
              <Grid key={value} item>
                <Category />
              </Grid>
            ))}
          </Grid>
        </Grid>
  );
}

export default MainCheckCategory;
