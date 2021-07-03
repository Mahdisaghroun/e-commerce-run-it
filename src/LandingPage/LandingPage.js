import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import './LandingPage.css'
import { Grid, h2, Paper } from '@material-ui/core';
import CardProduct from '../SvgExport/CardProduct'
import { Button } from 'antd';
import ScrollMenu from 'react-horizontal-scrolling-menu';
//import HorizontalSlider from 'react-horizontal-slider'
import Carousel from 'react-material-ui-carousel'
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
export default function LandingPage() {

      const [productList, setProductList] = useState([])
      useEffect(() => {
            function fetching() {


                  var config = {
                        method: 'get',
                        url: 'http://ed1f321ae5a3.ngrok.io/',
                        headers: {
                              'Content-Type': 'application/json'
                        },

                  };

                  axios(config)
                        .then(function (response) {
                              setProductList([...productList, response.data])
                              console.log(response.data)
                        })
                        .catch(function (error) {
                              console.log(error);
                        });



            }
            fetching()
      }, [])
      function Item(props) {

            return (
                  <Paper style={{
                        height: 300,
                        backgroundImage: "url(https://loremflickr.com/320/240) ",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover",
                        objectFit: "contain"


                  }
                  }>

                        <h2
                              style={{
                                    color: "white",

                                    marginTop: 50
                              }}
                        >{props.item.name}</h2>
                        <p
                              style={{
                                    color: "white",

                                    justifySelf: "flex-end"
                              }}>{props.item.description}</p>

                        <Button

                              style={{
                                    borderWidth: 1,
                                    borderColor: "#fff",
                                    height: 50,
                                    color: "white",
                                    backgroundColor: "#fff",
                                    textAlign: "center",
                                    alignSelf: 'flex-end',
                                    justifySelf: "flex-end",
                                    marginTop: 150,
                                    fontSize: 20,

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
      const list = [
            { name: 'item1' },
            { name: 'item2' },
            { name: 'item3' },
            { name: 'item4' },
            { name: 'item5' },
            { name: 'item6' },
            { name: 'item7' },
            { name: 'item8' },
            { name: 'item9' }
      ];

      return (
            <div className="content">

                  <h2 style={{
                        marginTop: 20,
                        fontSize: 30,
                  }}>
                        Dernières ventes
                  </h2>
                  <Grid xs={12}
                        container
                        direction="row"
                        justify="space-between"
                  >

                        <Grid xs={12} md={3}

                        >
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
                        <Grid xs={12} md={3}>
                              <Carousel fullHeightHover={true}
                                    navButtonsAlwaysInvisible={true}
                                    className="carous"
                                    style={{
                                          marginTop: 50
                                    }}>
                                    {
                                          items.map((item, i) => <Item key={i} item={item} />)
                                    }
                              </Carousel>

                        </Grid>
                        <Grid xs={12} md={3}>

                              <Carousel fullHeightHover={true}
                                    navButtonsAlwaysInvisible={true}
                                    className="carous"
                                    style={{
                                          marginTop: 50
                                    }}>
                                    {
                                          items.map((item, i) => <Item key={i} item={item} />)
                                    }
                              </Carousel>

                        </Grid>
                  </Grid>
                  <Grid xs={12}>

                  </Grid>
                  <h2 style={{
                        marginTop: 20,
                        fontSize: 30
                  }}>
                        Ne ratez pas votre chance !
                  </h2>
                  <Grid container
                        fluid
                        justify="center"
                        alignContent="center"
                        xs={12}



                  >
                        {productList.map((prod, i) => (
                              <Grid xs={12} md={4}
                                    alignItems="center"
                                    key={i}
                              >
                                    <motion.div
                                          whileHover={{ scale: 1.1 }}

                                    >
                                          <CardProduct prod={prod}></CardProduct>
                                    </motion.div>

                              </Grid>
                        ))}

                  </Grid>
                  <Grid xs={12}>
                        <h2 style={{
                              marginTop: 20,
                              fontSize: 30
                        }}>
                              Nouveautés
                        </h2>
                  </Grid>
                  <Grid container
                        justify="center"
                        alignContent="center"
                        xs={12}

                  >


                        {productList.map((prod, i) =>
                        (<Grid xs={12} md={4}
                              key={i}
                              alignItems="center"
                        >
                              <motion.div
                                    whileHover={{ scale: 1.1 }}

                              >
                                    <CardProduct prod={prod}></CardProduct>
                              </motion.div>



                        </Grid>)
                        )}

                  </Grid>
            </div >
      )
}
