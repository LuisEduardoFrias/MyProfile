import { getdata, all } from "../data/data_access.js";

import { Select, Ui, RemoveChild } from "../../1_controllers/js/tools.js";

import cp_skill from "../components/component_skill.js";
import cp_experience from "../components/component_experience.js";
import cp_proyect from "../components/component_proyect.js";
import cp_education from "../components/component_education.js";
import cp_reference from "../components/component_reference.js";
import cp_profile from "../components/component_profile.js";
import cp_menu from "../components/component_menu.js";

export default function homeVertcal() {

   const main = Select(".container-main");
   RemoveChild(main);
   main.appendChild(cp_profile());

   (async () => {
      main.appendChild(
         Ui.Section(
            [
               Ui.Div(
                  [
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
