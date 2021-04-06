import React, { useState } from 'react'
import './PartenarReq.css';
import Stepper from 'react-stepper-horizontal'
import {
      Form,

      Button,

} from 'antd';
import FormGeneral from './FormGeneral';
import BoutiqueForm from './BoutiqueForm';
import NextForm from './NextForm';
import UploadDocument from './UploadDocument';
export default function PointDVReq() {
      const [step, setstep] = useState(1)
      const steps =
            [
                  {
                        title: 'Informations génerales'
                  },
                  {
                        title: 'Informations complémentaire'
                  }



            ]

      return (
            <div
                  style={{
                        paddingTop: 100
                  }}
            >
                  {step < 3 && <h1
                        style={{
                              textAlign: "center"
                        }}
                  >Demande de point de vente</h1>}
                  {step == 3 &&
                        <UploadDocument ></UploadDocument>
                  }
                  {step < 3 && < Stepper
                        steps={steps} activeStep={step - 1}
                        className="stepper"

                        titleFontSize={18}

                  />}
                  <div
                        style={{
                              textAlign: "center",
                              marginTop: 50

                        }}
                  >
                        {step == 1 && < FormGeneral />}
                        {step == 2 && < NextForm />}

                        <Form.Item
                              style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center"
                              }}
                        >
                              {step < 3 && <Button
                                    onClick={
                                          () => {
                                                setstep(step + 1)
                                          }
                                    }
                              >Suivant</Button>}
                        </Form.Item>
                  </div>
            </div >
      )
}
