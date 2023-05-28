export const P = '#1562ff';
export const S = '#000000';
export const T = '#0096ff';
export const C = '#ff00f1';

export const source = '/resource/';

export const base_url = `${location.protocol}//${location.host}`;

export const addCI = (elem, classId) => {
    
   if(typeof classId !== "undefined") 
   {
       const _char = classId.charAt(0);
  
       _char == "." ? elem.className += ` ${ classId.substring(1, classId.length)}` :
       _char == "#" ? elem.setAttribute("id", classId.substring(1, classId.length)) :
       console.log('El strig no corresponde con un atributo de class o Id.');
       
   }
   
}

export const removeChild = (Node) => { 
 if(isNode(Node)) {
     while (Node.firstChild) { Node.removeChild(Node.lastChild); }
 }
 else
 {
     console.log("La propiedad no es un Nodo, remove child");
 }}

export const  Label = (text, classId) =>
{
    const label = document.createElement("label")
    label.innerHTML = text;
    addCI(label, classId);
    return label;
} 

export const Img = (src, alt, classId) => {
   const img = document.createElement("img");
   img.src = src;
   img.alt = alt;
   addCI(img, classId);
   return img;
} 

export const Div = (array, classId) => {

    const div = document.createElement("div");
    
    addCI(div, classId);
    
    if(Array.isArray(array))
    {
        const i = 0;
        
        array.forEach(element => {
        
            if(element !== null) {
                if (isNode(element)){
                    div.appendChild(element);
                }
                else {
                    console.log(`El elemento ${i} del Array no es un elemento html`);
                }
            }
        } );
    }
    else {
        console.log('El angumento, no es un Array de elementos html');
    }
  
    return div;
}

export const isNode = (element) => element instanceof Element || element instanceof HTMLDocument;


export const Buttom = (text, classId) => {
    const buttom = document.createElement("button");
    buttom.innerText = text;
    addCI(buttom, classId);
    return buttom;
} 

export const A = (href, text, classId) => {
 
    const node = document.createElement("a");
     
    node.appendChild(document.createTextNode(text));
    node.href = href;
    node.setAttribute("rel", "noopener noreferrer"); 
    node.setAttribute("target", "_blank");
   
    addCI(node, classId);
      
    return node;
}

export const Hr = () => document.createElement("hr");

export const Select = (ele) => {
 
 const _char = ele.charAt(0);
  
 return _char == "." ? document.querySelector(ele) :
        _char == "#" ? document.querySelector(ele) :
 console.log('El strig no corresponde con un atributo de class o Id.') ;
 
};

export const mediaQuery = (query, matches, no_matches) => {
 
const mediaQuery = window.matchMedia(`(${query})`);
 
function handleTabletChange(e) 
{
  if (e.matches) 
  {
    matches();
  }
  else 
  {
    no_matches();
  }
}
 
mediaQuery.addListener(handleTabletChange)

handleTabletChange(mediaQuery)

}