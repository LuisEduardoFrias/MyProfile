import Ui from "../../../3_controllers/helpers/ui.js";
import handleUrl from "../../../3_controllers/helpers/handleUrl.js";
import { Select } from "../../../3_controllers/helpers/tools.js";

import controller_proyect from "../../../3_controllers/controller_proyect.js";

export default function add_proyect_page() {
   //
   const { Div, Label, Button, Input, Form } = Ui;
   let countRepo = 1;
   let countTern = 1;
   //
   return Form([Div(
      [
         Div(
            [
               Button("back", ".back-btn", null, (e) => {
                  handleUrl.back();
               }),
               Label("Add New Proyect", ".add-page-tittle-page"),
            ],
            ".add-page-container-back-btn-tittle"
         ),

         Div(
            [
               Div(
                  [
                     Input("", "Tittle", "text", "error", "Tittle", "fild"),
                     Input("", "Description", "text", "error", "Description", "fild"),

                     Div(
                        [
                           Div(
                              [
                                 Label("Ternologys", ".add-page-tittle-terno"),
                                 Ui.Button(
                                    Ui.Icon("add_circle", "icon-switch"),
                                    ".btn-add-fild",
                                    null,
                                    (e) => {
                                       const divfather = Select(".ternology");

                                       divfather.appendChild(
                                          Input(
                                             "",
                                             "New ternology",
                                             "text",
                                             "error",
                                             `Tern-Name-${countTern}`,
                                             "fild"
                                          )
                                       );
                                       countTern++;
                                    }
                                 ),
                              ],
                              ".add-btn-header"
                           ),
                           Div(
                              [
                                 Input(
                                    "",
                                    "New ternology",
                                    "t",
                                    "error",
                                    "Tern-Name-0",
                                    "fild"
                                 ),
                              ],
                              ".ternology add-item-group"
                           ),
                        ],
                        ".ternology-group"
                     ),
                     Div(
                        [
                           Div(
                              [
                                 Label("Repositorys", ".add-page-tittle-repo"),
                                 Ui.Button(
                                    Ui.Icon("add_circle", "icon-switch"),
                                    ".btn-add-fild",
                                    null,
                                    (e) => {
                                       const divfather = Select(".repository");

                                       divfather.appendChild(
                                          Input(
                                             "",
                                             "New repository",
                                             "text",
                                             "error",
                                             `Repo-Name-${countRepo}`,
                                             "fild"
                                          )
                                       );

                                       countRepo++;
                                    }
                                 ),
                              ],
                              ".add-btn-header"
                           ),
                           Div(
                              [
                                 Input(
                                    "",
                                    "New repository",
                                    "t",
                                    "error",
                                    "Repo-Name-0",
                                    "fild"
                                 ),
                              ],
                              ".repository add-item-group"
                           ),
                        ],
                        ".reository-group"
                     ),
                  ],
                  ".add-page-filds"
               ),

               Button("Save", ".save-btn", null, (e) =>
                  controller_proyect.post(da, document.forms[0])
               ),
            ],
            ".add-page-form form-proyect"
         ),
      ],
      ".add-page-container-page"
   )])
}
