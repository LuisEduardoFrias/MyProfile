export const float_button = (iconName, evenClick) => {
    
    const btn = document.createElement("div");
          btn.className = "push_btn";
    
    const border = document.createElement("div");
          border.className = "border_push_btn";
    
    const center = document.createElement("div");
          center.className = "center_push_btn";
          
    const span = document.createElement("span");
          span.innerText = iconName;
          span.className = "material-icons";
    
          center.appendChild(span);
          border.appendChild(center);
          btn.appendChild(border);
          
          if (evenClick !== "undefiner") {
              
              btn.addEventListener("click", evenClick);
          }
          
          return btn;
}



