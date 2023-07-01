import {
   skills,
   experiences,
   proyects,
   educations,
   references,
} from "../../1_models/models.js";

import Ui from "../../3_controllers/helpers/ui.js";

import {
   Select,
   RemoveChild,
   IsNode,
} from "../../3_controllers/helpers/tools.js";

import cp_skill from "../components/component_skill.js";
import cp_experience from "../components/component_experience.js";
import cp_proyect from "../components/component_proyect.js";
import cp_education from "../components/component_education.js";
import cp_reference from "../components/component_reference.js";

export default function home_horizontal_page(gate) {
   const { Div, Section } = Ui;

   function clearAdd(page) {
      const section = Select(".container-horizontal");
      RemoveChild(section);

      const appendchild = (value) => {
         let isnode = true;
         if (Array.isArray(value)) {
            value.forEach((e) => {
               if (IsNode(e)) section.appendChild(e);
               else isnode = false;
            });
         } else {
            if (IsNode(value)) section.appendChild(value);
            else isnode = false;
         }
         if (!isnode) Error(`Error: El elemento no es un Nodo. Ui.Section.`);
      };

      if (page.toString() === "[object Promise]") {
         page.then((value) => appendchild(value));
      } else {
         appendchild(page);
      }
   }

   const btnS = Select(".memu-btn-skill");
   const btnE = Select(".menu-btn-experience");
   const btnD = Select(".menu-btn-education");
   const btnP = Select(".menu-btn-proyect");
   const btnR = Select(".menu-btn-reference");

   function skill() {
      clearAdd(
         (async () => {
            const data = await gate.get(skills);

            return Div(
               data.map((i) => cp_skill(i)),
               ".skills matches-div"
            );
         })()
      );
   }

   skill();

   /* ********************************** */

   btnS.addEventListener("click", (event) => skill());

   /* ********************************** */

   btnE.addEventListener("click", (event) => {
      clearAdd(
         (async () => {
            const data = await gate.get(experiences);

            return Div(
               data.map((i) => cp_experience(i)),
               ".experiences matches-div"
            );
         })()
      );
   });

   /* ********************************** */

   btnP.addEventListener("click", (event) => {
      clearAdd(
         (async () => {
            const data = await gate.get(proyects);

            return Div(
               data.map((i) => cp_proyect(i)),
               ".proyects matches-div"
            );
         })()
      );
   });

   /* ********************************** */

   btnD.addEventListener("click", (event) => {
      clearAdd(
         (async () => {
            const data = await gate.get(educations);

            return Div(
               data.map((i) => cp_education(i)),
               ".educations matches-div"
            );
         })()
      );
   });

   /* ********************************** */

   btnR.addEventListener("click", (event) => {
      clearAdd(
         (async () => {
            const data = await gate.get(references);

            return Div(
               data.map((i) => cp_reference(i)),
               ".references matches-div"
            );
         })()
      );
   });
}
