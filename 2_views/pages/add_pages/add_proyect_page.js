import Ui from "../../../3_controllers/helpers/ui.js";
import handleUrl from "../../../3_controllers/helpers/handleUrl.js";
import { Select, RemoveChild } from "../../../3_controllers/helpers/tools.js";

import controller_proyect from "../../../3_controllers/controller_proyect.js";

export default function add_proyect_page(gate) {
   //
   const { Div, Label, Button, Input, Form } = Ui;
   let countRepo = 1;
   let countTern = 1;
   //
   return Form([
      Div(
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
                        Input(
                           null,
                           "Tittle",
                           true,
                           null,
                           null,
                           "Tittle",
                           "fild"
                        ),
                        Input(
                           null,
                           "Description",
                           true,
                           null,
                           null,
                           "Description",
                           "fild"
                        ),

                        Div(
                           [
                              Div(
                                 [
                                    Label(
                                       "Ternologys",
                                       ".add-page-tittle-terno"
                                    ),
                                    Ui.Button(
                                       Ui.Icon("add_circle", "icon-switch"),
                                       ".btn-add-fild",
                                       null,
                                       (e) => {
                                          const divfather =
                                             Select(".ternology");

                                          divfather.appendChild(
                                             Input(
                                                null,
                                                "Ternology",
                                                true,
                                                null,
                                                null,
                                                `Tern-Name-${countTern}`,
                                                `fild focus-${countTern}`
                                             )
                                          );
                                          Select(`.focus-${countTern}`).focus();
                                          countTern++;
                                       }
                                    ),
                                 ],
                                 ".add-btn-header"
                              ),
                              Div(
                                 [
                                    Input(
                                       null,
                                       "Other ternology",
                                       true,
                                       null,
                                       null,
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
                                    Label(
                                       "Repositorys",
                                       ".add-page-tittle-repo"
                                    ),
                                    Ui.Button(
                                       Ui.Icon("add_circle", "icon-switch"),
                                       ".btn-add-fild",
                                       null,
                                       (e) => {
                                          const divfather =
                                             Select(".repository");

                                          divfather.appendChild(
                                             Input(
                                                null,
                                                "Repository",
                                                true,
                                                null,
                                                null,
                                                `Repo-Name-${countRepo}`,
                                                `fild`
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
                                       null,
                                       "Other repoditory",
                                       true,
                                       null,
                                       null,
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

                  Button("Save", ".save-btn", null, (e) => {
                     controller_proyect.post(gate, document.forms[0]);

                     const divTern = Select(".ternology");
                     const divRep = Select(".repository");

                     RemoveChild(divTern);
                     RemoveChild(divRep);

                     divTern.appendChild(
                        Input(
                           null,
                           "Ternology",
                           true,
                           null,
                           null,
                           "Tern-Name-0",
                           "fild"
                        )
                     );

                     divRep.appendChild(
                        Input(
                           null,
                           "Repoditory",
                           true,
                           null,
                           null,
                           `Repo-Name-0`,
                           "fild"
                        )
                     );
                  }),
               ],
               ".add-page-form form-proyect"
            ),
         ],
         ".add-page-container-page"
      ),
   ]);
}
