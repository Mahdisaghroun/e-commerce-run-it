
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
const FormGeneral = () => (
      <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            className="Form"



      >

            <Form.Item label="Nom"
                  className="itemInput"
            >
                  <Input

                  />
            </Form.Item>
            <Form.Item label="Prénom"
                  className="itemInput"
            >
                  <Input

                  />
            </Form.Item>
            <Form.Item label="Téléphone"
                  className="itemInput"
            >
                  <Input

                  />
            </Form.Item>



            <Form.Item label="Date de naissance"
                  className="itemInput"
            >
                  <DatePicker locale="fr"
                        style={{
                              width: "100%"
                        }}
                        placeholder="Sélectionner votre date de naissance"
                  />
            </Form.Item>



      </Form>
)
export default FormGeneral