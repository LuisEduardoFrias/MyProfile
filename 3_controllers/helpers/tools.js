export const base_url = `${location.protocol}//${location.host}/`;
export const source = `${location.protocol}//${location.host}/aserts/`;

export class Colors {
   static P = "#1562ff";
   static S = "#000000";
   static T = "#0096ff";
   static C = "#e55f85";
}

function AddCI(elem, classId) {
   if (classId !== undefined && classId !== null && classId !== "") {
      const _char = classId.charAt(0);

      _char == "."
         ? elem.setAttribute("class", classId.substring(1, classId.length))
         : _char == "#"
         ? elem.setAttribute("id", classId.substring(1, classId.length))
         : console.log(
              "El strig no corresponde con un atributo de class o Id."
           );
   }
}

export function RemoveChild(Node, child) {
   if (IsNode(Node)) {
      if (child !== undefined && child !== "") {
         Node.childNodes.forEach((e) => {
            const _char = child.charAt(0);
            let identity;
            _char == "."
               ? (identity = e.className)
               : _char == "#"
               ? (identity = e.getAttribite("id"))
               : console.log(
                    "No se define el tipo de identificadir en el metodo RemoveChild."
                 );

            if (e.className === child.substring(1, child.length)) {
               Node.removeChild(e);
            }
         });
      } else {
         while (Node.firstChild) {
            Node.removeChild(Node.lastChild);
         }
      }
   } else {
      console.log("La propiedad no es un Nodo, remove child");
   }
}

export function IsNode(element) {
   element instanceof Element || element instanceof HTMLDocument;
}

export function Select(ele) {
   const _char = ele.charAt(0);

   return _char == "."
      ? document.querySelector(ele)
      : _char == "#"
      ? document.querySelector(ele)
      : console.log("El strig no corresponde con un atributo de class o Id.");
}

function MediaQuery(query, home_vertical, home_horizontal) {
   const MediaQuery = window.matchMedia(`(${query})`);

   function handleTabletChange(e) {
      if (e.matches) {
         matches();
      } else {
         no_matches();
      }
   }

   MediaQuery.addListener(handleTabletChange);

   handleTabletChange(MediaQuery);
}
