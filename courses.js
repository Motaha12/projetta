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
}


]
function remplir(){
    let cp=0;
        let x1 =Math.floor(Math.random() * courses.length);
        let x = x1;
        do{
        let el= courses[x1];
        
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
        x=x1;
        x1 =Math.floor(Math.random() * courses.length);
        cp++;
        console.log(cp);}
    while(x!=x1 && cp<3)}
        

window.onload=remplir();
      