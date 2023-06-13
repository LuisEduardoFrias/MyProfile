//components
import cp_profile from "../../3_views/components/component_profile.js";
//pages add
import addSkillPage from "../../3_views/pages/add_data/add_skill_page.js";
import addExperiencePage from "../../3_views/pages/add_data/add_experience_page.js";
import addProyectPage from "../../3_views/pages/add_data/add_proyect_page.js";
import addEducationPage from "../../3_views/pages/add_data/add_education_page.js";
import addReferencePage from "../../3_views/pages/add_data/add_reference_page.js";
//pages view
import viewSkillPage from "../../3_views/pages/view_data/view_skill_page.js";
import viewExperiencePage from "../../3_views/pages/view_data/view_experience_page.js";
import viewProyectPage from "../../3_views/pages/view_data/view_proyect_page.js";
import viewEducationPage from "../../3_views/pages/view_data/view_education_page.js";
import viewReferencePage from "../../3_views/pages/view_data/view_reference_page.js";
//pages
import cp_home_vertical from "../../3_views/pages/home_vertical_page.js";
import cp_home_horizontal from "../../3_views/pages/home_horizontal_page.js";
import settingPage from "../../3_views/pages/occion_settings_page.js";
import errorpage from "../../3_views/pages/error_page.js";
//
export const source = `${location.protocol}//${location.host}/aserts/`;

export const base_url = `${location.protocol}//${location.host}/`;

const AddCI = (elem, classId) => {
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
};

export const RemoveChild = (Node, child) => {
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
};


export const IsNode = (element) =>
   element instanceof Element || element instanceof HTMLDocument;

export const Select = (ele) => {
   const _char = ele.charAt(0);

   return _char == "."
      ? document.querySelector(ele)
      : _char == "#"
      ? document.querySelector(ele)
      : console.log("El strig no corresponde con un atributo de class o Id.");
};

const MediaQuery = (query, matches, no_matches) => {
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
};

export class Colors {
   static P = "#1562ff";
   static S = "#000000";
   static T = "#0096ff";
   static C = "#e55f85";
}
