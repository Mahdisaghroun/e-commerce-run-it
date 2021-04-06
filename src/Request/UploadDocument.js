
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadDocument = () =>
(
      <div
            style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",

                  justifyContent: "center",



            }}
      >
            <h1
                  style={{
                        textAlign: "center",
                  }}
            >Félicitations, votre demande a été envoyée avec succès.</h1>

            <div

                  style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        width: '50%',
                        justifyContent: "center",
                        alignSelf: "center"


                  }}
            >
                  <b
                        style={{
                              textAlign: "left",
                              marginTop: 50,
                              marginBottom: 50,
                              color: 'red'
                        }}
                  >Afin que cet envoi puisse être effectué dans les meilleures conditions possibles,
vous veuillez nous envoyé certains document nécessaires .</b>
                  <div className="shadowDiv"

                        style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              marginTop: "2vh"

                        }}
                  >
                        <span

                        > Copie CIN</span>
                        <Upload
                              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                              listType="picture"

                        >
                              <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                  </div>
                  <div className="shadowDiv"
                        style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              marginTop: "2vh"

                        }}
                  >
                        <span

                        > Copie de matricule fiscale</span>
                        <Upload
                              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                              listType="picture"

                        >
                              <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                  </div>
                  <div className="shadowDiv"
                        style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              marginTop: "2vh"

                        }}
                  >
                        <span

                        > Copie de contrat</span>
                        <Upload
                              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                              listType="picture"

                        >
                              <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                  </div>
                  <p
                        style={{
                              textAlign: "left",
                              marginTop: 50,

                        }}
                  >Ou bien vous pouvez envoyé ces documents aux administrateurs sur :<br></br>
                        <span style={{ color: 'red' }}>xxxxxxx@xxx.com</span>
                  </p>

            </div>


      </div >

);

export default UploadDocument