export const P = '#1562ff';
export const S = '#000000';
export const T = '#0096ff';
export const C = '#ff00f1';

export const source =  `${location.protocol}//${location.host}/MyProfile/resource/`;

export const base_url = `${location.protocol}//${location.host}/`;

export const addCI = (elem, classId) => {
    
   if(typeof classId !== "undefined") 
   {
       const _char = classId.charAt(0);
  
       _char == "." ? elem.setAttribute("class",classId.substring(1, classId.length)) :
       _char == "#" ? elem.setAttribute("id", classId.substring(1, classId.length)) :
       console.log('El strig no corresponde con un atributo de class o Id.');
       
   }
   
};

export const Icon = (name, classid) =>  {
    const span = document.createElement("span"); 
    span.innerHTML = name;
    
    if(classid !== undefined) {
        const classids = ".material-icons " +
        classid.substring(1, classid.length);
    
        addCI(span, classids);
    }
    else 
    {
       addCI(span, ".material-icons");
    }
    
    return span;
};

export const Section = (array,classid,style) => {
    const section = document.createElement("section");
    addCI(section,classid);
     
    if(Array.isArray(array)) {
        array.forEach(e => section.appendChild(e));
    }
    
    if(style !== undefined && style !== null)
    {
        section.style.cssText = style;
    }
    
    return section;
};

export const Input = (tittle, placeholder, type, error, name, identiti) => {
 
    identiti = identiti !== undefined ? `-${identiti}` : "";

    const labelT = tittle !== "" ? 
    Label(tittle,`.tittle${identiti}`) : 
    undefined;
    
    const labelE =  Label(error,`.error${identiti} error-input_`);
    
    const input = document.createElement("input");
    input.setAttribute("placeholder",placeholder);
    input.setAttribute("class",`text-box${identiti} text-box-input_`);
    input.setAttribute("type","text");
    input.setAttribute("name",name);
    input.setAttribute("id",name);
    
    if(type === "t")
    {
     input.setAttribute("pattern","[\sa-zA-Z]+");
    }
    else if(type === "n")
    {
     input.setAttribute("pattern","[\s0-9]+");
    }
    
    return Div([labelT, input, labelE ], `.container-input${identiti} container-input_`);
    
};


export const removeChild = (Node, child) => { 
 
 if(isNode(Node)) {
    if(child !== undefined && child !== "")
    { 
        Node.childNodes.forEach(e => {
            const _char = child.charAt(0);
            let identity;
            _char == "." ? identity = e.className :
            _char == "#" ? identity = e.getAttribite("id") : 
            console.log("No se define el tipo de identificadir en el metodo removeChild.");
         
            if(e.className === child.substring(1,child.length))
            { 
                Node.removeChild(e); 
            }
        });
    }
    else 
    {
        while (Node.firstChild) { 
             Node.removeChild(Node.lastChild); 
        }
    }
 }
 else
 {
     console.log("La propiedad no es un Nodo, remove child");
 }};

export const  Label = (text, classId, style) =>
{
    const label = document.createElement("label");
    
    label.innerText = text;
    addCI(label, classId);
    
    if(style !== undefined && style !== null)
    {
        label.style.cssText = style;
    }
    
    return label;
};

export const Nav = (array, classid, style) => {
     const nav = document.createElement("nav");
     addCI(nav,classid);
     
     if(Array.isArray(array)) {
         array.forEach(e => nav.appendChild(e));
     }
     
     if(style !== undefined && style !== null)
     {
        section.style.cssText = style;
     }
    
     return nav;
}
 
export const Ul = (array, style, li_style) => {
    const ul = document.createElement("ul");
    
    if(Array.isArray(array)) {
        array.forEach(e => { 
            const li = document.createElement("li");
            
            if(li_style !== undefined && li_style !== null)
            {
                li.style.cssText = li_style;
            }
            
            li.appendChild(e);
            ul.appendChild(li);
        })
    }
    
    if(style !== undefined && style !== null)
    {
        ul.style.cssText = style;
    }
    
    return ul;
}
 
export const Img = (src, alt, classId, style, event_click) => {
   const img = document.createElement("img");
   img.src = source + src;
   img.alt = alt;
   addCI(img, classId);
   
   if(event_click === true)
   {
       img.addEventListener("click",(e) => 
       showImg(source + src,alt));
   }
   
    if(style !== undefined && style !== null)
    {
        img.style.cssText = style;
    }
   return img;
};

const showImg = (src, alt) => {
    const btn = Button(Icon("cancel","showImg-btn"),".showImg-btn-close");
    
    const main = Select(".container-main");
    
    btn.addEventListener("click", (e) => {
        document.body.style.overflow = "auto";
        removeChild(main,".showImg-container");
    });

    document.body.style.overflow = "hidden";
        
     main.appendChild(Div([btn,
     Img(
     src, 
     alt, 
     ".showImg-img", 
     "--width: 95%; height: 70%;")],".showImg-container",
     `top: ${-1 * document.body.getBoundingClientRect().y}px;`));
};

export const Div = (array, classId, style) => {

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
  
    if(style !== undefined && style !== null)
    {
        div.style.cssText = style;
    }
    
    return div;
}

export const isNode = (element) => element instanceof Element || element instanceof HTMLDocument;


export const Button = (text, classId) => {
    const Button = document.createElement("button");
    
    if(text !== undefined && text !== "")
    {
        if(isNode(text))
        {
            Button.appendChild(text)
        }
        else
        {
            Button.innerText = text;
        }
    }
    
    addCI(Button, classId);
    return Button;
} 

export const A = (href, text, classId, style) => {
 
    const node = document.createElement("a");
     
    node.appendChild(document.createTextNode(text));
    node.href = href;
    node.setAttribute("rel", "noopener noreferrer"); 
    node.setAttribute("target", "_blank");
   
    addCI(node, classId);
   
    if(style !== undefined && style !== null)
    {
        node.style.cssText = style;
    }
    
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
