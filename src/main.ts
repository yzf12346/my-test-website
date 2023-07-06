import { ObserverPage } from "./page";
import "./style.css"

const loading = document.querySelector<HTMLDivElement>(".loading");
const container = document.querySelector<HTMLDivElement>(".container");

window.addEventListener("load",()=>{
    loading.className = "loading done";
    container.style.visibility = "visible";
});

ObserverPage(container,[document.querySelector(".page3")],enter=>{
    enter.className = "page page3 active";
},exit=>{
    exit.className = "page page3";
});