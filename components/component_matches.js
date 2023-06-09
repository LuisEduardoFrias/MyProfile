import { getdata, all } from "../data/data_access.js";

import { Select, Ui, RemoveChild } from "../js/tools.js";

import cp_profile from "../components/component_profile.js";
import cp_skill from "./component_skill.js";
import cp_experience from "./component_experience.js";
import cp_proyect from "./component_proyect.js";
import cp_education from "./component_education.js";
import cp_reference from "./component_reference.js";

export default function matches() {
   /* history.pushState(null, "", "app");*/

   const main = Select(".container-main");
   RemoveChild(main);
   main.appendChild(cp_profile());

   const bojp = `[
      {
         "key": "fb96d2da-400e-4de4-bf38-86d7dc0a80b4",
         "nombre": "minino",
         "tipo": "gato",
         "edad": 3
      },
      {
         "key": "682ef848-820a-476a-a211-85a103368a18",
         "nombre": "negro",
         "tipo": "perro",
         "edad": 2
      },
      {
         "key": "ff4d209e-7eda-48c0-9bad-5970b92ce452",
         "nombre": "pelusa",
         "tipo": "perro",
         "edad": 1
      },
      {
         "key": "b8a72ec4-ffbd-4bc4-8039-1aefc02c001c",
         "nombre": "mariposa",
         "tipo": "gato",
         "edad": 4
      }
         ]`;

   (async () => {
      const data1 = await getdata(all);
      main.appendChild(
         Ui.Section(
            [
               Ui.Div(
                  [Ui.ViewData(data1.experiences)],
                  ".matches-div matches_container_section"
               ),
               Ui.Div(
                  [
                     Ui.Line(),
                     Ui.Label("Habilidades", ".main-tittle"),
                     Ui.Div([], ".skills matches_container_into"),
                  ],
                  ".matches-div matches_container_section"
               ),

               Ui.Div(
                  [
                     Ui.Line(),
                     Ui.Label("Experiencia laboral", ".main-tittle"),
                     Ui.Div(
                        [
                           Ui.Icon(
                              "arrow_back_ios",
                              ".experiences-arrow-button arrow-button"
                           ),
                           Ui.Div([], ".experiences matches_container_into"),
                           Ui.Icon(
                              "arrow_forward_ios",
                              ".experiences-arrow-button arrow-button"
                           ),
                        ],
                        ".matches_container_into slider_arrow"
                     ),
                  ],
                  ".matches-div matches_container_section"
               ),

               Ui.Div(
                  [
                     Ui.Line(),
                     Ui.Label("Proyectos personales", ".main-tittle"),
                     Ui.Div(
                        [
                           Ui.Icon(
                              "arrow_back_ios",
                              ".proyect-arrow-button arrow-button"
                           ),
                           Ui.Div([], ".proyects matches_container_into"),
                           Ui.Icon(
                              "arrow_forward_ios",
                              ".proyect-arrow-button arrow-button"
                           ),
                        ],
                        ".matches_container_into slider_arrow"
                     ),
                  ],
                  ".matches-div matches_container_section"
               ),

               Ui.Div(
                  [
                     Ui.Line(),
                     Ui.Label("Educacion", ".main-tittle"),
                     Ui.Div([], ".educations matches_container_into"),
                  ],
                  ".matches-div matches_container_section"
               ),

               Ui.Div(
                  [
                     Ui.Line(),
                     Ui.Label("Referencia", ".main-tittle"),
                     Ui.Div([], ".references matches_container_into"),
                  ],
                  ".matches-div matches_container_section"
               ),
            ],
            ".container"
         )
      );

      const data = await getdata(all);

      data.skills?.forEach((i) => cp_skill(Select(".skills"), i));

      data.experiences?.forEach((i) =>
         cp_experience(Select(".experiences"), i)
      );

      data.proyects?.forEach((i) => cp_proyect(Select(".proyects"), i));

      data.educations?.forEach((i) => cp_education(Select(".educations"), i));

      data.references?.forEach((i) => cp_reference(Select(".references"), i));
   })();
}
