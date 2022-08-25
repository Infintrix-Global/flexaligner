import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  Tab,
  Form,
  InputGroup,
  Navbar,
  Dropdown,
  Card,
  Tabs,
} from "react-bootstrap";
import React, { useState, useRef } from "react";
import { TbUser } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import "../../Doctor/Styles/AddPatient.css";
import user from "../../Assets/user.png";
import logo from "../../Assets/Logoremovebg.png";
import { IoMdNotifications } from "react-icons/io";
import { FiMessageSquare, FiPower } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import axios from "axios";
  

function AddPatient() {
  const [values, setValues] = useState({
    DoctorId: 0,
    FirstName: "",
    LastName: "",
    Mi: "",
    Gender: "",
    DateofBirth: "",
    DoctorName: "",
    ClinicAddress: "",
    CaseNo: "",
    ClinicalConditions: [],
    GeneralNotes: "",
    ChiefComplaint: "",
    Quotation: "",
    UpperMidline: "",
    LowerMidline: "",
    CanineRelationshipRightClass: "",
    CanineRelationshipLeftClass: "",
    MolarRelationshipRightClass: "",
    MolarRelationshipLeftClass: "",
    Endon: "",
    Overbite: "",
    Overjet: "",
    InstructionUpperMidline: "",
    InstructionLowerMidline: "",
    InstructionOverjet: "",
    InstructionOverbite: "",
    InstructionArchForm: "",
    InstructionCanineRelationship: "",
    InstructionMolarRelationship: "",
    InstructionPosteriorCrossbite: "",
    InstructionIPR: "",
    InstructionEngagersAttachments: "",
    InstructionProcline: "",
    InstructionExpand: "",
    InstructionDistalize: "",
    DoNotMoveTheseTeeth: [],
    IWillExtractTheseTeethBeforeTreatment: [],
    LeaveTheseSpacesOpen: [],
    AdditionalInstruction: "",
    PortraitPath: sessionStorage.getItem("path"),
    PathOfDoc: sessionStorage.getItem("path1"),
    ProfileRepose: sessionStorage.getItem("pathProfileRepose"),
    XrayLeft: sessionStorage.getItem("XrayLeft"),
    UploadVideo:""
  });

  const tglContent = () => {
    let Menu = document.querySelector(".menuTab");
    if (Menu.classList.contains("collapsed")) {
      Menu.classList.remove("collapsed");
    } else {
      Menu.classList.add("collapsed");
    }
  };

  const [validated, setValidated] = useState(false);
  const navigate=useNavigate();

  var radGarph1 = document.getElementById("rGraph1");








  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);


    const fd=new FormData();
    fd.append("Name",vid.name);
    fd.append("fileContent",vid);
    console.log(vid);

    axios
    .post("https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/UploadPhotos", fd, {
      onUploadProgress: (ProgressEvent) => {
        console.log(
          "Upload Progress:" +
            Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
            "%"
        );
      },
    })
    .then((res) => {
      var arr = res.data;
      console.log(arr);
      sessionStorage.setItem("path", arr.path.toString());
    });





    const url =
      "https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/AddPatientRegistration";
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.message);
        if (result.message === "Added Successful") {
          // navigate("/view-doctors");
        }
      });

    console.log(values);

    setCurrentTab((prev) => prev + 1)
  };






  const [state, setState] = useState(null);
  const [pvs, setPvs] = useState({
    pvsScan: null,
    intraoral: null,
    models: null,
  });

  const [vid, setvid] = useState(null);

  const [state6, setState6] = useState(null);
  const [state61, setState61] = useState(null);
  const [state62, setState62] = useState(null);
  const [state63, setState63] = useState(null);




  const [state64, setState64] = useState(null);
  const [state65, setState65] = useState(null);
  const [state66, setState66] = useState(null);
  const [state67, setState67] = useState(null);


  const [state662, setstate662] = useState(null);
  const [state6621, setstate6621] = useState(null);
  const [state6622, setstate6622] = useState(null);
  const [state6623, setstate6623] = useState(null);
  const [state6624, setstate6624] = useState(null);


  const [add, setAdd] = useState(null);
  const [addExtraO, setAddExtraO] = useState(null);


  const [radio, setRadio] = useState(null);

  const [radio1, setRadio1] = useState(null);




  var portrait=document.getElementById("four1");


  const handleupload = (e) => {
    e.preventDefault();

    const fd = new FormData();

    if(portrait.checked){
    fd.append("Name", state.name);
    fd.append("fileContent", state);
    console.log(state);
    }

    // fd.append("Name",pvs.pvsScan.name);
    // fd.append("fileContent",pvs.pvsScan)
    // console.log(pvs.pvsScan);

    // // fd.append("Name",pvs.intraoral.name);
    // fd.append("fileContent",pvs.intraoral)
    // console.log(pvs.intraoral);

    // // fd.append("Name",pvs.models.name);
    // fd.append("fileContent",pvs.models)
    // console.log(pvs.models);

    // // fd.append("Name",state6.name);
    // fd.append("fileContent",state6)
    // console.log(state6);

    // fd.append("Name",state61.name);
    // fd.append("fileContent",state61)
    // console.log(state61);

    // fd.append("Name",state62.name);
    // fd.append("fileContent",state62)
    // console.log(state62);

    // // fd.append("Name",state63.name);
    // fd.append("fileContent",state63)
    // console.log(state63);

    // // fd.append("Name",state64.name);
    // fd.append("fileContent",state64)
    // console.log(state64);

    // fd.append("Name",state65.name);
    // fd.append("fileContent",state65)
    // console.log(state65);

    // // fd.append("Name",state66.name);
    // fd.append("fileContent",state66)
    // console.log(state66);

    // // fd.append("Name",state67.name);
    // fd.append("fileContent",state67)
    // console.log(state67);

    // // fd.append("Name",add.name);
    // fd.append("fileContent",add)
    // console.log(add);

    // // fd.append("Name",radio.name);
    // fd.append("fileContent",radio)
    // console.log(radio);

    // fd.append("Name",radio1.name);
    // fd.append("fileContent",radio1)
    // console.log(radio1);

    axios
      .post("https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/UploadPhotos", fd, {
        onUploadProgress: (ProgressEvent) => {
          console.log(
            "Upload Progress:" +
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%"
          );
        },
      })
      .then((res) => {
        var arr = res.data;
        console.log(arr);
        sessionStorage.setItem("path", arr.path.toString());
      });

      setCurrentTab((prev) => prev + 1)
  };

  var pvs1 = document.getElementById("five2");
  var pvs2 = document.getElementById("five3");
  var pvs3 = document.getElementById("five4");
  // var pvs1=document.getElementById("five2");
  // console.log(pvs1);

  const handleUpload1 = (e) => {
    e.preventDefault();

    const fd = new FormData();
    // fd.append("Name",pvs.pvsScan.name);
    // fd.append("fileContent",state);
    // console.log(state);
    if (pvs1.checked) {
      Array.from(pvs.pvsScan).forEach((up) => {
        fd.append("Name", up.name);
        fd.append("fileContent", up);
      });
    }

    if (pvs2.checked) {
      Array.from(pvs.intraoral).forEach((up) => {
        fd.append("Name", up.name);
        fd.append("fileContent", up);
      });
    }

    if (pvs3.checked) {
      Array.from(pvs.models).forEach((up) => {
        fd.append("Name", up.name);
        fd.append("fileContent", up);
      });
    }

    // console.log(pvs.pvsScan);
    // console.log(pvs.intraoral);
    // console.log(pvs.models);

    axios
      .post("https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/UploadPhotos", fd, {
        onUploadProgress: (ProgressEvent) => {
          console.log(
            "Upload Progress:" +
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%"
          );
        },
      })
      .then((res) => {
        var arr = res.data;
        console.log(arr);
        sessionStorage.setItem("path1", arr.path.toString());
      });

      setCurrentTab((prev) => prev + 1)
  };




  var ext=document.getElementById("ExtraNow");
  var intra=document.getElementById("IntraNow");


  const handleUpload2 = (e) => {
    e.preventDefault();

    const fd = new FormData();

    if(ext.checked){
    fd.append("Name", state6.name);
    fd.append("fileContent", state6);

    fd.append("Name",state62.name);
    fd.append("fileContent",state62)

    fd.append("Name",state65.name);
    fd.append("fileContent",state65)
    console.log(state65);

    fd.append("Name",state67.name);
    fd.append("fileContent",state67)
    console.log(state67);

    fd.append("Name",add.name);
    fd.append("fileContent",add);

    }


    if(intra.checked){
    fd.append("Name",state662.name);
    fd.append("fileContent",state662);

    fd.append("Name",state6621.name);
    fd.append("fileContent",state6621);

    fd.append("Name",state6622.name);
    fd.append("fileContent",state6622);

    fd.append("Name",state6623.name);
    fd.append("fileContent",state6623);

    fd.append("Name",state6624.name);
    fd.append("fileContent",state6624);
    console.log(state6624);
    
    fd.append("Name",addExtraO.name);
    fd.append("fileContent",addExtraO);
    }


    axios
      .post("https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/UploadPhotos", fd, {
        onUploadProgress: (ProgressEvent) => {
          console.log(
            "Upload Progress:" +
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%"
          );
        },
      })
      .then((res) => {
        var arr = res.data;
        console.log(arr);
        sessionStorage.setItem("pathProfileRepose", arr.path.toString());
      });

      setCurrentTab((prev) => prev + 1)
  };


  const handleUpload3=(e)=>{
    e.preventDefault();

    const fd = new FormData();
    if (radGarph1.checked) {
      fd.append("Name", radio.name);
      fd.append("fileContent", radio);
      console.log(radio);

      fd.append("Name",radio1.name);
      fd.append("fileContent",radio1);

    }

    axios
      .post("https://orthosquare.infintrixindia.com/FlexAlignApi/FlexAlign.svc/UploadPhotos", fd, {
        onUploadProgress: (ProgressEvent) => {
          console.log(
            "Upload Progress:" +
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%"
          );
        },
      })
      .then((res) => {
        var arr = res.data;
        console.log(arr);
        sessionStorage.setItem("XrayLeft", arr.path.toString());
      });
      setCurrentTab((prev) => prev + 1)

  }


  const submitTab1=(event)=>{
   
setCurrentTab((prev)=>prev+1)

  }

























  // const handleUpload3=(e)=>{
  //   e.preventDefault();

  // }

  const handlecheck = (e) => {
    const { value, checked } = e.target;
    const { ClinicalConditions } = values;

    // console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setValues({
        ClinicalConditions: [...ClinicalConditions, value],
        // response: [...languages, value],
      });
    }

    // Case 2 : The user unchecks the box
    else {
      setValues({
        ClinicalConditions: ClinicalConditions.filter((e) => e !== value),
        // response: languages.filter((e) => e !== value),
      });
    }
    console.log(values.ClinicalConditions);
  };

  const handleChange = (e) => {
    // to find out if it's checked or not; returns true or false
    // const checkradio = e.target.checked;

    // console.log(checkradio);

    // to get the checked value
    // const checkedValue = e.target.value;
    // console.log(checkedValue);
    // setValues({
    // ClinicalConditions:[checkedValue]
    // })
    // console.log(values.ClinicalConditions);
    const newdata = { ...values };
    newdata[e.target.name] = e.target.value;
    setValues(newdata);
    console.log(newdata);
    // console.warn(newdata);

    // to get the checked name
    // const checkedName = e.target.name;
    // console.log(checkedName);
    //then you can do with the value all you want to do with it.
  };
  const handleOndragOver = (event) => {
    event.preventDefault();
  };

  const handleOndrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFile(imageFile);
  };
  const handleOndrop71 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFileTab71(imageFile);
  };
  const handleOndrop72 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFileTab72(imageFile);
  };
  const handleOndrop1 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFile1(imageFile);
  };
  const handleOndrop2 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFile2(imageFile);
  };
  const handleOndrop3 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFile3(imageFile);
  };
  const handleOndrop4 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFile4(imageFile);
  };
  const handleOndrop5 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFile5(imageFile);
  };
  const handleOndrop6 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFile6(imageFile);
  };
  const handleOndrop7 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFile7(imageFile);
  };


  const handleOndrop662 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFile662(imageFile);
  };


  const handleOndrop6621 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFile6621(imageFile);
  };

  const handleOndrop6622 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFile6622(imageFile);
  };

  const handleOndrop6623 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFile6623(imageFile);
  };


  const handleOndrop6624 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFile6624(imageFile);
  };
  



  const handleOndropTab61 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFileTab61(imageFile);
  };
  const fileInput = useRef(null);
  const fileInputTab61 = useRef(null);
  const fileInputTab51 = useRef(null);
  const fileInputTab52 = useRef(null);
  const fileInputTab53 = useRef(null);

  const fileInput1 = useRef(null);
  const fileInput2 = useRef(null);
  const fileInput3 = useRef(null);
  const fileInput4 = useRef(null);
  const fileInput5 = useRef(null);
  const fileInput6 = useRef(null);
  const fileInput7 = useRef(null);

  const fileInput62 = useRef(null);
  const fileInput21 = useRef(null);
  const fileInput22 = useRef(null);
  const fileInput23 = useRef(null);
  const fileInput24 = useRef(null);



  const fileInputTab71 = useRef(null);
  const fileInputTab72 = useRef(null);

  const [image, setImage] = useState(null);
  const [imageTab61, setImageTab61] = useState(null);

  // const [imageTab51, setImageTab51] = useState(null);
  // const [imageTab52, setImageTab52] = useState(null);
  // const [imageTab53, setImageTab53] = useState(null);

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [image7, setImage7] = useState(null);

  const [image662, setImage662] = useState(null);
  const [image6621, setImage6621] = useState(null);
  const [image6622, setImage6622] = useState(null);
  const [image6623, setImage6623] = useState(null);
  const [image6624, setImage6624] = useState(null);



  const [imageTab71, setImageTab71] = useState(null);
  const [imageTab72, setImageTab72] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [previewUrlTab61, setPreviewUrlTab61] = useState("");
  const [previewUrl1, setPreviewUrl1] = useState("");
  const [previewUrl2, setPreviewUrl2] = useState("");
  const [previewUrl3, setPreviewUrl3] = useState("");
  const [previewUrl4, setPreviewUrl4] = useState("");
  const [previewUrl5, setPreviewUrl5] = useState("");
  const [previewUrl6, setPreviewUrl6] = useState("");
  const [previewUrl7, setPreviewUrl7] = useState("");
  const [previewUrl62, setPreviewUrl62] = useState("");
  const [previewUrl21, setPreviewUrl21] = useState("");
  const [previewUrl22, setPreviewUrl22] = useState("");
  const [previewUrl23, setPreviewUrl23] = useState("");
  const [previewUrl24, setPreviewUrl24] = useState("");


  const [previewUrlTab71, setPreviewUrlTab71] = useState("");
  const [previewUrlTab72, setPreviewUrlTab72] = useState("");

  const handleFile = (e) => {
    setImage(e);
    setPreviewUrl(URL.createObjectURL(e));
    setState(e);
    console.log(e);
  };

  const handleChangeTab6Add = (file) => {
    setAdd(file);
    console.log(file);
  };

  const handleChangeTab6AddExtraOral=(file)=>{
    setAddExtraO(file);
    console.log(file);
  }

  const handleChangeTab51 = (file) => {
    // setImageTab51(file);
    // setPreviewUrlTab51(URL.createObjectURL(file));
    setPvs({
      pvsScan: file,
    });
    console.log(file);
  };

  const handleChangeTab52 = (file) => {
    // setImageTab52(file);
    // setPreviewUrlTab52(URL.createObjectURL(file));
    var fileInput =
                document.getElementById('files');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
/(\.stl|\.dcm)$/i;
             
            if (!allowedExtensions.exec(filePath)) {
                alert('Invalid file type \nUpload .stl and .dcm files Only!');
                fileInput.value = '';
                return false;
            }
    setPvs({
      intraoral: file,
    });

    
    console.log(file);
  };


    const handleChangeVid=(file)=>{

      setvid(file);
      console.log(file);

    }






  const handleChangeTab53 = (file) => {
    // setImageTab53(file);
    // setPreviewUrlTab53(URL.createObjectURL(file));
    setPvs({
      models: file,
    });
    console.log(file);
  };

  const handleFileTab61 = (file) => {
    setImageTab61(file);
    setPreviewUrlTab61(URL.createObjectURL(file));
    console.log(file);
    setState6(file);
  };
  const handleFile1 = (file) => {
    setImage1(file);
    setPreviewUrl1(URL.createObjectURL(file));
    console.log(file);
    setState61(file);
  };
  const handleFile2 = (file) => {
    setImage2(file);
    setPreviewUrl2(URL.createObjectURL(file));
    console.log(file);
    setState62(file);
  };
  const handleFile3 = (file) => {
    setImage3(file);
    setPreviewUrl3(URL.createObjectURL(file));
    console.log(file);
    setState63(file);
  };
  const handleFile4 = (file) => {
    setImage4(file);
    setPreviewUrl4(URL.createObjectURL(file));
    console.log(file);
    setState64(file);
  };
  const handleFile5 = (file) => {
    setImage5(file);
    setPreviewUrl5(URL.createObjectURL(file));
    console.log(file);
    setState65(file);
  };
  const handleFile6 = (file) => {
    setImage6(file);
    setPreviewUrl6(URL.createObjectURL(file));
    console.log(file);
    setState66(file);
  };
  const handleFile7 = (file) => {
    setImage7(file);
    setPreviewUrl7(URL.createObjectURL(file));
    console.log(file);
    setState67(file);
  };



  const handleFile662 = (file) => {
    setImage662(file);
    setPreviewUrl62(URL.createObjectURL(file));
    console.log(file);
    setstate662(file);
  };

  const handleFile6621 = (file) => {
    setImage6621(file);
    setPreviewUrl21(URL.createObjectURL(file));
    console.log(file);
    setstate6621(file);
  };

  const handleFile6622 = (file) => {
    setImage6622(file);
    setPreviewUrl22(URL.createObjectURL(file));
    console.log(file);
    setstate6622(file);
  };

  const handleFile6623 = (file) => {
    setImage6623(file);
    setPreviewUrl23(URL.createObjectURL(file));
    console.log(file);
    setstate6623(file);
  };

  const handleFile6624 = (file) => {
    setImage6624(file);
    setPreviewUrl24(URL.createObjectURL(file));
    console.log(file);
    setstate6624(file);
  };


  const handleFileTab71 = (file) => {
    setImageTab71(file);
    setPreviewUrlTab71(URL.createObjectURL(file));
    console.log(file);
    setRadio(file);
  };
  const handleFileTab72 = (file) => {
    setImageTab72(file);
    setPreviewUrlTab72(URL.createObjectURL(file));
    console.log(file);
    setRadio1(file);
  };
  // var disppg=pg.style
  // // pg.style.display="none";
  // if(!rbutton1.checked)
  // {
  // pg.style.display="none";
  // }
  // else{
  // pg.style.display="block";
  // }
  $(document).ready(function () {
    $("input[name$='radioo']").click(function () {
      var test = $(this).val();
      $(".desc").hide();
      $("#frm" + test).show();
    });
    $("input[name$='portrait']").click(function () {
      var test = $(this).val();
      $(".desc").hide();
      $("#port" + test).show();
    });
    $("input[name$='photo']").click(function () {
      var test = $(this).val();
      $(".desc").hide();
      $("#Ph" + test).show();
    });

    $("input[name$='inPhoto']").click(function () {
      var test = $(this).val();
      $(".desc1").hide();
      $("#iPh" + test).show();
    });
    $("input[name$='graph']").click(function () {
      var test = $(this).val();
      $(".desc").hide();
      $("#G" + test).show();
    });
  });
  const handleRadio3 = (e) => {
    setValues({ UpperMidline: e.target.value });
    console.log({ UpperMidline: e.target.value });
  };
  const handleRadio31 = (e) => {
    setValues({ LowerMidline: e.target.value });
    console.log({ LowerMidline: e.target.value });
  };
  const handleInstructionUpperMidline = (e) => {
    setValues({ InstructionUpperMidline: e.target.value });
    console.log({ InstructionUpperMidline: e.target.value });
  };
  const handleInstructionLowerMidline = (e) => {
    setValues({ InstructionLowerMidline: e.target.value });
    console.log({ InstructionLowerMidline: e.target.value });
  };
  const handleInstructionOverjet = (e) => {
    setValues({ InstructionOverjet: e.target.value });
    console.log({ InstructionOverjet: e.target.value });
  };
  const handleInstructionOverbite = (e) => {
    setValues({ InstructionOverbite: e.target.value });
    console.log({ InstructionOverbite: e.target.value });
  };
  const handleInstructionArchForm = (e) => {
    setValues({ InstructionArchForm: e.target.value });
    console.log({ InstructionArchForm: e.target.value });
  };
  const handleInstructionCanineRelationship = (e) => {
    setValues({ InstructionCanineRelationship: e.target.value });
    console.log({ InstructionCanineRelationship: e.target.value });
  };
  const handleInstructionMolarRelationship = (e) => {
    setValues({ InstructionMolarRelationship: e.target.value });
    console.log({ InstructionMolarRelationship: e.target.value });
  };
  const handleInstructionPosteriorCrossbite = (e) => {
    setValues({ InstructionPosteriorCrossbite: e.target.value });
    console.log({ InstructionPosteriorCrossbite: e.target.value });
  };
  const handleInstructionIPR = (e) => {
    setValues({ InstructionIPR: e.target.value });
    console.log({ InstructionIPR: e.target.value });
  };
  const handleInstructionEngagersAttachments = (e) => {
    setValues({ InstructionEngagersAttachments: e.target.value });
    console.log({ InstructionEngagersAttachments: e.target.value });
  };
  const handleInstructionProcline = (e) => {
    setValues({ InstructionProcline: e.target.value });
    console.log({ InstructionProcline: e.target.value });
  };
  const handleInstructionExpand = (e) => {
    setValues({ InstructionExpand: e.target.value });
    console.log({ InstructionExpand: e.target.value });
  };
  const handleInstructionDistalize = (e) => {
    setValues({ InstructionDistalize: e.target.value });
    console.log({ InstructionDistalize: e.target.value });
  };
  const handleDoNotMoveTheseTeeth = (e) => {
    const { value, checked } = e.target;
    const { DoNotMoveTheseTeeth } = values;

    // console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setValues({
        DoNotMoveTheseTeeth: [...DoNotMoveTheseTeeth, value],
        // response: [...languages, value],
      });
    }

    // Case 2 : The user unchecks the box
    else {
      setValues({
        DoNotMoveTheseTeeth: DoNotMoveTheseTeeth.filter((e) => e !== value),
        // response: languages.filter((e) => e !== value),
      });
    }
    console.log(values.DoNotMoveTheseTeeth);
  };
  const handleIWillExtractTheseTeethBeforeTreatment = (e) => {
    const { value, checked } = e.target;
    const { IWillExtractTheseTeethBeforeTreatment } = values;

    // console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setValues({
        IWillExtractTheseTeethBeforeTreatment: [
          ...IWillExtractTheseTeethBeforeTreatment,
          value,
        ],
        // response: [...languages, value],
      });
    }

    // Case 2 : The user unchecks the box
    else {
      setValues({
        IWillExtractTheseTeethBeforeTreatment:
          IWillExtractTheseTeethBeforeTreatment.filter((e) => e !== value),
        // response: languages.filter((e) => e !== value),
      });
    }
    console.log(values.IWillExtractTheseTeethBeforeTreatment);
  };
  const handleLeaveTheseSpacesOpen = (e) => {
    const { value, checked } = e.target;
    const { LeaveTheseSpacesOpen } = values;

    // console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setValues({
        LeaveTheseSpacesOpen: [...LeaveTheseSpacesOpen, value],
        // response: [...languages, value],
      });
    }

    // Case 2 : The user unchecks the box
    else {
      setValues({
        LeaveTheseSpacesOpen: LeaveTheseSpacesOpen.filter((e) => e !== value),
        // response: languages.filter((e) => e !== value),
      });
    }
    console.log(values.LeaveTheseSpacesOpen);
  };

  const [currentTab, setCurrentTab] = useState(0);

 



  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navb">
        <Container>
          <Navbar.Brand href="#home">
          <img src={logo} alt="" className="" width={120} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Button variant="" onClick={tglContent} className="navhide">
                <FaBars fontSize={28} color="#C49358" />
              </Button>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <IoMdNotifications fontSize={30} color="#C49358" className="notification"/>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <FiMessageSquare fontSize={30} color="#C49358" className="me-2 notification" />
              </Nav.Link>
              <span className="address">
                <img src={user} alt="" width={35} className="mt-1" />
              </span>
              <Nav.Link href="#deets" className="p-0 mx-2 mt-1">
                <Dropdown>
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="user"
                  >
                    admin@gmail.com
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <CgProfile fontSize={25} />
                      <span className="px-3">Profile</span>
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item href="#/action-2">
                      <FiPower fontSize={25} />
                      <span className="px-3" onClick={()=>navigate("/")}>Logout</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <Row className="menuTab">
          <Col>
            <Card body className="border-0">
              {/* <Row>
  <Col>
  <Button variant="link" className="doc-tab">Doctor</Button>
  </Col>
  <Col>
  <Button variant="link" className="prof-tab">Profile</Button>
  
  </Col>
  </Row> */}
              <Nav className="justify-content-center">
                <Nav.Link href="#deets" className="doc-tab active" onClick={()=>navigate("/doctor-dashboard")}>
                  Doctor
                </Nav.Link>
                <Nav.Link href="#deets" className="prof-tab">
                  Profile
                </Nav.Link>
              </Nav>
            </Card>
          </Col>
        </Row>
      </Container>




      <Row className="justify-content-center">
        <Col md={11}>
          <Container fluid>
            <Form noValidate validated={validated}>
              <Container
                className="pt-5 mt-5 pb-5 mb-5"
                style={{ boxShadow: "0px 0px 5px 5px #dee2e6", backgroundColor:"white" }}
                fluid
              >
                <Row>
                  <Col md={{ span: 12 }}>
                    <Row className="justify-content-center">
                      <Col md={{ span: 12 }}>
                        <Row>
                          <Row className="pt-4 justify-content-center px-5">
                            <Col
                              sm={{ span: 12 }}
                              style={{ border: "solid 0.1em lightgray" }}
                            >
                              <Tabs activeKey={currentTab} justify className="mt-3">
                                <Tab eventKey={0} title="1. Patient Data" >
                                  <Row className="pt-4 pb-3">
                                    <Col md={{ span: 6 }}>
                                      <Form.Group controlId="validationFirstname">
                                        <InputGroup hasValidation>
                                          <InputGroup.Text id="inputGroupPrepend">
                                            <TbUser fontSize={28}></TbUser>
                                          </InputGroup.Text>
                                          <Form.Control
                                            type="text"
                                            placeholder="First Name"
                                            name="FirstName"
                                            onChange={handleChange}
                                            aria-describedby="inputGroupPrepend"
                                            required
                                          />
                                          <Form.Control.Feedback type="invalid">
                                            Please Enter a First Name.
                                          </Form.Control.Feedback>
                                        </InputGroup>
                                      </Form.Group>
                                      <Form.Group
                                        controlId="validationLastname"
                                        className="mt-3"
                                      >
                                        <InputGroup hasValidation>
                                          <InputGroup.Text id="inputGroupPrepend">
                                            <TbUser fontSize={28}></TbUser>
                                          </InputGroup.Text>
                                          <Form.Control
                                            type="text"
                                            placeholder="Last Name"
                                            name="LastName"
                                            onChange={handleChange}
                                            aria-describedby="inputGroupPrepend"
                                            required
                                          />
                                          <Form.Control.Feedback type="invalid">
                                            Please Enter a Last Name.
                                          </Form.Control.Feedback>
                                        </InputGroup>
                                      </Form.Group>
                                      <Form.Group
                                        controlId="validationMI"
                                        className="mt-3"
                                      >
                                        <InputGroup hasValidation>
                                          <InputGroup.Text id="inputGroupPrepend">
                                            <TbUser fontSize={28}></TbUser>
                                          </InputGroup.Text>
                                          <Form.Control
                                            type="text"
                                            placeholder="MI"
                                            name="Mi"
                                            onChange={handleChange}
                                            aria-describedby="inputGroupPrepend"
                                          />
                                        </InputGroup>
                                      </Form.Group>
                                      <Form.Group>
                                        Gender
                                        <br></br>
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 1"
                                          label="Male"
                                          value="Male"
                                          className="pt-2"
                                          onChange={handleChange}
                                          name="Gender"
                                          inline
                                          feedbackType="invalid"
                                          required
                                        />
                                        <Form.Check
                                          type="radio"
                                          aria-label="radio 1"
                                          label="Female"
                                          value="Female"
                                          name="Gender"
                                          onChange={handleChange}
                                          inline
                                          feedbackType="invalid"
                                          required
                                        />
                                      </Form.Group>
                                      <Form.Group
                                        controlId="validationDate"
                                        className="mt-3"
                                      >
                                        <InputGroup hasValidation>
                                          <InputGroup.Text id="inputGroupPrepend">
                                            <FaCalendarAlt
                                              fontSize={28}
                                            ></FaCalendarAlt>
                                          </InputGroup.Text>
                                          <Form.Control
                                            type="date"
                                            placeholder="Date"
                                            name="DateofBirth"
                                            onChange={handleChange}
                                            aria-describedby="inputGroupPrepend"
                                            required
                                          />
                                        </InputGroup>
                                        <Form.Control.Feedback type="invalid">
                                          Please Enter a Date.
                                        </Form.Control.Feedback>
                                      </Form.Group>
                                      <Form.Group
                                        controlId="validationDoctorsname"
                                        className="mt-3"
                                      >
                                        <InputGroup hasValidation>
                                          <InputGroup.Text id="inputGroupPrepend">
                                            <TbUser fontSize={28}></TbUser>
                                          </InputGroup.Text>
                                          <Form.Control
                                            type="text"
                                            placeholder="Doctor's Name"
                                            name="DoctorName"
                                            onChange={handleChange}
                                            aria-describedby="inputGroupPrepend"
                                          />
                                        </InputGroup>
                                      </Form.Group>
                                      <Form.Group
                                        controlId="validationClinicAddress"
                                        className="mt-3"
                                      >
                                        <InputGroup hasValidation>
                                          <InputGroup.Text
                                            id="basic-addon1"
                                            style={{ height: "4em" }}
                                          >
                                            <TbUser fontSize={28}></TbUser>
                                          </InputGroup.Text>
                                          <Form.Control
                                            as="textarea"
                                            rows={2}
                                            placeholder="ClinicAddress"
                                            name="ClinicAddress"
                                            onChange={handleChange}
                                            aria-describedby="inputGroupPrepend"
                                          />
                                        </InputGroup>
                                      </Form.Group>
                                      <Form.Group
                                        controlId="validationCaseNo"
                                        className="mt-3"
                                      >
                                        <InputGroup hasValidation>
                                          <InputGroup.Text id="inputGroupPrepend">
                                            <TbUser fontSize={28}></TbUser>
                                          </InputGroup.Text>
                                          <Form.Control
                                            type="text"
                                            placeholder="Case No."
                                            name="CaseNo"
                                            onChange={handleChange}
                                            aria-describedby="inputGroupPrepend"
                                          />
                                        </InputGroup>
                                      </Form.Group>
                                    </Col>
                                    <Col md={{ span: 6 }}>
                                      <Form.Group>
                                        Ship to Office
                                        <Form.Check
                                          type="radio"
                                          label="2004,
                B-103 RADHA GOVIND RADHA RESIDENCY
                 SIDDHARTH NAGAR BORIVALI EAST,
                MUMBAI 400066"
                                          className="pt-2"
                                          onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                      </Form.Group>
                                      <br></br>
                                      Bill to Office
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="2004, B-103 RADHA GOVIND RADHA RESIDENCY
                 SIDDHARTH NAGAR BORIVALI EAST, MUMBAI 400066"
                                        className="pt-2"
                                        defaultChecked
                                      />
                                      <br></br>
                                      Payer?
                                      <Form.Check
                                        type="radio"
                                        aria-label="radio 1"
                                        label="2004, B-103 RADHA GOVIND RADHA RESIDENCY
                 SIDDHARTH NAGAR BORIVALI EAST, MUMBAI 400066"
                                        className="pt-2"
                                        disabled
                                      />
                                    </Col>
                                  </Row>
                                  {/* <Button type="submit"
                 onClick={handleSubmit}>Submit</Button> */}
                                  <hr />
                                  <Row className="text-end mt-1 mb-2">
                                    <Col className="me-4">
                                      {/* <Button
                                        className="success"
                                        onClick={() =>
                                          setCurrentTab((prev) => prev - 1)
                                        }
                                      >
                                        Prev
                                      </Button> */}
                                      <Button
                                        className="success nextbtn"
                                        onClick={submitTab1}
                                      >
                                        Next
                                      </Button>
                                    </Col>
                                  </Row>
                                </Tab>
                                <Tab eventKey={1} title="2. ClinicalMalocclusion">
                                  <Row>
                                    <Col md={6}>
                                      <p>Clinical Conditions*</p>
                                      <Row>
                                        <Col md={6}>
                                          <Form.Check
                                            type="checkbox"
                                            label="Crowding"
                                            value="Crowding"
                                            name="ClinicalConditions"
                                            onChange={handlecheck}
                                          />
                                          <Form.Check
                                            type="checkbox"
                                            label="Spacing"
                                            value="Spacing"
                                            name="ClinicalConditions"
                                            onChange={handlecheck}
                                          />
                                          <Form.Check
                                            type="checkbox"
                                            label="Class II div 1"
                                            value="Class II div 1"
                                            name="ClinicalConditions"
                                            onChange={handlecheck}
                                          />
                                          <Form.Check
                                            type="checkbox"
                                            label="Class II div 2"
                                            value="Class II div 2"
                                            name="ClinicalConditions"
                                            onChange={handlecheck}
                                          />
                                          <Form.Check
                                            type="checkbox"
                                            label="CClass III"
                                            value="CClass III"
                                            name="ClinicalConditions"
                                            onChange={handlecheck}
                                          />
                                          <Form.Check
                                            type="checkbox"
                                            label="Open bite"
                                            value="Open bite"
                                            name="ClinicalConditions"
                                            onChange={handlecheck}
                                          />
                                          <Form.Check
                                            type="checkbox"
                                            label="Anterior crossbite"
                                            value="Anterior crossbite"
                                            name="ClinicalConditions"
                                            onChange={handlecheck}
                                          />
                                          <Form.Check
                                            type="checkbox"
                                            label="Posterior crossbite"
                                            value="Posterior crossbite"
                                            name="ClinicalConditions"
                                            onChange={handlecheck}
                                          />
                                        </Col>
                                        <Col md={6}>
                                          <Form.Check
                                            type="checkbox"
                                            label="Deep Bite"
                                            value="Deep Bite"
                                            name="ClinicalConditions"
                                            onChange={handlecheck}
                                          />
                                          <Form.Check
                                            type="checkbox"
                                            label="Narrow Arch"
                                            value="Narrow Arch"
                                            name="ClinicalConditions"
                                            onChange={handlecheck}
                                          />
                                          <Form.Check
                                            type="checkbox"
                                            label="Flared Teeth"
                                            value="Flared Teeth"
                                            name="ClinicalConditions"
                                            onChange={handlecheck}
                                          />
                                          <Form.Check
                                            type="checkbox"
                                            label="Overjet"
                                            value="Overjet"
                                            name="ClinicalConditions"
                                            onChange={handlecheck}
                                          />
                                          <Form.Check
                                            type="checkbox"
                                            label="Uneven smile"
                                            value="Uneven smile"
                                            name="ClinicalConditions"
                                            onChange={handlecheck}
                                          />
                                          <Form.Check
                                            type="checkbox"
                                            label="Misshapen teeth"
                                            value="Misshapen teeth"
                                            name="ClinicalConditions"
                                            onChange={handlecheck}
                                          />
                                          <Form.Check
                                            type="checkbox"
                                            label="Other"
                                            value="Other"
                                            name="ClinicalConditions"
                                            onChange={handlecheck}
                                          />
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col md={6}>
                                      <p>General Notes</p>
                                      <Row>
                                        <Col>
                                          <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                          >
                    {/* <Form.Label>Example
                 textarea</Form.Label> */}
                                            <Form.Control
                                              as="textarea"
                                              rows={7}
                                              name="GeneralNotes"
                                              onChange={handleChange}
                                            />
                                            <Form.Text className="text-muted">
                                              *Clinical Conditions and General
                                              Notes are for your reference and
                                              statistical purposes only and will
                                              NOT be considered as treatment
                                              planning instructions.
                                            </Form.Text>
                                          </Form.Group>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                  <hr />
                                  <Row className="text-end mt-1 mb-2">
                                    <Col className="me-4">
                                      <Button
                                      variant="outline-dark"
                                        className="mx-3 success"
                                        onClick={() =>
                                          setCurrentTab((prev) => prev - 1)
                                        }
                                      >
                                        Back
                                      </Button>
                                      <Button
                                        className="success nextbtn"
                                        onClick={() =>
                                          setCurrentTab((prev) => prev + 1)
                                        }
                                      >
                                        Next
                                      </Button>
                                    </Col>
                                  </Row>
                                </Tab>
                                <Tab eventKey={2} title="3. Prescription Form">
                                  <Row className="pt-4 pb-3">
                                    <Col md={{ span: 6 }}>
                                      <p>Chief Complaint</p>
                                      <Form.Group
                                        controlId="validationChiefComplaint"
                                        className="mt-3"
                                      >
                                        <InputGroup hasValidation>
                                          <Form.Control
                                            as="textarea"
                                            rows={6}
                                            name="ChiefComplaint"
                                            onChange={handleChange}
                                            aria-describedby="inputGroupPrepend"
                                          />
                                        </InputGroup>
                                      </Form.Group>
                                      <Form.Group
                                        controlId="validationQuotation"
                                        className="mt-3"
                                      >
                                        <Form.Label>
                                          Quotation (Only Numbers Eg:20000)
                                        </Form.Label>
                                        <InputGroup hasValidation>
                                          <Form.Control
                                            type="text"
                                            name="Quotation"
                                            onChange={handleChange}
                                            aria-describedby="inputGroupPrepend"
                                            required
                                          />
                                          <Form.Control.Feedback type="invalid">
                                            Please Enter a Quotation.
                                          </Form.Control.Feedback>
                                        </InputGroup>
                                      </Form.Group>
                                      <Row>
                                        <Col>
                                          <Form.Group
                                            controlId="validationNoOfAligners"
                                            className="mt-3"
                                          >
                                            <Form.Label>
                                              Expected No. of Aligners
                                            </Form.Label>
                                            <InputGroup hasValidation>
                                              <Form.Control
                                                type="text"
                                                name="Quotation"
                                                onChange={handleChange}
                                                aria-describedby="inputGroupPrepend"
                                                required
                                              />
                                              {/* <Form.Control.Feedback type="invalid">
                Please Enter a Quotation.
                </Form.Control.Feedback> */}
                                            </InputGroup>
                                          </Form.Group>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col>
                                          <Form.Group
                                            controlId="validationProductType"
                                            className="mt-3"
                                          >
                                            <Form.Label>Product Type</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                              <option>Select Product type</option>
                                              <option value="1">Classic</option>
                                              <option value="2">Premium</option>
                                            </Form.Select>
                                          </Form.Group>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col md={{ span: 6 }}>
                                      <Row>
                                        <Col md={{ span: 6 }}>
                                          <p>Upper Midline</p>
                                          <Form.Group>
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 1"
                                              label="Centered"
                                              id="um1"
                                              name="UpperMidline"
                                              value="Centered"
                                              onChange={handleRadio3}
                                            />
                                          </Form.Group>
                                          <Form.Group controlId="validationRight">
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 1"
                                              label="Shifted Right"
                                              value="Shifted Right"
                                              id="um2"
                                              name="UpperMidline"
                                              onChange={handleRadio3}
                                            />
                                            <InputGroup hasValidation>
                                              <Form.Control
                                                type="number"
                                                aria-describedby="inputGroupPrepend"
                                              />
                                              &nbsp; MM
                                            </InputGroup>
                                          </Form.Group>
                                          <Form.Group controlId="validationRight">
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 1"
                                              label="Shifted Left"
                                              id="um3"
                                              value="Shifted Left"
                                              name="UpperMidline"
                                              onChange={handleRadio3}
                                            />
                                            <InputGroup hasValidation>
                                              <Form.Control
                                                type="number"
                                                aria-describedby="inputGroupPrepend"
                                              />
                                              &nbsp; MM
                                            </InputGroup>
                                          </Form.Group>
                                          <p className="mt-4">Lower Midline</p>
                                          <Form.Group>
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 1"
                                              label="Centered"
                                              value="Centered"
                                              name="LowerMidline"
                                              onChange={handleRadio31}
                                            />
                                          </Form.Group>
                                          <Form.Group controlId="validationRight">
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 1"
                                              label="Shifted Right"
                                              value="Shifted Right"
                                              name="LowerMidline"
                                              onChange={handleRadio31}
                                            />
                                            <InputGroup hasValidation>
                                              <Form.Control
                                                type="number"
                                                aria-describedby="inputGroupPrepend"
                                              />
                                              &nbsp; MM
                                            </InputGroup>
                                          </Form.Group>
                                          <Form.Group controlId="validationRight">
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 1"
                                              label="Shifted Left"
                                              value="Shifted Left"
                                              name="LowerMidline"
                                              onChange={handleRadio31}
                                            />
                                            <InputGroup hasValidation>
                                              <Form.Control
                                                type="number"
                                                aria-describedby="inputGroupPrepend"
                                              />
                                              &nbsp; MM
                                            </InputGroup>
                                          </Form.Group>
                                        </Col>
                                        <Col md={{ span: 6 }}>
                                          <p>Canine Relationship</p>
                                          <Form.Group
                                            as={Row}
                                            controlId="validationCanine"
                                          >
                                            <Form.Label column sm="4">
                                              Right Class
                                            </Form.Label>
                                            <Col sm="5">
                                              <Form.Control
                                                type="number"
                                                name="CanineRelationshipRightClass"
                                                onChange={handleChange}
                                              />
                                            </Col>
                                          </Form.Group>
                                          <Form.Group
                                            as={Row}
                                            controlId="validationCanine"
                                            className="mt-2 mb-4"
                                          >
                                            <Form.Label column sm="4">
                                              Left Class
                                            </Form.Label>
                                            <Col sm="5">
                                              <Form.Control
                                                type="number"
                                                name="CanineRelationshipLeftClass"
                                                onChange={handleChange}
                                              />
                                            </Col>
                                          </Form.Group>
                                          <p>Molar Relationship</p>
                                          <Form.Group
                                            as={Row}
                                            controlId="validationCanine"
                                          >
                                            <Form.Label column sm="4">
                                              Right Class
                                            </Form.Label>
                                            <Col sm="5">
                                              <Form.Control
                                                type="number"
                                                name="MolarRelationshipRightClass"
                                                onChange={handleChange}
                                              />
                                            </Col>
                                          </Form.Group>
                                          <Form.Group
                                            as={Row}
                                            controlId="validationCanine"
                                            className="mt-2 mb-4"
                                          >
                                            <Form.Label column sm="4">
                                              Left Class
                                            </Form.Label>
                                            <Col sm="5">
                                              <Form.Control
                                                type="number"
                                                name="MolarRelationshipLeftClass"
                                                onChange={handleChange}
                                              />
                                            </Col>
                                          </Form.Group>
                                          <Form.Group
                                            as={Row}
                                            controlId="validationCanine"
                                            className="mt-2"
                                          >
                                            <Form.Label column sm="4">
                                              Endon
                                            </Form.Label>
                                            <Col sm="5">
                                              <Form.Select
                                                size="sm"
                                                name="Endon"
                                                onChange={handleChange}
                                              >
                                                <option>Select</option>
                                                <option>Right</option>
                                                <option>Left</option>
                                                <option>Both</option>
                                              </Form.Select>
                                            </Col>
                                          </Form.Group>
                                          <Form.Group
                                            as={Row}
                                            controlId="validationCanine"
                                            className="mt-2"
                                          >
                                            <Form.Label
                                              column
                                              sm="4"
                                              name="Overbite"
                                              onChange={handleChange}
                                            >
                                              Overbite
                                            </Form.Label>
                                            <Col sm="5">
                                              <Form.Select size="sm">
                                                <option>Select</option>
                                                <option>25%</option>
                                                <option>50%</option>
                                                <option>75%</option>
                                                <option>100%</option>
                                              </Form.Select>
                                            </Col>
                                          </Form.Group>
                                          <Form.Group
                                            as={Row}
                                            controlId="validationCanine"
                                            className="mt-2 mb-4"
                                          >
                                            <Form.Label column sm="4">
                                              Overjet
                                            </Form.Label>
                                            <Col sm="5 p-0">
                                              <Form.Control
                                                type="number"
                                                name="Overjet"
                                                onChange={handleChange}
                                              />
                                            </Col>
                                            <Col sm="1 px-2">MM</Col>
                                          </Form.Group>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                  <hr className="hrline" />
                                  <Row>
                                    <Col md={{ span: 5 }}>
                                      <h3>Instruction</h3>
                                      <Form.Group as={Row}>
                                        <Form.Label column sm="4">
                                          Upper Midline:
                                        </Form.Label>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Maintain"
                                            value="Maintain"
                                            name="InstructionUpperMidline"
                                            onChange={
                                              handleInstructionUpperMidline
                                            }
                                          />
                                        </Col>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Improve"
                                            value="Improve"
                                            name="InstructionUpperMidline"
                                            onChange={
                                              handleInstructionUpperMidline
                                            }
                                          />
                                        </Col>
                                        <Col sm="2" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Idealize"
                                            value="Idealize"
                                            name="InstructionUpperMidline"
                                            onChange={
                                              handleInstructionUpperMidline
                                            }
                                          />
                                        </Col>
                                      </Form.Group>
                                      <Form.Group as={Row}>
                                        <Form.Label column sm="4">
                                          Lower Midline:
                                        </Form.Label>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Maintain"
                                            value="Maintain"
                                            name="InstructionLowerMidline"
                                            onChange={
                                              handleInstructionLowerMidline
                                            }
                                          />
                                        </Col>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Improve"
                                            value="Improve"
                                            name="InstructionLowerMidline"
                                            onChange={
                                              handleInstructionLowerMidline
                                            }
                                          />
                                        </Col>
                                        <Col sm="2" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Idealize"
                                            value="Idealize"
                                            name="InstructionLowerMidline"
                                            onChange={
                                              handleInstructionLowerMidline
                                            }
                                          />
                                        </Col>
                                      </Form.Group>
                                      <Form.Group as={Row}>
                                        <Form.Label column sm="4">
                                          Overjet:
                                        </Form.Label>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Maintain"
                                            value="Maintain"
                                            name="InstructionOverjet"
                                            onChange={handleInstructionOverjet}
                                          />
                                        </Col>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Improve"
                                            value="Improve"
                                            name="InstructionOverjet"
                                            onChange={handleInstructionOverjet}
                                          />
                                        </Col>
                                        <Col sm="2" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Idealize"
                                            value="Idealize"
                                            name="InstructionOverjet"
                                            onChange={handleInstructionOverjet}
                                          />
                                        </Col>
                                      </Form.Group>
                                      <Form.Group as={Row}>
                                        <Form.Label column sm="4">
                                          Overbite:
                                        </Form.Label>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Maintain"
                                            value="Maintain"
                                            name="InstructionOverbite"
                                            onChange={handleInstructionOverbite}
                                          />
                                        </Col>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Improve"
                                            value="Improve"
                                            name="InstructionOverbite"
                                            onChange={handleInstructionOverbite}
                                          />
                                        </Col>
                                        <Col sm="2" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Idealize"
                                            value="Idealize"
                                            name="InstructionOverbite"
                                            onChange={handleInstructionOverbite}
                                          />
                                        </Col>
                                      </Form.Group>
                                      <Form.Group as={Row}>
                                        <Form.Label column sm="4">
                                          Arch Form:
                                        </Form.Label>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Maintain"
                                            value="Maintain"
                                            name="InstructionArchForm"
                                            onChange={handleInstructionArchForm}
                                          />
                                        </Col>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Improve"
                                            value="Improve"
                                            name="InstructionArchForm"
                                            onChange={handleInstructionArchForm}
                                          />
                                        </Col>
                                        <Col sm="2" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Idealize"
                                            value="Idealize"
                                            name="InstructionArchForm"
                                            onChange={handleInstructionArchForm}
                                          />
                                        </Col>
                                      </Form.Group>
                                      <Form.Group as={Row}>
                                        <Form.Label column sm="4">
                                          Canine Relationship:
                                        </Form.Label>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Maintain"
                                            value="Maintain"
                                            name="InstructionCanineRelationship"
                                            onChange={
                                              handleInstructionCanineRelationship
                                            }
                                          />
                                        </Col>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Improve"
                                            value="Improve"
                                            name="InstructionCanineRelationship"
                                            onChange={
                                              handleInstructionCanineRelationship
                                            }
                                          />
                                        </Col>
                                        <Col sm="2" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Idealize"
                                            value="Idealize"
                                            name="InstructionCanineRelationship"
                                            onChange={
                                              handleInstructionCanineRelationship
                                            }
                                          />
                                        </Col>
                                      </Form.Group>
                                      <Form.Group as={Row}>
                                        <Form.Label column sm="4">
                                          Molar Relationship:
                                        </Form.Label>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Maintain"
                                            value="Maintain"
                                            name="InstructionMolarRelationship"
                                            onChange={
                                              handleInstructionMolarRelationship
                                            }
                                          />
                                        </Col>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Improve"
                                            value="Improve"
                                            name="InstructionMolarRelationship"
                                            onChange={
                                              handleInstructionMolarRelationship
                                            }
                                          />
                                        </Col>
                                        <Col sm="2" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Idealize"
                                            value="Idealize"
                                            name="InstructionMolarRelationship"
                                            onChange={
                                              handleInstructionMolarRelationship
                                            }
                                          />
                                        </Col>
                                      </Form.Group>
                                      <Form.Group as={Row}>
                                        <Form.Label column sm="4">
                                          Posterior Crossbite :
                                        </Form.Label>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Maintain"
                                            value="Maintain"
                                            name="InstructionPosteriorCrossbite"
                                            onChange={
                                              handleInstructionPosteriorCrossbite
                                            }
                                          />
                                        </Col>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Improve"
                                            value="Improve"
                                            name="InstructionPosteriorCrossbite"
                                            onChange={
                                              handleInstructionPosteriorCrossbite
                                            }
                                          />
                                        </Col>
                                        <Col sm="2" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Idealize"
                                            value="Idealize"
                                            name="InstructionPosteriorCrossbite"
                                            onChange={
                                              handleInstructionPosteriorCrossbite
                                            }
                                          />
                                        </Col>
                                      </Form.Group>
                                      <Form.Group as={Row}>
                                        <Form.Label column sm="4">
                                          IPR :
                                        </Form.Label>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Yes"
                                            value="Yes"
                                            name="InstructionIPR"
                                            onChange={handleInstructionIPR}
                                          />
                                        </Col>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="No"
                                            value="No"
                                            name="InstructionIPR"
                                            onChange={handleInstructionIPR}
                                          />
                                        </Col>
                                        <Col sm="2" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Only If Needed"
                                            value="Only If Needed"
                                            name="InstructionIPR"
                                            onChange={handleInstructionIPR}
                                          />
                                        </Col>
                                      </Form.Group>
                                      <Form.Group as={Row}>
                                        <Form.Label column sm="4">
                                          Engagers & Attachments:
                                        </Form.Label>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Yes"
                                            value="Yes"
                                            name="InstructionEngagersAttachments"
                                            onChange={
                                              handleInstructionEngagersAttachments
                                            }
                                          />
                                        </Col>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="No"
                                            value="No"
                                            name="InstructionEngagersAttachments"
                                            onChange={
                                              handleInstructionEngagersAttachments
                                            }
                                          />
                                        </Col>
                                        <Col sm="2" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Only If Needed"
                                            value="Only If Needed"
                                            name="InstructionEngagersAttachments"
                                            onChange={
                                              handleInstructionEngagersAttachments
                                            }
                                          />
                                        </Col>
                                      </Form.Group>
                                      <Form.Group as={Row}>
                                        <Form.Label column sm="4">
                                          Procline:
                                        </Form.Label>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Yes"
                                            value="Yes"
                                            name="InstructionProcline"
                                            onChange={handleInstructionProcline}
                                          />
                                        </Col>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="No"
                                            value="No"
                                            name="InstructionProcline"
                                            onChange={handleInstructionProcline}
                                          />
                                        </Col>
                                        <Col sm="2" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Only If Needed"
                                            value="Only If Needed"
                                            name="InstructionProcline"
                                            onChange={handleInstructionProcline}
                                          />
                                        </Col>
                                      </Form.Group>
                                      <Form.Group as={Row}>
                                        <Form.Label column sm="4">
                                          Expand:
                                        </Form.Label>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Yes"
                                            value="Yes"
                                            name="InstructionExpand"
                                            onChange={handleInstructionExpand}
                                          />
                                        </Col>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="No"
                                            value="No"
                                            name="InstructionExpand"
                                            onChange={handleInstructionExpand}
                                          />
                                        </Col>
                                        <Col sm="2" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Only If Needed"
                                            value="Only If Needed"
                                            name="InstructionExpand"
                                            onChange={handleInstructionExpand}
                                          />
                                        </Col>
                                      </Form.Group>
                                      <Form.Group as={Row}>
                                        <Form.Label column sm="4">
                                          Distalize:
                                        </Form.Label>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Yes"
                                            value="Yes"
                                            name="InstructionDistalize"
                                            onChange={handleInstructionDistalize}
                                          />
                                        </Col>
                                        <Col sm="3" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="No"
                                            value="No"
                                            name="InstructionDistalize"
                                            onChange={handleInstructionDistalize}
                                          />
                                        </Col>
                                        <Col sm="2" className="mt-2">
                                          <Form.Check
                                            type="radio"
                                            aria-label="radio 1"
                                            label="Only If Needed"
                                            value="Only If Needed"
                                            name="InstructionDistalize"
                                            onChange={handleInstructionDistalize}
                                          />
                                        </Col>
                                      </Form.Group>
                                    </Col>
                                  </Row>
                                  <hr className="hrline" />
                                  <Row>
                                    <Col md={{ span: 12 }}>
                                      <h3>Teeth are labeled</h3>
                                      <h6>
                                        Do Not Move These Teeth (Bridges,
                                        Ankylosed Teeth, Etc.) :
                                      </h6>
                                      <table className="mt-3">
                                        <tbody>
                                          <tr>
                                            <td></td>
                                            <td>
                                              <div>
                                                18
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="18"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                17
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="17"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                16
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="16"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                15
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="15"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                14
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="14"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                13
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="13"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                12
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="12"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                11
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="11"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                21
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="21"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                22
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="22"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                23
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="23"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                24
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="24"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                25
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="25"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                26
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="26"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                27
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="27"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                28
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="28"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td style={{ padding: "0px 8px" }}>
                                              R
                                            </td>
                                            <td colspan="16">
                                              <hr
                                                className="hrrl"
                                                style={{
                                                  borderTop:
                                                    "margin-top: 25px; margin-bottom:0px;",
                                                }}
                                              />
                                            </td>
                                            <td style={{ padding: "0px 8px" }}>
                                              L
                                            </td>
                                          </tr>
                                          <tr>
                                            <td></td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="48"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                                48
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="47"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                                47
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="46"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                                46
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="45"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                                45
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="44"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                                44
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="43"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                                43
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="42"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                                42
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="41"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                                41
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="31"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                                31
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="32"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                                32
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="33"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                                33
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="34"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                                34
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="35"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                                35
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="36"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                                36
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="37"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                                37
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="38"
                                                  name="DoNotMoveTheseTeeth"
                                                  onChange={
                                                    handleDoNotMoveTheseTeeth
                                                  }
                                                />
                                                38
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <h6 className="mt-4">
                                        Avoid Engagers & Attachments On These
                                        Teeth (Facial Restoration, Etc.) :
                                      </h6>
                                      <table className="mt-3">
                                        <tbody>
                                          <tr>
                                            <td></td>
                                            <td>
                                              <div>
                                                18
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="18"
                                                  name=""
                                                  onChange=""
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                17
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="17"
                                                  name=""
                                                  onChange=""
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                16
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="16"
                                                  name=""
                                                  onChange=""
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                15
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="15"
                                                  name=""
                                                  onChange=""
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                14
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="14"
                                                  name=""
                                                  onChange=""
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                13
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="13"
                                                  name=""
                                                  onChange=""
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                12
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="12"
                                                  name=""
                                                  onChange=""
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                11
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="11"
                                                  name=""
                                                  onChange=""
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                21
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="21"
                                                  name=""
                                                  onChange=""
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                22
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="22"
                                                  name=""
                                                  onChange=""
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                23
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="23"
                                                  name=""
                                                  onChange=""
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                24
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="24"
                                                  name=""
                                                  onChange=""
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                25
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="25"
                                                  name=""
                                                  onChange=""
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                26
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="26"
                                                  name=""
                                                  onChange=""
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                27
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="27"
                                                  name=""
                                                  onChange=""
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                28
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="28"
                                                  name=""
                                                  onChange=""
                                                />
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td style={{ padding: "0px 8px;" }}>
                                              R
                                            </td>
                                            <td colspan="16">
                                              <hr
                                                className="hrrl"
                                                style={{
                                                  borderTop:
                                                    "margin-top: 25px; margin-bottom:0px;",
                                                }}
                                              />
                                            </td>
                                            <td style={{ padding: "0px 8px;" }}>
                                              L
                                            </td>
                                          </tr>
                                          <tr>
                                            <td></td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="48"
                                                  name=""
                                                  onChange=""
                                                />
                                                48
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="47"
                                                  name=""
                                                  onChange=""
                                                />
                                                47
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="46"
                                                  name=""
                                                  onChange=""
                                                />
                                                46
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="45"
                                                  name=""
                                                  onChange=""
                                                />
                                                45
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="44"
                                                  name=""
                                                  onChange=""
                                                />
                                                44
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="43"
                                                  name=""
                                                  onChange=""
                                                />
                                                43
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="42"
                                                  name=""
                                                  onChange=""
                                                />
                                                42
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="41"
                                                  name=""
                                                  onChange=""
                                                />
                                                41
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="31"
                                                  name=""
                                                  onChange=""
                                                />
                                                31
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="32"
                                                  name=""
                                                  onChange=""
                                                />
                                                32
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="33"
                                                  name=""
                                                  onChange=""
                                                />
                                                33
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="34"
                                                  name=""
                                                  onChange=""
                                                />
                                                34
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="35"
                                                  name=""
                                                  onChange=""
                                                />
                                                35
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="36"
                                                  name=""
                                                  onChange=""
                                                />
                                                36
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="37"
                                                  name=""
                                                  onChange=""
                                                />
                                                37
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="38"
                                                  name=""
                                                  onChange=""
                                                />
                                                38
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <h6 className="mt-4">
                                        I Will Extract These Teeth Before
                                        Treatment :
                                      </h6>
                                      <table className="mt-3">
                                        <tbody>
                                          <tr>
                                            <td></td>
                                            <td>
                                              <div>
                                                18
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="18"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                17
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="17"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                16
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="16"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                15
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="15"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                14
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="14"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                13
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="13"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                12
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="12"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                11
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="11"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                21
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="21"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                22
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="22"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                23
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="23"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                24
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="24"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                25
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="25"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                26
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="26"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                27
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="27"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                28
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="28"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td style={{ padding: "0px 8px;" }}>
                                              R
                                            </td>
                                            <td colspan="16">
                                              <hr
                                                className="hrrl"
                                                style={{
                                                  borderTop:
                                                    "margin-top: 25px; margin-bottom:0px;",
                                                }}
                                              />
                                            </td>
                                            <td style={{ padding: "0px 8px;" }}>
                                              L
                                            </td>
                                          </tr>
                                          <tr>
                                            <td></td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="48"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                                48
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="47"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                                47
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="46"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                                46
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="45"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                                45
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="44"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                                44
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="43"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                                43
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="42"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                                42
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="41"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                                41
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="31"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                                31
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="32"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                                32
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="33"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                                33
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="34"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                                34
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="35"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                                35
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="36"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                                36
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="37"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                                37
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="38"
                                                  name="IWillExtractTheseTeethBeforeTreatment"
                                                  onChange={
                                                    handleIWillExtractTheseTeethBeforeTreatment
                                                  }
                                                />
                                                38
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <h6 className="mt-4">
                                        Leave These Spaces Open :{" "}
                                      </h6>
                                      <table className="mt-3">
                                        <tbody>
                                          <tr>
                                            <td></td>
                                            <td>
                                              <div>
                                                18
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="18"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                17
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="17"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                16
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="16"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                15
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="15"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                14
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="14"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                13
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="13"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                12
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="12"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                11
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="11"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                21
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="21"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                22
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="22"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                23
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="23"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                24
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="24"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                25
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="25"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                26
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="26"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                27
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="27"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                28
                                                <br />
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="28"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td style={{ padding: "0px 8px;" }}>
                                              R
                                            </td>
                                            <td colspan="16">
                                              <hr
                                                className="hrrl"
                                                style={{
                                                  borderTop:
                                                    "margin-top: 25px; margin-bottom:0px;",
                                                }}
                                              />
                                            </td>
                                            <td style={{ padding: "0px 8px;" }}>
                                              L
                                            </td>
                                          </tr>
                                          <tr>
                                            <td></td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="48"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                                48
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="47"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                                47
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="46"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                                46
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="45"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                                45
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="44"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                                44
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="43"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                                43
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="42"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                                42
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="41"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                                41
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="31"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                                31
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="32"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                                32
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="33"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                                33
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="34"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                                34
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="35"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                                35
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="36"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                                36
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="37"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                                37
                                              </div>
                                            </td>
                                            <td>
                                              <div>
                                                <Form.Check
                                                  aria-label="option 1"
                                                  value="38"
                                                  name="LeaveTheseSpacesOpen"
                                                  onChange={
                                                    handleLeaveTheseSpacesOpen
                                                  }
                                                />
                                                38
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </Col>
                                  </Row>
                                  <h6 className="mt-3">
                                    Additional Instruction:
                                  </h6>
                                  <Form.Group
                                    controlId="validationInstruction"
                                    className="mt-3 mb-5"
                                  >
                                    <InputGroup hasValidation>
                                      <Form.Control
                                        as="textarea"
                                        rows={7}
                                        aria-describedby="inputGroupPrepend"
                                        name="AdditionalInstruction"
                                        value={values.AdditionalInstruction}
                                        onChange={handleChange}
                                      />
                                    </InputGroup>
                                  </Form.Group>
                                  {/* <Row className="text-center btn-primary"><Col><Button
                 variant="" onClick={handleSubmit}>submit</Button></Col></Row> */}
                                  <hr />
                                  <Row className="text-end mt-1 mb-2">
                                    <Col className="me-4">
                                      <Button
                                      variant="outline-dark"
                                        className="mx-3 success"
                                        onClick={() =>
                                          setCurrentTab((prev) => prev - 1)
                                        }
                                      >
                                        Back
                                      </Button>
                                      <Button
                                        className="nextbtn"
                                        onClick={() =>
                                          setCurrentTab((prev) => prev + 1)
                                        }
                                      >
                                        Next
                                      </Button>
                                    </Col>
                                  </Row>
                                </Tab>







                                <Tab
                                  eventKey={3}
                                  title="4. Patient Potrait"
                                  className="p-3"
                                >
                                  <Row>
                                    <Col md={8}>
                                      <Card className="img-crd">
                                        <Row className="p-3">
                                          <Col>
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 1"
                                              id="four1"
                                              name="portrait"
                                              label="Upload patient portrait now"
                                              value="1"
                                            />
                                          </Col>
                                          <Col>
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 2"
                                              id="four2"
                                              name="portrait"
                                              label="Upload patient portrait later"
                                              value="2"
                                            />
                                          </Col>
                                        </Row>
                                        <hr className="m-2" />
                                        <Card
                                          className="img-crd-in m-2 desc"
                                          id="port1"
                                          onDragOver={handleOndragOver}
                                          onDrop={handleOndrop}
                                          onClick={() =>
                                            fileInput.current.click()
                                          }
                                        >
                                          {previewUrl ? (
                                            ""
                                          ) : (
                                            <p className="text-center">
                                              Drag or click to browse
                                            </p>
                                          )}
                                          {previewUrl && (
                                            <div className="image-prev">
                                              <img
                                                src={previewUrl}
                                                alt="image"
                                                className="mt-5"
                                              />{" "}
                                              <br />
                                              <Button
                                                variant=""
                                                onClick={() => {
                                                  setPreviewUrl("");
                                                  // e.stopPropagation();
                                                }}
                                              >
                                                Delete
                                              </Button>
                                              <p> {image.name} </p>
                                            </div>
                                          )}
                                          <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInput}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFile(e.target.files[0])
                                            }
                                          />
                                        </Card>
                                        <Card
                                          className="desc"
                                          id="port2"
                                          style={{ display: "none" }}
                                        >
                                          <img
                                            src="https://www.portal.flexalign.in/user/img/bg-portrait.gif"
                                            alt=""
                                          />
                                        </Card>
                                      </Card>
                                    </Col>
                                    <Col md={4}>
                                      <Card className="p-3">
                                        <p className="up-rec">UPLOADED RECORDS</p>
                                      </Card>
                                    </Col>
                                  </Row>
                                  <hr />
                                  <Row className="text-end mt-1 mb-2">
                                    <Col className="me-4">
                                      <Button
                                        className="mx-3 success backbtn"
                                        onClick={() =>
                                          setCurrentTab((prev) => prev - 1)
                                        }
                                      >
                                        Back
                                      </Button>
                                      <Button
                                        className="success nextbtn"
                                        onClick={handleupload}
                                      >
                                        Next
                                      </Button>
                                    </Col>
                                  </Row>
                                </Tab>
                                <Tab eventKey={4} title="5. PVS/Scan">
                                  <Row className="p-3">
                                    <Col md={8}>
                                      <Card className="p-3 check-crd">
                                        <Row>
                                          <Col>
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 1"
                                              id="five1"
                                              name="radioo"
                                              label="Decide Later"
                                              // checked="checked"
                                              value="1"
                                            />
                                          </Col>
                                          <Col>
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 2"
                                              id="five2"
                                              name="radioo"
                                              label="PVS Impressions"
                                              value="2"
                                            />
                                          </Col>
                                          <Col>
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 3"
                                              id="five3"
                                              name="radioo"
                                              label="Intraoral Scans"
                                              value="3"
                                            />
                                          </Col>
                                          <Col>
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 4"
                                              id="five4"
                                              name="radioo"
                                              label="Models"
                                              value="4"
                                            />
                                          </Col>
                                        </Row>
                                        <Row className="desc" id="frm1">
                                          <Col>
                                            <p className="decide" id="de1">
                                              Decide Later.
                                            </p>
                                          </Col>
                                        </Row>
                                        <Row
                                          className="desc"
                                          id="frm2"
                                          style={{ display: "none" }}
                                        >
                                          <Col>
                                            <Form.Group
                                              controlId="formFileMultiple"
                                              className="mb-3 fg"
                                              id="formFileMultiple"
                                            >
                                              <Form.Label>
                                                Multiple files input example
                                              </Form.Label>
                                              <Form.Control
                                                type="file"
                                                multiple
                                                onChange={(e) => {
                                                  handleChangeTab51(
                                                    e.target.files
                                                  );
                                                }}
                                                name="Name"
                                              />
                                            </Form.Group>
                                          </Col>
                                        </Row>
                                        <Row
                                          className="desc"
                                          id="frm3"
                                          style={{ display: "none" }}
                                        >
                                          <Col>
                                            <Form.Group
                                              controlId="formFileMultiple"
                                              className="mb-3 fg"
                                              id="formFileMultiple"
                                            >
                                              <Form.Label>
                                                Multiple files input example
                                              </Form.Label>
                                              <Form.Control
                                                type="file"
                                                multiple
                                                id="files"
                                                onChange={(e) => {
                                                  handleChangeTab52(
                                                    e.target.files
                                                  );
                                                }}
                                                name="Name"
                                              />
                                            </Form.Group>
                                          </Col>
                                        </Row>
                                        <Row
                                          className="desc"
                                          id="frm4"
                                          style={{ display: "none" }}
                                        >
                                          <Col>
                                            <Form.Group
                                              controlId="formFileMultiple"
                                              className="mb-3 fg"
                                              id="formFileMultiple"
                                            >
                                              <Form.Label>
                                                Multiple files input example
                                              </Form.Label>
                                              <Form.Control
                                                type="file"
                                                multiple
                                                onChange={(e) => {
                                                  handleChangeTab53(
                                                    e.target.files
                                                  );
                                                }}
                                                name="Name"
                                              />
                                            </Form.Group>
                                          </Col>
                                        </Row>
                                      </Card>
                                    </Col>
                                    <Col md={4}>
                                      <Card className="p-3">
                                        <p className="up-rec">UPLOADED RECORDS</p>
                                      </Card>
                                    </Col>
                                  </Row>
                                  <hr />
                                  <Row className="text-end mt-1 mb-2">
                                    <Col className="me-4">
                                      <Button
                                        variant="outline-dark"
                                        className="mx-3 success"
                                        onClick={() =>
                                          setCurrentTab((prev) => prev - 1)
                                        }
                                      >
                                        Back
                                      </Button>
                                      <Button
                                        className="nextbtn"
                                        //  onClick={handleUpload1}
                                        onClick={handleUpload1}
                                      >
                                        Next
                                      </Button>
                                    </Col>
                                  </Row>
                                </Tab>





                                <Tab eventKey={5} title="6. Photos">
                                  {/* <section>
                <label>
                + Add Images
                <br />
                <span>up to 10 images</span>
                <input
                type="file"
                name="images"
                onChange={onSelectFile}
                multiple
                accept="image/png , image/jpeg, image/webp"
                />
                </label>
                <br />
                <input type="file" multiple />
                {selectedImages.length > 0 &&
                (selectedImages.length > 10 ? (
                <p className="error">
                You can't upload more than 10 images! <br />
                <span>
                please delete <b> {selectedImages.length - 10} </b> of them{" "}
                </span>
                </p>
                ) : (
                <button
                className="upload-btn"
                onClick={() => {
                console.log(selectedImages);
                }}
                >
                UPLOAD {selectedImages.length} IMAGE
                {selectedImages.length === 1 ? "" : "S"}
                </button>
                ))}
                <div className="images">
                {selectedImages &&
                selectedImages.map((image, index) => {
                return (
                <div key={image} className="image">
                <img src={image} height="200" alt="upload" />
                <button onClick={() => deleteHandler(image)}>
                delete image
                </button>
                <p>{index + 1}</p>
                </div>
                );
                })}
                </div>
                </section> */}
                                  <Row className="m-2">
                                    <Col md={6}>
                                      <Card className="img-crd">
                                        <Card.Header>
                                          <p>Extraoral Photos</p>
                                        </Card.Header>
                                        <Row className="p-3">
                                          <Col>
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 1"
                                              id="ExtraNow"
                                              name="photo"
                                              label="Upload photos now"
                                              value="1"
                                            />
                                          </Col>
                                          <Col>
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 2"
                                              id="ExtraLater"
                                              name="photo"
                                              label="Upload photos later"
                                              value="2"
                                            />
                                          </Col>
                                        </Row>
                                        <hr className="m-2" />
                                        <Card
                                          className="img-crd-in m-2 p-3 desc"
                                          id="Ph1"
                                          // onDragOver={handleOndragOver}
                                          // onDrop={handleOndrop}
                                          // onClick={() => fileInput.current.click()}
                                        >
                                          <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInputTab61}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFileTab61(e.target.files[0])
                                            }
                                          />
                                          {/* <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInput1}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFile1(e.target.files[0])
                                            }
                                          /> */}
                                          <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInput2}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFile2(e.target.files[0])
                                            }
                                          />
                                          {/* <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInput3}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFile3(e.target.files[0])
                                            }
                                          /> */}
                                          {/* <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInput4}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFile4(e.target.files[0])
                                            }
                                          /> */}
                                          <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInput5}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFile5(e.target.files[0])
                                            }
                                          />
                                          {/* <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInput6}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFile6(e.target.files[0])
                                            }
                                          /> */}
                                          <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInput7}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFile7(e.target.files[0])
                                            }
                                          />
                                          <Row>
                                            <Col md={6}>
                                              <Card
                                                className="crd-up"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndropTab61}
                                                onClick={() =>
                                                  fileInputTab61.current.click()
                                                }
                                              >
                                              

                                                {previewUrlTab61? previewUrlTab61 && (
                                                  <img
                                                    src={previewUrlTab61}
                                                    alt="image"
                                                    className="img-s"
                                                  />
                                                ):<p className="text-center mt-5">Front: Rest</p>}
                                              </Card>
                                            </Col>
                                            {/* <Col md={4}>
                                              <Card
                                                className="crd-up"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndrop1}
                                                onClick={() =>
                                                  fileInput1.current.click()
                                                }
                                              >
                                                {previewUrl1 && (
                                                  <img
                                                    src={previewUrl1}
                                                    alt="image"
                                                    className="img-s"
                                                  />
                                                )}
                                              </Card>
                                            </Col> */}
                                            <Col md={6}>
                                              <Card
                                                className="crd-up mb-3"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndrop2}
                                                onClick={() =>
                                                  fileInput2.current.click()
                                                }
                                              >
                                                {previewUrl2?previewUrl2 && (
                                                  <img
                                                    src={previewUrl2}
                                                    alt="image"
                                                    className="img-s"
                                                  />
                                                ):<p className="text-center mt-5">Front: Smile</p>}
                                              </Card>
                                            </Col>
                                          </Row>
                                          <Row className="mt-4 justify-content-center">
                                            {/* <Col md={4}>
                                              <Card
                                                className="crd-up"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndrop3}
                                                onClick={() =>
                                                  fileInput3.current.click()
                                                }
                                              >
                                                {previewUrl3 && (
                                                  <img
                                                    src={previewUrl3}
                                                    alt="image"
                                                    className="img-s"
                                                  />
                                                )}
                                              </Card>
                                            </Col> */}
                                            <Col md={4}>
                                              <Card className="border-0 p-2">
                                                <p className="text-center">
                                                  Drag and drop individual photos
                                                  from desktop folder to
                                                  respective tile
                                                </p>
                                              </Card>
                                            </Col>
                                            {/* <Col md={4}>
                                              <Card
                                                className="crd-up"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndrop4}
                                                onClick={() =>
                                                  fileInput4.current.click()
                                                }
                                              >
                                                {previewUrl4 && (
                                                  <img
                                                    src={previewUrl4}
                                                    alt="image"
                                                    className="img-s"
                                                  />
                                                )}
                                              </Card>
                                            </Col> */}
                                          </Row>
                                          <Row className="mt-3">
                                            <Col md={6}>
                                              <Card
                                                className="crd-up"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndrop5}
                                                onClick={() =>
                                                  fileInput5.current.click()
                                                }
                                              >
                                                {previewUrl5?previewUrl5 && (
                                                  <img
                                                    src={previewUrl5}
                                                    alt="image"
                                                    className="img-s"
                                                  />
                                                ):<p className="text-center mt-5">Profile</p>}
                                              </Card>
                                            </Col>
                                            {/* <Col md={4}>
                                              <Card
                                                className="crd-up"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndrop6}
                                                onClick={() =>
                                                  fileInput6.current.click()
                                                }
                                              >
                                                {previewUrl6 && (
                                                  <img
                                                    src={previewUrl6}
                                                    alt="image"
                                                    className="img-s"
                                                  />
                                                )}
                                              </Card>
                                            </Col> */}
                                            <Col md={6}>
                                              <Card
                                                className="crd-up"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndrop7}
                                                onClick={() =>
                                                  fileInput7.current.click()
                                                }
                                              >
                                                {previewUrl7 && (
                                                  <img
                                                    src={previewUrl7}
                                                    alt="image"
                                                    className="img-s"
                                                  />
                                                )}
                                              </Card>
                                            </Col>
                                          </Row>
                                          {/* {previewUrl ? (
                ""
                ) : (
                <p className="text-center">
                Drag or click to browse
                </p>
                )} */}
                                          {/* {" "}
                <br />
                <Button
                variant=""
                onClick={() => {
                setPreviewUrl("");
                // e.stopPropagation();
                }}
                >
                Delete
                </Button>
                <p> {image.name} </p>
                </div>
                )}
              
                } */}
                                        </Card>
                                        <Card
                                          className="desc border-0"
                                          id="Ph2"
                                          style={{ display: "none" }}
                                        >
                                          <Row className="m-2">
                                            <Col md={6}>
                                              <Card className="crd-up"></Card>
                                            </Col>
                                            {/* <Col md={4}>
                                              <Card className="crd-up"></Card>
                                            </Col> */}
                                            <Col md={6}>
                                              <Card className="crd-up"></Card>
                                            </Col>
                                          </Row>
                                          <Row className="m-2">
                                            {/* <Col md={4}>
                                              <Card className="crd-up"></Card>
                                            </Col>
                                            <Col md={4}>
                                              <Card className="crd-up"></Card>
                                            </Col>
                                            <Col md={4}>
                                              <Card className="crd-up"></Card>
                                            </Col> */}
                                          </Row>
                                          <Row className="m-2">
                                            <Col md={6}>
                                              <Card className="crd-up"></Card>
                                            </Col>
                                            {/* <Col md={4}>
                                              <Card className="crd-up"></Card>
                                            </Col> */}
                                            <Col md={6}>
                                              <Card className="crd-up"></Card>
                                            </Col>
                                          </Row>
                                        </Card>
                                        <Row className="m-2 mt-1">
                                          <Col>
                                            <p className="m-0 pb-1">
                                              Add More Photos
                                            </p>
                                            <Form.Control
                                              type="file"
                                              multiple
                                              className=""
                                              name="Name"
                                              onChange={(e) => {
                                                handleChangeTab6AddExtraOral(
                                                  e.target.files
                                                );
                                              }}
                                            />
                                          </Col>
                                        </Row>
                                      </Card>
                                    </Col>
                                    <Col md={6}>
                                    <Card className="img-crd">
                                    <Card.Header>
                                          <p>Intraoral Photos</p>
                                        </Card.Header>
                                        <Row className="p-3">
                                          <Col>
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 1"
                                              id="IntraNow"
                                              name="inPhoto"
                                              label="Upload photos now"
                                              value="1"
                                            />
                                          </Col>
                                          <Col>
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 2"
                                              id="IntraLater"
                                              name="inPhoto"
                                              label="Upload photos later"
                                              value="2"
                                            />
                                          </Col>
                                        </Row>
                                        <hr className="m-2" />
                                        <Card
                                          className="img-crd-in m-2 p-3 desc1"
                                          id="iPh1"
                                          // onDragOver={handleOndragOver}
                                          // onDrop={handleOndrop}
                                          // onClick={() => fileInput.current.click()}
                                        >
                                          <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInput62}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFile662(e.target.files[0])
                                            }
                                          />
                                          {/* <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInput1}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFile1(e.target.files[0])
                                            }
                                          /> */}
                                          <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInput21}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFile6621(e.target.files[0])
                                            }
                                          />
                                          {/* <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInput3}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFile3(e.target.files[0])
                                            }
                                          /> */}
                                          <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInput22}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFile6622(e.target.files[0])
                                            }
                                          />
                                          {/* <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInput5}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFile5(e.target.files[0])
                                            }
                                          /> */}
                                          <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInput23}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFile6623(e.target.files[0])
                                            }
                                          />
                                          <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInput24}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFile6624(e.target.files[0])
                                            }
                                          />
                                          <Row>
                                            <Col md={6}>
                                              <Card
                                                className="crd-up"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndrop662}
                                                onClick={() =>
                                                  fileInput62.current.click()
                                                }
                                              >
                                                {previewUrl62?previewUrl62 && (
                                                  <img
                                                    src={previewUrl62}
                                                    alt="image"
                                                    className="img-s"
                                                  />
                                                ):<p className="text-center mt-5">Right Buccal</p>}
                                              </Card>
                                            </Col>
                                            {/* <Col md={4}>
                                              <Card
                                                className="crd-up"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndrop1}
                                                onClick={() =>
                                                  fileInput1.current.click()
                                                }
                                              >
                                                {previewUrl1 && (
                                                  <img
                                                    src={previewUrl1}
                                                    alt="image"
                                                    className="img-s"
                                                  />
                                                )}
                                              </Card>
                                            </Col> */}
                                            <Col md={6}>
                                              <Card
                                                className="crd-up"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndrop6621}
                                                onClick={() =>
                                                  fileInput21.current.click()
                                                }
                                              >
                                                {previewUrl21?previewUrl21 && (
                                                  <img
                                                    src={previewUrl21}
                                                    alt="image"
                                                    className="img-s"
                                                  />
                                                ):<p className="text-center mt-5">Left Buccal</p>}
                                              </Card>
                                            </Col>
                                          </Row>
                                          <Row className="mt-3 justify-content-center">
                                            {/* <Col md={4}>
                                              <Card
                                                className="crd-up"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndrop3}
                                                onClick={() =>
                                                  fileInput3.current.click()
                                                }
                                              >
                                                {previewUrl3 && (
                                                  <img
                                                    src={previewUrl3}
                                                    alt="image"
                                                    className="img-s"
                                                  />
                                                )}
                                              </Card>
                                            </Col> */}
                                            {/* <Col md={6}>
                                              <Card className="border-0 p-2">
                                                <p className="text-center">
                                                  Drag and drop individual photos
                                                  from desktop folder to
                                                  respective tile
                                                </p>
                                              </Card>
                                            </Col> */}
                                            <Col md={6}>
                                              <Card
                                                className="crd-up"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndrop6622}
                                                onClick={() =>
                                                  fileInput22.current.click()
                                                }
                                              >
                                                {previewUrl22?previewUrl22 && (
                                                  <img
                                                    src={previewUrl22}
                                                    alt="image"
                                                    className="img-s"
                                                  />
                                                ):<p className="text-center mt-5">Front Buccal</p>}
                                              </Card>
                                            </Col>
                                          </Row>
                                          <Row className="mt-3">
                                            <Col md={6}>
                                              <Card
                                                className="crd-up"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndrop6623}
                                                onClick={() =>
                                                  fileInput23.current.click()
                                                }
                                              >
                                                {previewUrl23?previewUrl23 && (
                                                  <img
                                                    src={previewUrl23}
                                                    alt="image"
                                                    className="img-s"
                                                  />
                                                ):<p className="text-center mt-5">Upper Occulosal</p>}
                                              </Card>
                                            </Col>
                                            {/* <Col md={4}>
                                              <Card
                                                className="crd-up"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndrop6}
                                                onClick={() =>
                                                  fileInput6.current.click()
                                                }
                                              >
                                                {previewUrl6 && (
                                                  <img
                                                    src={previewUrl6}
                                                    alt="image"
                                                    className="img-s"
                                                  />
                                                )}
                                              </Card>
                                            </Col> */}
                                            <Col md={6}>
                                              <Card
                                                className="crd-up"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndrop6624}
                                                onClick={() =>
                                                  fileInput24.current.click()
                                                }
                                              >
                                                {previewUrl24?previewUrl24 && (
                                                  <img
                                                    src={previewUrl24}
                                                    alt="image"
                                                    className="img-s"
                                                  />
                                                ):<p className="text-center mt-5">Lower Occulosal</p>}
                                              </Card>
                                            </Col>
                                          </Row>
                                          {/* {previewUrl ? (
                ""
                ) : (
                <p className="text-center">
                Drag or click to browse
                </p>
                )} */}
                                          {/* {" "}
                <br />
                <Button
                variant=""
                onClick={() => {
                setPreviewUrl("");
                // e.stopPropagation();
                }}
                >
                Delete
                </Button>
                <p> {image.name} </p>
                </div>
                )}
              
                } */}
                                        </Card>
                                        <Card
                                          className="desc1 border-0"
                                          id="iPh2"
                                          style={{ display: "none" }}
                                        >
                                          <Row className="m-2">
                                            <Col md={6}>
                                              <Card className="crd-up"></Card>
                                            </Col>
                                            {/* <Col md={4}>
                                              <Card className="crd-up"></Card>
                                            </Col> */}
                                            <Col md={6}>
                                              <Card className="crd-up"></Card>
                                            </Col>
                                          </Row>
                                          <Row className="m-2 justify-content-center">
                                            {/* <Col md={4}>
                                              <Card className="crd-up"></Card>
                                            </Col> */}
                                            <Col md={6}>
                                              <Card className="crd-up"></Card>
                                            </Col>
                                            {/* <Col md={4}>
                                              <Card className="crd-up"></Card>
                                            </Col> */}
                                          </Row>
                                          <Row className="m-2">
                                            <Col md={6}>
                                              <Card className="crd-up"></Card>
                                            </Col>
                                            {/* <Col md={4}>
                                              <Card className="crd-up"></Card>
                                            </Col> */}
                                            <Col md={6}>
                                              <Card className="crd-up"></Card>
                                            </Col>
                                          </Row>
                                        </Card>
                                        <Row className="m-2 mt-1">
                                          <Col>
                                            <p className="m-0 pb-1">
                                              Add More Photos
                                            </p>
                                            <Form.Control
                                              type="file"
                                              multiple
                                              className=""
                                              name="Name"
                                              onChange={(e) => {
                                                handleChangeTab6Add(
                                                  e.target.files
                                                );
                                              }}
                                            />
                                          </Col>
                                        </Row>
                                      </Card>
                                    </Col>
                                  </Row>
                                  <Row className="m-2">

                                    <Col>
                                    <Card className="p-3">
                                        <p className="up-rec">UPLOADED RECORDS</p>
                                      </Card>
                                    </Col>
                                  </Row>

                                  <hr />
                                  <Row className="text-end mt-1 mb-2">
                                    <Col className="me-4">
                                      <Button
                                        variant="outline-dark"
                                        className="mx-3"
                                        onClick={() =>
                                          setCurrentTab((prev) => prev - 1)
                                        }
                                      >
                                        Back
                                      </Button>
                                      <Button
                                        className="nextbtn"
                                        // onClick={handleUpload2}
                                        onClick={handleUpload2}
                                      >
                                        Next
                                      </Button>
                                    </Col>
                                  </Row>
                                </Tab>




                                <Tab eventKey={6} title="7. Radiographs">
                                  <Row className="m-2">
                                    <Col md={8}>
                                      <Card className="img-crd">
                                        <Row className="p-3">
                                          <Col>
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 1"
                                              id="rGraph1"
                                              name="graph"
                                              label="Upload Radiographs Now"
                                              value="1"
                                            />
                                          </Col>
                                          <Col>
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 2"
                                              id="rGraph2"
                                              name="graph"
                                              label="Upload Radiographs later"
                                              value="2"
                                            />
                                          </Col>
                                          <Col>
                                            <Form.Check
                                              type="radio"
                                              aria-label="radio 2"
                                              id="r3"
                                              name="graph"
                                              label="No Radiographs"
                                              value="3"
                                            />
                                          </Col>
                                        </Row>
                                        <hr className="m-2" />
                                        <Card
                                          className="img-crd-in m-2 desc"
                                          id="G1"
                                          // onDragOver={handleOndragOver}
                                          // onDrop={handleOndrop}
                                          // onClick={() => fileInputTab7.current.click()}
                                          >
                                            
                                            
                                          
                                          
                                          <Row className="m-3">

                                              
                                              <Col>
                                              <Card
                                                className="crd-up2"
                                                onDragOver={handleOndragOver}
                                                onDrop={handleOndrop71}
                                                onClick={() =>
                                                  fileInputTab71.current.click()
                                                }
                                              >
                                                {previewUrlTab71 ? (
                                                  ""
                                                ) : (
                                                  <p className="text-center mt-5 pt-5">
                                                    OBJ
                                                  </p>
                                                )}
                                                {previewUrlTab71 && (
                                                  <img
                                                    src={previewUrlTab71}
                                                    alt="image"
                                                    className="img-s m-3"
                                                  />
                                                )}
                                              </Card>
                                            </Col>
                                            
                                          </Row>
                                          <Row className="m-3">
                                              <Col md={6}>
                                                <Card
                                                  className="crd-up2"
                                                  onDragOver={handleOndragOver}
                                                  onDrop={handleOndrop72}
                                                  onClick={() =>
                                                    fileInputTab72.current.click()
                                                  }
                                                  >
                                                  {previewUrlTab72 ? (
                                                    ""
                                                    ) : (
                                                      <p className="text-center mt-5 pt-5">
                                                      Drag Image or click to browse
                                                    </p>
                                                  )}
                                                  {previewUrlTab72 && (
                                                    <img
                                                    src={previewUrlTab72}
                                                    alt="image"
                                                    className="img-s2 m-3"
                                                    />
                                                    )}
                                                </Card>
                                              </Col>
                                            </Row>
                                              
                                          <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInputTab71}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFileTab71(e.target.files[0])
                                            }
                                          />
                                          <input
                                            type="file"
                                            accept="image/*"
                                            ref={fileInputTab72}
                                            hidden
                                            name="Name"
                                            onChange={(e) =>
                                              handleFileTab72(e.target.files[0])
                                            }
                                          />
                                        </Card>
                                        <Card
                                          className="desc p-2"
                                          id="G2"
                                          style={{ display: "none" }}
                                        >
                                          <img
                                            src="https://www.portal.flexalign.in/user/img/bg-x-ray-dis-n.png"
                                            alt=""
                                          />
                                        </Card>
                                        <Card
                                          className="desc p-2"
                                          id="G3"
                                          style={{ display: "none" }}
                                        >
                                          <img
                                            src="https://www.portal.flexalign.in/user/img/bg-x-ray-dis-n.png"
                                            alt=""
                                          />
                                        </Card>
                                      </Card>
                                    </Col>
                                    <Col md={4}>
                                      <Card className="p-3">
                                        <p className="up-rec">UPLOADED RECORDS</p>
                                      </Card>
                                    </Col>
                                  </Row>
                                  {/* <Row>
                <Col>
                <Button variant=""
                 onClick={handleupload}>Submit</Button>
                </Col>
                </Row> */}
                                  <hr />
                                  <Row className="text-end mt-1 mb-2">
                                    <Col className="me-4">
                                      <Button
                                        variant="outline-dark"
                                        className="mx-3"
                                        onClick={() =>
                                          setCurrentTab((prev) => prev - 1)
                                        }
                                      >
                                        Back
                                      </Button>
                                      <Button
                                        className="nextbtn"
                                        //   onClick={handleSubmit}
                                        onClick={handleUpload3}
                                      >
                                        Next
                                      </Button>
                                    </Col>
                                  </Row>
                                </Tab>




                                <Tab eventKey={7} title="8. Upload Video">
                                  <Row className="m-2">
                                    <Col md={12}>
                                      <Card className="p-3">
                                        <p className="up-rec">
                                          UPLOAD VIDEO FILE
                                        </p>
                                        <input type="file" multiple onChange={(e) => {handleChangeVid(e.target.files)}}></input>
                                      </Card>
                                    </Col>
                                  </Row>
                                  <hr />
                                  <Row className="text-end mt-1 mb-2">
                                    <Col className="me-4">
                                      <Button
                                      variant="outline-dark"
                                        className="mx-3 success"
                                        onClick={() =>
                                          setCurrentTab((prev) => prev - 1)
                                        }
                                      >
                                        Back
                                      </Button>
                                      <Button
                                        className="success nextbtn"
                                        // onClick={}
                                      >
                                        Submit
                                      </Button>
                                    </Col>
                                  </Row>
                                </Tab>
                              </Tabs>
                            </Col>
                          </Row>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Form>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default AddPatient;
