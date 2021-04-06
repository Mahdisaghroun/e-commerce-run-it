
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
const NextForm = () => (
      <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            className="Form"



      >

            <Form.Item label="Gouvernorat"
                  className="itemInput"
            >
                  <Input

                  />
            </Form.Item>
            <Form.Item label="Région"
                  className="itemInput"
            >
                  <Input

                  />
            </Form.Item>
            <Form.Item label="Adresse"
                  className="itemInput"
            >
                  <Input

                  />
            </Form.Item>



            <Form.Item label="CIN"
                  className="itemInput"
            >
                  <Input

                  />
            </Form.Item>



      </Form>
)
export default NextForm