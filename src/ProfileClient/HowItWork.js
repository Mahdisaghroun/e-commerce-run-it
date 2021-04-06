import React from 'react'
import { Grid } from '@material-ui/core';
import './How.css'
import StepHow from '../SvgExport/StepHow';
export default function HowItWork() {
      return (
            <div
                  style={{
                        padding: 100
                  }}
            >
                  <Grid container
                        className="conHow"
                        xs={12}
                  >
                        <Grid className="grid1" xs={12} md={6}> <span className=" titleHow">Comment ca marche  ?</span><br></br>
                              <span className="titleHow2">C'est simple veuillez suivre les étapes suivantes pour participer à votre produit aimé</span>
                        </Grid>
                        <Grid className="grid2" xs={12} md={6}><img src="undraw_Select_option_re_u4qn.svg" className="imgHow"></img></Grid>
                        <Grid xs={12}

                        >
                              <StepHow title1="Créer votre compte dans" title2="quelques secondes" number="1"></StepHow>
                        </Grid>
                        <Grid xs={12}
                              style={{
                                    textAlign: "end"
                              }}
                        >
                              <StepHow title1="Recharger votre compte par" title2="des jetons en simple clic " number="2"></StepHow>
                        </Grid>
                        <Grid xs={12}

                        >
                              <StepHow title1="Choisir le produit que vous " title2="voulez et faire une participation" number="3"></StepHow>
                        </Grid>
                        <Grid xs={12}
                              style={{
                                    textAlign: "end"


                              }}
                        >
                              <StepHow title1="Attendre jusqu'à  le nombre" title2="prévu de jetons pour le produit
" number="4" title3="est atteint"></StepHow>
                        </Grid>
                  </Grid>
            </div >
      )
}
