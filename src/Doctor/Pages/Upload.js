// import React from "react";
// // import logo from "./logo.svg";
// // import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";

// const ReactDOM = require("react-dom");


// export default class Upload extends React.Component {
//   constructor(props) {
//     super(props);
//     this.test = this.test.bind(this);
//     this.state = {
//       fileUploadOngoing: false
//     };
//   }

//   test() {
//     console.log(
//       "Test this.state.fileUploadOngoing=" + this.state.fileUploadOngoing
//     );
//     this.setState({
//       fileUploadOngoing: true
//     });

//     const fileInput = document.querySelector("#fileInput");
//     const formData = new FormData();

//     formData.append("Name", fileInput.files[0]);
//     formData.append("test", "StringValueTest");

//     const options = {
//       method: "POST",
//       body: formData,
//     //   If you add this, upload won't work// 
//      headers: { 'Content-Type': 'multipart/form-data', }
//     };
//     fetch("http://www.infintrixindia.com/FlexAlignApi/FlexAlign.svc/UploadPhotos", options);
//   }
//   render() {
//     console.log("this.state.fileUploadOngoing=" + this.state.fileUploadOngoing);
//     return (
//       <div><input id="fileInput" type="file" name="file" /><Button onClick={this.test} variant="primary">
//           Primary
//         </Button>

//         {this.state.fileUploadOngoing && (
//           <div><h1> File upload ongoing abc 123</h1>
//             {console.log(
//               "Why is it printing this.state.fileUploadOngoing=" +
//                 this.state.fileUploadOngoing
//             )}
//           </div>
//         )}

//       </div>
//     );
//   }
// }