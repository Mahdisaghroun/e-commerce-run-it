import React from 'react'
import { Grid } from '@material-ui/core';
import './ViewProduct.css'
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import Carousel from 'react-material-ui-carousel'
import ProgressBar from 'react-animated-progress-bar';
import CardProduct from '../SvgExport/CardProduct'
import ScrollMenu from 'react-horizontal-scrolling-menu';
export default function ViewProduct() {
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
      function Item(props) {
            return (
                  <img src={props.item.image} className="imgProduct">


                  </img>

            )
      }
      var items = [
            {
                  image: "https://images-na.ssl-images-amazon.com/images/I/41B642%2B-yXL._SY455_.jpg"
            },
            {

                  image: "https://media.karousell.com/media/photos/products/2018/09/19/wtt_iphone_8_plus_red_256gb_for_iphone_x_64gb_1537355769_d0b9f4d5_progressive.jpg"
            },
            {

                  image: "https://i5.walmartimages.com/asr/ba12a756-70c4-42b6-af59-eb52d03d540d_1.520898e69c09bf9163133e4fa5057871.jpeg"
            }

      ]

      return (
            <div
                  style={{
                        paddingTop: 100
                  }}
            >



                  <Grid
                        container
                        xs={12}
                        direction="row"
                  >
                        <Grid xs={12} md={4}
                              justify="center"
                        >
                              <Carousel>
                                    {
                                          items.map((item, i) => <Item key={i} item={item} />)
                                    }
                              </Carousel>

                              <h2
                                    style={{
                                          textAlign: "center",

                                    }}
                              >Iphone X RED </h2>

                        </Grid>
                        <Grid xs={12} md={4}>
                              <h2 className="Title">Description</h2>
                              <span
                                    className='desc'
                              >loremEx sint aliquip non qui fugiat. Amet ea esse minim non excepteur cillum ipsum. Sunt Lorem fugiat esse sit consectetur nulla enim sit ut. Nulla minim mollit officia magna amet excepteur eu magna velit laboris pariatur culpa irure.

                                    Nostrud nostrud elit exercitation ea adipisicing sunt labore laboris ut id et enim ut. Labore velit eiusmod aliquip nostrud est aliqua adipisicing ad deserunt. Incididunt magna dolor excepteur ex id amet nisi est tempor do. Do dolore commodo nostrud sit sit incididunt occaecat laboris.

Consequat veniam non ut et. Commodo occaecat nisi officia cillum cupidatat pariatur laborum qui. Irure commodo laborum tempor dolore sint occaecat enim eu excepteur est laboris sit.</span><br></br><br></br>
                              <h4 className="sousTitle">Catégorie</h4>
                              <span>Téléphone et portables</span><br></br><br></br>
                              <h4
                                    className="sousTitle"
                              > Boutique</h4>
                              <span>XXXXX</span>


                        </Grid>
                        <Grid

                              xs={12} md={4}
                              style={{
                                    textAlign: "center",
                                    alignItems: "center"
                              }}
                        >
                              <h4
                                    className="price"
                              >1200DT</h4>
                              <h4
                                    className="courant"
                              >2000/2800&nbsp;jetons</h4>
                              <div
                                    style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          justifyContent: "center"

                                    }}
                              > <ProgressBar width="230" trackWidth="20" percentage="60"
                                    style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          justifyContent: "center",
                                    }}
                                    fontColor="#FC9904"
                                    hollowBackgroundColor="white"
                                    defColor={{

                                          fair: '#FC9904',
                                          good: '#FC9904',
                                          excellent: '#FC9904',
                                          poor: '#FC9904',
                                    }}
                                    /></div>
                              <div
                                    style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          justifyContent: "center",
                                    }}
                              >
                                    <img src="poker-piece.png"
                                          className="imgToken"
                                    ></img>
                                    <h5
                                          className=" tokenNumber"
                                    >30</h5>
                              </div>
                              <button
                                    className="btnPar"
                              >Participer</button>
                        </Grid>
                  </Grid>


                  <Grid>
                        <h1
                              style={{
                                    fontFamily: "Lato Black"
                              }}
                        >Produit Similaire</h1>

                        <Grid xs={12}>
                              <ScrollMenu
                                    translate={-500}
                                    transition={2}
                                    innerWrapperStyle={{
                                          border: "0px blue solid"
                                    }}
                                    innerWrapperClass="menu-item-wrapper"
                                    wrapperClass="menu-item-wrapper"
                                    data={
                                          list.map((item, i) => <CardProduct key={i}></CardProduct>)
                                    }
                                    arrowRight={
                                          <RightCircleOutlined style={{
                                                fontSize: 30
                                          }} />
                                    }
                                    arrowLeft={
                                          <LeftCircleOutlined style={{
                                                fontSize: 30
                                          }} />
                                    }

                              />
                        </Grid>
                  </Grid>




            </div >
      )
}
