import "../css/main.css"
import "./mode"
import request from "./request"
import { creatCountryInfo } from "./updateUi"

const querySting = window.location.search
const url = new URLSearchParams(querySting)
const country = url.get("country");
const countryAPI = `https://restcountries.com/v3.1${country}`;
request(countryAPI)
.then((data) => {creatCountryInfo(data[0])})
.catch((err) => {console.log(err)})
// s