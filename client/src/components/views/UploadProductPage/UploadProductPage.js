import React, { useState } from 'react'
import { Typograpy, Button, Form, Input } from 'antd';


//const {Title} = Typograpy;
const { TextArea } = Input;

const Contienets = [

    { key: 1, value: "Africa" },
    { key: 2, value: "Europe" },
    { key: 3, value: "Asia" },
    { key: 4, value: "North America" },
    { key: 5, value: "South America" },
    { key: 6, value: "Australia" },
    { key: 7, value: "Antarctica" }
    //아래에서 Option으로 하나하나 주기보다 위에서 정의해주고 map 메소드를 이용한다.


]

function UploadProductPage() {

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)//가격이라 0부터 시작 
    const [Contienet, setContienet] = useState(1)

    const [Image, setImage] = useState([])
    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }
    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }
    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }
    const contienetChangeHandler =(event) =>{
        setContienet(event.currentTarget.value)
        
    }
    return (
        <div style={{ maxWidth: '700px', magin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 level={2}> 여행 상품 업로드 </h2>
                {/*level 은 1 이 제일 큰size*/}

            </div>

            <Form>
                {/*Drop zone */}
                <br />
                <br />
                <label>이름</label>
                <Input onChange={titleChangeHandler} value={Title} />
                <br />
                <br />
                <label>설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description} />
                <br />
                <br />
                <label>가격($)</label>
                <Input type="number" onChange={priceChangeHandler} vaule={Price} />
                <br />
                <br />
                <select onChange= {contienetChangeHandler} value={Contienet}> 
                    {Contienets.map(itemm => (
                        <option key={itemm.key} value={Contienet}> {itemm.value} </option>
                    ))}
                </select>
                <br />
                <br />
                <Button>
                    확인
                </Button>
            </Form>
        </div>
    )
}

export default UploadProductPage
