import React, { useState } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
import { useMediaQuery } from 'react-responsive'
import { registerService } from '../Services/AuthServices';
export default function Register() {
      const [username, setUsername] = useState()
      const [email, setMail] = useState()
      const [pass, setPass] = useState()
      const isDesktopOrLaptop = useMediaQuery({
            query: '(min-device-width: 1224px)'
      })
      const layout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 5 },
      };
      const tailLayout = {
            wrapperCol: {
                  offset: 2, span: 30
            }
      };

      return (
            <div
                  style={{
                        display: "flex",

                        paddingTop: '30vh',
                        alignText: "center",
                        flexDirection: "column",
                        justifyContent: "center",


                  }}
            >
                  <h1
                        style={{
                              alignSelf: "center"
                        }}
                  > Créer votre nouveau compte</h1>
                  <Form
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 15 }}
                        layout="horizontal"
                        className="Form"



                  >
                        <Form.Item
                              className="itemInput"
                        >


                        </Form.Item>

                        <Form.Item label="Nom d'utlisateur"
                              className="itemInput"
                              name="user"
                              rules={[{
                                    required: true, message: "Veuillez enter votre no d'utilisateur"
                              }]}
                        >
                              <Input
                                    onChange={(e) => {
                                          setUsername(e.target.value)
                                    }}
                              />
                        </Form.Item>
                        <Form.Item label="Email"
                              className="itemInput"
                              name="email"
                              rules={[{ required: true, message: 'Veuillez enter votre email' }]}
                        >
                              <Input
                                    onChange={(e) => {
                                          setMail(e.target.value)
                                    }}
                              />
                        </Form.Item>
                        <Form.Item label="Mot de passe"
                              name="password"
                              className="itemInput"
                              rules={[{ required: true, message: 'Veuillez enter votre email' }]}
                        >
                              <Input.Password
                                    type="email"
                                    onChange={(e) => {
                                          setPass(e.target.value)
                                    }}
                              />
                        </Form.Item>
                  </Form>

                  <Button type="primary" htmlType="submit"

                        style={{
                              alignSelf: "center",
                              marginRight: isDesktopOrLaptop ? '19%' : 0

                        }}
                        onClick={() => {
                              registerService(username, pass, email).then(res => {
                                    window.location.replace('/')
                              })
                        }}
                  >
                        S'inscrire

                  </Button>

            </div >
      )
}