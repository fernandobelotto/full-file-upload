import  { useState } from 'react'
import axios from 'axios';


export function FileUpload() {
    const [file, setFile] = useState();

    const saveFile = (e: any) => {
      setFile(e.target.files[0]);
    };

    const uploadFile = async () => {
        if(file) {
          const formData = new FormData();
          formData.append("file", file);
          try {
            const res = await axios.post(
              "http://localhost:3001/",
              formData
            );
            console.log(res);
          } catch (ex) {
            console.log(ex);
          }
        }
    };


    return (
      <>
        <input type="file" onChange={saveFile} />
        <button onClick={uploadFile}>Upload</button>
      </>
    );
}