//import {a} from  "./comp/home.js";
 //import {FetchTemplate} from "./comp/setting_component.js";
import {home,about} from "./comp/functionall.js";
 let routes = {};
 let templates = {};
 let app_div = document.getElementById('app');


function comtb(data){
    const js = JSON.parse(data);
    var div = document.createElement("div");
    var ul= document.createElement("ul");
        ul.setAttribute("type","1");
        js.map(el=>{
            var li = document.createElement("li");
            li.textContent=`${el.title}`;
        
            ul.appendChild(li);
        })
    div.appendChild(ul);
    
    return div;
}
function route (path, template) {
    if (typeof template === 'function') {
        return routes[path] = template;
    }
    else if (typeof template === 'string') {
        return routes[path] = templates[template];
    } else {
        return;
    };
};
function template (name, templateFunction) {
    return templates[name] = templateFunction;
};

template('home', function(){
    home(app_div);
});

template('about', function(){
    about(app_div);
});

route('/', 'home');
route('/about', 'about');

function resolveRoute(route) {
    try {
        return routes[route];
    } catch (e) {
        throw new Error(`Route ${route} not found`);
    };
};

function router(evt) {
    let url = window.location.hash.slice(1) || '/';
    let route = resolveRoute(url);
    route();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);




