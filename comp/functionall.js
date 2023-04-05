import {FetchTemplate} from "./setting_component.js";
export  async function home(el){
        // const s = {
        //     data:"ok"
        // }
        // var xhttp = new XMLHttpRequest();
        //     xhttp.onreadystatechange =function(){
        //         if (this.readyState==4 && this.status==200) {
                    
        //             app_div.replaceChildren(comtb(this.responseText));
        //         }
        //     }
        //     xhttp.open("GET","https://jsonplaceholder.typicode.com/posts",true);
        //     xhttp.setRequestHeader("Content-Type","application/json; charset=utf-8");
        //     xhttp.send();
        //     xhttp.onload=function(){
        //         console.log("Загружено");
        //     }
        //     xhttp.onprogress = function(event) { // запускается периодически
        //         // event.loaded - количество загруженных байт
        //         // event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
        //         // event.total - количество байт всего (только если lengthComputable равно true)
        //         console.log(`Загружено ${event.loaded} из ${event.total}`);
        //       };
    
         const template = await FetchTemplate("./htmlcomp/hometmp.html",import.meta.url);
         el.innerHTML=  template; 
         document.getElementById("ok").onclick=()=>{
                ok();
         }

}


function ok(){
        alert("jake");
}

export async function about(el){
        const template  = await FetchTemplate("./htmlcomp/about.html", import.meta.url);
        el.innerHTML = template;
}