import React,{useState} from "react";
import {Form,Button} from "react-bootstrap";
import axios from "axios";

function Upload(){

    const [state, setState] = useState({
        fileContent:null
        
    })

const onChange=(e)=>{
    setState({
        fileContent:e.target.files[0]
    })
    console.log(e.target.files[0]);
}

const uploadHandler=()=>{

     const fd=new FormData();
     fd.append("fileContent",state.fileContent);
     fd.append("Name",state.fileContent.name);
    axios.post("http://infintrix.in/FlexAlignApi/FlexAlign.svc/UploadPhotos",fd,{
        onUploadProgress:ProgressEvent=>{
            console.log("Upload Progress:"+ Math.round(ProgressEvent.loaded/ProgressEvent.total*100)+"%");
        }
    })
    .then(res=>{
        console.log(res);
    });
   

}
    return(
        <>
        <input type="file" onChange={onChange} name="Name"/>
        <Button onClick={uploadHandler}>upload</Button>
        </>
    );
}


export default Upload;