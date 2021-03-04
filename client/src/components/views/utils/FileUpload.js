import React from 'react'
import Dropzone from 'react-dropzone'
import {Icon} from 'antd';
import axios from 'axios';

//frontend 에서 파일을back end 에 전달을하고 backend 에서는 파일을 저장한다 이를위해 multer이 필요하며  파일저장정보를 front end 로 전달해준다 .
//전해주기위해서 axios 사용
function FileUpload() {
   
   
    const dropHandler=(files)=>{
        
        let formData = new FormDate();
        const config = {

            header:{'content-type':'multipart/form-data'}
        }
    
        formData.append("file",files[0])

        axios.post('/api/product/image',formData,config)//fort에서만 할것들 처리 
        .ten(reasponse=>{
            if(response.data.success){

            }else{
                alert("파일을 저장하는데 실패했습니다.")
                    
            }

        })
        //formData와 config를 같이 넣어주지않으면 오류가 발생 
        }
    }




    return (
        <div style ={{display: 'flex', justifyContent:'space-between'}}>
            <Dropzone onDrop={dropHandler}>
            {({getRootProps, getInputProps}) => (
                <section>
                    style={{
                        width: 300 ,height: 240, border: '1px solid lightgray',
                        disply: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                     {...getRootProps()}
                        <input{...getInputProps()}/>
                        <Icon type= "plus" style= {{fontSize: '3rem'}}/>
                   
                </section>        
            )}
            </Dropzone>
        </div>
    )


export default FileUpload
