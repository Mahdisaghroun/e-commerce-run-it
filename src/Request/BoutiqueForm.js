
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
const { Option } = Select;
const topics = [
      " Superette",
      " Maison & Bureau",
      "Santé & Beauté",
      "  Téléphone & Tablette",
      " Mode",
      " Informatique",
      "  Électroniques",
      " Jeux vidéos & Consoles",
      " Articles de sport",
      "   Auto & Moto",
      "  Jardin & Plein air",
      " Autres catégories"
]
const children = [];
topics.map((item, i) => {

      children.push(<Option key={i}>{item}</Option>)
})


const BoutiqueForm = () => (
      <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            className="Form"



      >
            <Form.Item label="Nom de boutique"
                  className="itemInput"
            >
                  <Input

                  />
            </Form.Item>
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



            <Form.Item label="Catégories "
                  className="itemInput"
            >
                  <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Sélectionner les catégories de vos produits"


                  >
                        {children}
                  </Select>


            </Form.Item>



      </Form>
)
export default BoutiqueForm