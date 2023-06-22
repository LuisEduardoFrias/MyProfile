export const base_url = `${location.protocol}//${location.host}/`;
export const aserts = `${location.protocol}//${location.host}/aserts/`;

export function Error(e) {
   console.error(e);
}
export function Warn(e) {
   console.warn(e);
}
export function l(e) {
   console.log("%c Log:" + e, "background: #222; color: #bada55");
}

export function AddCI(elem, classId) {
   if (classId !== undefined && classId !== null && classId !== "") {
      const _char = classId.charAt(0);

      _char == "."
         ? elem.setAttribute("class", classId.substring(1, classId.length))
         : _char == "#"
         ? elem.setAttribute("id", classId.substring(1, classId.length))
         : Warn(
              "warnning: El strig no especifica si es un atributo de class (.) o Id (#). tools.AddCI"
           );
   }
}

export function Mapper(form, model) {
   const keys = Reflect.ownKeys(new model());
   const value = [];

   keys.forEach((key) => {
      for (const i in form.elements) {
         if (form.elements[i].name === key) {
            value.push(form.elements[i].value.replace("C:\\fakepath\\", ""));
            break;
         }
      }
   });

   return Reflect.construct(model, value);
}

export function clearForm(form) {
   for (const i in form.elements) {
      if (`${form.elements[i]}` === "[object HTMLInputElement]") {
         form.elements[i].value = "";
      }
   }
}

export function RemoveChild(Node, child) {
   if (IsNode(Node)) {
      if (child !== undefined && child !== null) {
         Node.childNodes.forEach((e) => {
            const _char = child.charAt(0);
            let identity;
            _char == "."
               ? (identity = e.className)
               : _char == "#"
               ? (identity = e.getAttribite("id"))
               : Error(
                    "Error: El strig no especifica si es un atributo de class (.) o Id (#). tools.AddCI"
                 );

            if (e.className === identity) {
               Node.removeChild(e);
            }
         });
      } else {
         while (Node.firstChild) {
            Node.removeChild(Node.lastChild);
         }
      }
   } else {
      Error("Error: El argumento no es un Nodo, tools.RemoveChild.");
   }
}

export function IsNode(element) {
   return element instanceof Element || element instanceof HTMLDocument;
}

export function Select(ele) {
   return ele.charAt(0) == "."
      ? document.querySelector(ele)
      : ele.charAt(0) == "#"
      ? document.querySelector(ele)
      : Error(
           "Error: El strig no especifica si es un atributo de class (.) o Id (#). tools.AddCI"
        );
}

export function MediaQuery(query, home_vertical, home_horizontal) {
   const MediaQuery = window.matchMedia(`(${query})`);

   function handleTabletChange(e) {
      if (e.matches) {
         home_vertical();
      } else {
         home_horizontal();
      }
   }

   MediaQuery.addListener(handleTabletChange);

   handleTabletChange(MediaQuery);
}
