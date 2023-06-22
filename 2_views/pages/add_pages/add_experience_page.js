import Ui from "../../../3_controllers/helpers/ui.js";
import handleUrl from "../../../3_controllers/helpers/handleUrl.js";
import controller_experience from "../../../3_controllers/controller_experience.js";
import { Select, RemoveChild } from "../../../3_controllers/helpers/tools.js";

export default function add_experience_page(gate) {
   //
   const { Div, Label, Button, Input, Form } = Ui;
   let countTask = 1;
   //
   return Form([
      Div(
         [
            Div(
               [
                  Button("back", ".back-btn", null, (e) => {
                     handleUrl.back();
                  }),
                  Label("Add New Experience", ".add-page-tittle-page"),
               ],
               ".add-page-container-back-btn-tittle"
            ),

            Div(
               [
                  Div(
                     [
                        Input(
                           null,
                           "Company",
                           true,
                           null,
                           null,
                           "Company",
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
                        Input(
                           null,
                           "Position",
                           true,
                           null,
                           null,
                           "Position",
                           "fild"
                        ),

                        Div(
                           [
                              Div(
                                 [
                                    Label("Task", ".add-page-tittle-task"),
                                    Ui.Button(
                                       Ui.Icon("add_circle", "icon-switch"),
                                       ".btn-add-fild",
                                       null,
                                       (e) => {
                                          const divfather = Select(".task");

                                          const inp = Input(
                                             null,
                                             "Other Task",
                                             true,
                                             null,
                                             null,
                                             `Tern-Name-${countTask}`,
                                             "fild"
                                          );

                                          inp.addEventListener(
                                             "DOMNodeInserted",
                                             (e) => {
                                                e.focus();
                                                alert("was insert");
                                             },
                                             false
                                          );

                                          divfather.appendChild(inp);

                                          countTask++;
                                       }
                                    ),
                                 ],
                                 ".add-btn-header"
                              ),
                              Div(
                                 [
                                    Input(
                                       null,
                                       "Task",
                                       true,
                                       null,
                                       null,
                                       "Tern-Name-0",
                                       "fild"
                                    ),
                                 ],
                                 ".task add-item-group"
                              ),
                           ],
                           ".task-group"
                        ),
                     ],
                     ".add-page-filds"
                  ),

                  Button("Save", ".save-btn", null, (e) => {
                     controller_experience.post(gate, document.forms[0]);

                     const divtack = Select(".task");

                     RemoveChild(divtack);
                     
                     divtack.appendChild(Input(
                                       null,
                                       "Task",
                                       true,
                                       null,
                                       null,
                                       "Tern-Name-0",
                                       "fild"
                                    ),)
                  }),
               ],
               ".add-page-form form-experience"
            ),
         ],
         ".add-page-container-page"
      ),
   ]);
}
