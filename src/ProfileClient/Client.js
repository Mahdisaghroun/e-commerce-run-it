import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core';
import CardProduct from '../SvgExport/CardProduct'
import { Button } from 'antd';
import Carousel from 'react-material-ui-carousel'
export default function Client() {
      function Item(props) {
            return (
                  <Paper style={{
                        height: 300,
                        backgroundImage: "url(https://loremflickr.com/320/240) ",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover",


                  }
                  }>

                        <h2
                              style={{
                                    color: "white",
                                    fontFamily: "Roboto",
                                    marginTop: 50
                              }}
                        >{props.item.name}</h2>
                        <p
                              style={{
                                    color: "white",
                                    fontFamily: "Roboto",
                                    justifySelf: "flex-end"
                              }}>{props.item.description}</p>

                        <Button

                              style={{
                                    borderWidth: 1,
                                    borderColor: "red",
                                    height: 50,
                                    color: "red",
                                    backgroundColor: "red",
                                    textAlign: "center",
                                    alignSelf: 'flex-end',
                                    justifySelf: "flex-end",
                                    marginTop: 150
                              }}
                        >Voir Plus</Button>
                  </Paper >
            )
      }
      var items = [
            {
                  name: "Random Name #1",
                  description: "Probably the most random thing you have ever seen!"
            },
            {
                  name: "Random Name #2",
                  description: "Hello World!",
                  image: "https://loremflickr.com/320/240"
            }
      ]

      return (
            <div
                  style={{
                        padding: "100"
                  }}
            >

                  <Typography style={{
                        marginTop: 20,
                        fontSize: 30
                  }}>
                        Dernières ventes
                        </Typography>
                  <Grid xs={12}
                        container
                        direction="row"
                        justify="space-between"
                  >

                        <Grid xs={3}>
                              <Carousel fullHeightHover={true}
                                    navButtonsAlwaysInvisible={true}
                                    className="carous"
                                    style={{
                                          marginTop: 50
                                    }}

                              >
                                    {
                                          items.map((item, i) => <Item key={i} item={item} />)
                                    }
                              </Carousel>


                        </Grid>
                        <Grid xs={3}>
                              <Carousel>
                                    {
                                          items.map((item, i) => <Item key={i} item={item} />)
                                    }
                              </Carousel>

                        </Grid>
                        <Grid xs={3}>
                              <Carousel>
                                    {
                                          items.map((item, i) => <Item key={i} item={item} />)
                                    }
                              </Carousel>

                        </Grid>
                  </Grid>
                  <Grid xs={12}>
                        <Carousel>
                              {
                                    items.map((item, i) => <Item key={i} item={item} />)
                              }
                        </Carousel>
                  </Grid>
                  <Typography style={{
                        marginTop: 20,
                        fontSize: 30
                  }}>
                        Ne ratez pas votre chance !
                        </Typography>
                  <Grid container
                        fluid
                        justify="center"
                        alignContent="center"
                        xs={12}
                        style={{
                              padding: 20
                        }}
                  >
                        <Grid xs={12} md={4}
                              alignItems="center"
                        >
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>

                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                  </Grid>
                  <Grid xs={12}>
                        <Typography style={{
                              marginTop: 20,
                              fontSize: 30
                        }}>
                              Nouveautés
                        </Typography>
                  </Grid>
                  <Grid container
                        justify="center"
                        alignContent="center"
                        xs={12}
                        style={{
                              padding: 50
                        }}
                  >
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                        <Grid xs={4}>
                              <CardProduct></CardProduct>
                        </Grid>
                  </Grid>
            </div >
      )
}
