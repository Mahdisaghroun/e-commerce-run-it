import React, { useState } from 'react'
import './PartenarReq.css';
import Stepper from 'react-stepper-horizontal'
import {
      Form,
      Input,
      Button,
      Radio,
      Select,
      Cascader,
      DatePicker,
      InputNumber,
      TreeSelect,
      Switch,
} from 'antd';
import FormGeneral from './FormGeneral';
import BoutiqueForm from './BoutiqueForm';
import NextForm from './NextForm';
import UploadDocument from './UploadDocument';
export default function PartenarReq() {
      const [step, setstep] = useState(1)
      const steps =
            [
                  {
                        title: 'Informations génerales'
                  },
                  {
                        title: 'Informations complémentaire'
                  },
                  {
                        title: 'Ajouter votre boutique'
                  },


            ]

      return (
            <div
                  style={{
                        paddingTop: 100
                  }}
            >
                  {step < 4 && <h1
                        style={{
                              textAlign: "center"
                        }}
                  >Demande de partenariat</h1>}
                  {step == 4 &&
                        <UploadDocument ></UploadDocument>
                  }
                  {step < 4 && < Stepper
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
                        {step == 3 && < BoutiqueForm />}
                        <Form.Item
                              style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center"
                              }}
                        >
                              {step < 4 && <Button
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
