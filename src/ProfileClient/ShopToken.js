import React from 'react'
import { Grid } from '@material-ui/core';
import ShopingToken from '../SvgExport/ShopingToken';

export default function ShopToken() {
      return (
            <div
                  style={{
                        paddingTop: 100
                  }}
            >
                  <Grid container
                        fluid
                        justify="center"

                        xs={12}


                  >
                        <Grid xs={12} md={4} style={{
                              textAlign: "center"
                        }}>
                              <ShopingToken></ShopingToken>

                        </Grid>
                        <Grid xs={12} md={4} style={{
                              textAlign: "center"
                        }}>
                              <ShopingToken></ShopingToken>

                        </Grid>
                        <Grid xs={12} md={4} style={{
                              textAlign: "center"
                        }}>
                              <ShopingToken></ShopingToken>

                        </Grid>
                        <Grid xs={12} md={4} style={{
                              textAlign: "center"
                        }}>
                              <ShopingToken></ShopingToken>

                        </Grid>
                        <Grid xs={12} md={4} style={{
                              textAlign: "center"
                        }}>
                              <ShopingToken></ShopingToken>

                        </Grid>
                        <Grid xs={12} md={4} style={{
                              textAlign: "center"
                        }}>
                              <ShopingToken></ShopingToken>

                        </Grid>







                  </Grid>
            </div >
      )
}
