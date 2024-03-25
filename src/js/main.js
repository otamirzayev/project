import "../css/main.css";
import request from "./request";
import { upDateUI } from "./updateUi";
import "./search"
import "./mode";



const API = "https://restcountries.com/v3.1/all"

request(API)
.then((data)=> { upDateUI(data)})
.catch((err)=>{console.log(err)})