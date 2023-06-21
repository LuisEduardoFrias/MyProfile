import Ui from "../../../3_controllers/helpers/ui.js";
import handleUrl from "../../../3_controllers/helpers/handleUrl.js";
import controller_experience from "../../../3_controllers/controller_experience.js";
import { Select } from "../../../3_controllers/helpers/tools.js";

export default function add_experience_page() {
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
                        Input("", "Company", "text", "error", "Company", "fild"),
                        Input(
                           "",
                           "Description",
                           "text",
                           "error",
                           "Description",
                           "fild"
                        ),
                        Input("", "Position", "text", "error", "Position", "fild"),

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

                                          divfather.appendChild(
                                             Input(
                                                null,
                                                "New task",
                                                "text",
                                                "error",
                                                `Task-Name-${countTask}`,
                                                "fild"
                                             )
                                          );
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
                                       "New task",
                                       "t",
                                       "error",
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

                  Button("Save", ".save-btn", null, (e) =>
                     controller_experience.post(da, document.forms[0])
                  ),
               ],
               ".add-page-form form-experience"
            ),
         ],
         ".add-page-container-page"
      ),
   ]);
}
