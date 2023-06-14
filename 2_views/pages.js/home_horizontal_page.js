import {
   getdata,
   skills,
   experiences,
   proyects,
   educations,
   references,
} from "../data/data_access.js";

import { Select, RemoveChild, Ui } from "../../1_controllers/js/tools.js";

import cp_skill from "../components/component_skill.js";
import cp_experience from "../components/component_experience.js";
import cp_proyect from "../components/component_proyect.js";
import cp_education from "../components/component_education.js";
import cp_reference from "../components/component_reference.js";
import cp_profile from "../components/component_profile.js";
import cp_menu from "../components/component_menu.js";

export default function homeHorizontal() {
   const { Div, Section } = Ui;

   const main = Select(".container-main");
   const section = Div([], ".container");

   RemoveChild(main);
   main.appendChild(cp_profile());
   main.appendChild(cp_menu());
   main.appendChild(section);

   const btnS = Select(".memu-btn-skill");
   const btnE = Select(".menu-btn-experience");
   const btnD = Select(".menu-btn-education");
   const btnP = Select(".menu-btn-proyect");
   const btnR = Select(".menu-btn-reference");

   function skill() {
      RemoveChild(section);

      (async () => {
         section.appendChild(Div([], ".skills matches-div"));

         const data = await getdata(skills);
         data?.forEach((i) => cp_skill(Select(".skills"), i));
      })();
   }

   skill();

   /* ********************************** */

   btnS.addEventListener("click", (event) => skill());

   /* ********************************** */

   btnE.addEventListener("click", (event) => {
      RemoveChild(section);

      (async () => {
         section.appendChild(Div([], ".experiences matches-div"));

         const data = await getdata(experiences);
         data?.forEach((i) => cp_experience(Select(".experiences"), i));
      })();
   });

   /* ********************************** */

   btnP.addEventListener("click", (event) => {
      RemoveChild(section);

      (async () => {
         section.appendChild(Div([], ".proyects matches-div"));

         const data = await getdata(proyects);
         data?.forEach((i) => cp_proyect(Select(".proyects"), i));
      })();
   });

   /* ********************************** */

   btnD.addEventListener("click", (event) => {
      RemoveChild(section);

      (async () => {
         section.appendChild(Div([], ".educations matches-div"));

         const data = await getdata(educations);
         data?.forEach((i) => cp_education(Select(".educations"), i));
      })();
   });

   /* ********************************** */

   btnR.addEventListener("click", (event) => {
      RemoveChild(section);

      (async () => {
         section.appendChild(Div([], ".references matches-div"));

         const data = await getdata(references);
         data?.forEach((i) => cp_reference(Select(".references"), i));
      })();
   });
}
