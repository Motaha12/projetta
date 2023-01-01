var courses = [{
    path: 'courses/cssAnimation.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.5,
    category: 'CSS'
},
{
    path: 'courses/cssColors.png',
    title: 'Couleurs Css',
    price: 6.0,
    category: 'CSS'
},
{
    path: 'courses/cssMesures.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 6.5 ,
    category: 'HTML'
},
{
    path: 'courses/cssProperties.png',
    title: 'CSS Properties',
    price: 7.0,
    category: 'CSS'
},
{
    path: 'courses/cssSelectors.jpg',
    title: 'CSS selectors',
    price: 7.5,
    category: 'css'
},
{
    path: 'courses/htmlAttrVal.jpg',
    title: 'HTML Attributes And values',
    price: 8.0,
    category: 'HTML'
},

{
    path: 'courses/htmlElements.png',
    title: 'HTML element and tags',
    price: 8.5,
    category: 'HTML'
},
{
    path: 'courses/htmlTags.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 9.0,
    category: 'HTML'
},
{
    path: 'courses/javascriptDef.png',
    title: 'what is javascript ?',
    price: 9.5,
    category: 'HTML'
},
{
    path: 'courses/javascriptDOM.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 9.9,
    category: 'js'
},
{
    path: 'courses/javascriptEvents.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 6.7,
    category: 'js'
},
{
    path: 'courses/javascriptFunctions.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.9,
    category: 'js'
},
{
    path: 'courses/javascriptFunctions2.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 8.4,
    category: 'js'
},
{
    path: 'courses/javascriptObjects.png',
    title: 'JavaScript Objects and arrays',
     price: 6.7,
    category: 'js'
},
{
    path: 'courses/javascriptOperators.png',
    title: 'javascript operators and conditions',
    price: 7.7,
    category: 'js'
},
{
    path: 'courses/javascriptOverview.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.8,
    category: 'JS'
},
{
    path: 'courses/javascriptVariables.png',
    title: 'variabls and data type of javascript',
    price: 7.6,
    category: 'JS'
},
{
    path: 'courses/phpBasics.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 8.2,
    category: 'php'
},
{
    path: 'courses/phpCRUD.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.2,
    category: 'PHP'
},
{
    path: 'courses/phpDataBase.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 10.0,
    category: 'PHP'
}]

function show_script(func){
    document.getElementById("container").innerHTML="";
    document.getElementById("container").innerHTML=func;
    document.getElementById("container").setAttribute("style","float:right ; width:80%; margin-top:50px; text-align:right; color:white;  backdrop-filter:blur(20px)");

}
function append_el(el){
    let fig=document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", el.path);
    img.setAttribute("width", "100%");
    img.setAttribute("height", "150px");
    img.setAttribute("style", "border-top-left-radius:10px; border-top-right-radius:10px");
    fig.appendChild(img);
    var titre = document.createElement("figcaption");
    var t = document.createTextNode("\n" + el.title);
    titre.appendChild(t);
    fig.appendChild(titre);
    var prix = document.createElement("figcaption");
    var p = document.createTextNode(el.price + "£");
    prix.appendChild(p);
    fig.appendChild(prix);
    fig.setAttribute("style", "float:right; width:27%; margin:10px; text-align:center; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);font-size:14px; border-radius:10px; backdrop-filter:blur(10px)");
    document.getElementById("container").appendChild(fig);
}

function aucun_resultat(){
    let fig=document.createElement("div");
    var message = document.createElement("figcaption");
    var t = document.createTextNode("Aucun résultat trouvé");
    message.appendChild(t);
    fig.appendChild(message);
    fig.setAttribute("style", "float:right ; width:80%; margin-top:50px; text-align:center; color:white;  background-color: black; backdrop-filter:blur(20px)");
    document.getElementById("container").appendChild(fig);
}


function all(){
    document.getElementById("container").innerHTML="";
    let cp=0;
        for(let x1=0; x1<courses.length; x1++){
            let el= courses[x1];
            append_el(el);
            cp++;}
        if(cp==0){
            aucun_resultat(); 
        }}

function category(btn){
    if(btn.toLowerCase()=="all"){
        all();
    }
    else{
        let cp=0;
        document.getElementById("container").innerHTML="";
        for(let i=0; i<courses.length; i++){
            if(btn.toLowerCase()==courses[i].category.toLowerCase()){
                let el= courses[i];
                append_el(el);
                cp++;}}
            if(cp==0){
                aucun_resultat();  
            }
        }
    }


function prix(){
    let prix1=document.getElementById("price").value;
    document.getElementById("prix").innerHTML=prix1+"£";
    document.getElementById("container").innerHTML="";
    let cp=0;
    for(let i=0; i<courses.length; i++){
        if(prix1>=courses[i].price){
            let el= courses[i];
            append_el(el);
            cp++;}}
        if(cp==0){
            aucun_resultat();
        }}

function search_by_keyword(){
    let nom=document.getElementById("search").value.toLowerCase();
    document.getElementById("container").innerHTML="";
    let cp=0;
    for(let i=0; i<courses.length; i++){
        let pattern="/"+courses[i].title.toLowerCase()+"/";   
        if(pattern.match(nom)!=null){
            let el= courses[i];
            append_el(el);
            cp++;}}
        if(cp==0){
            aucun_resultat(); 
        }
        }
        
   function script(){} 


window.onload=all();