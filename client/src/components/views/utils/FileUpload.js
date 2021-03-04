import React from 'react'
import Dropzone from 'react-dropzone'
import {Icon} from 'antd';

function FileUpload() {
    return (
        <div style ={{display: 'flex', justifyContent:'space-between'}}>
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
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
}

export default FileUpload
