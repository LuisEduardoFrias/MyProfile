import Ui from "../../../3_controllers/helpers/ui.js";
import handleUrl from "../../../3_controllers/helpers/handleUrl.js";
import controller_skill from "../../../3_controllers/controller_skill.js";

export default function add_skill_page(da) {
   //
   const { Div, Label, Button, Input, Form, Select } = Ui;
   //
   return Form([
      Div(
         [
            Div(
               [
                  Button("back", ".back-btn", null, (e) => {
                     handleUrl.back();
                  }),
                  Label("Add New Skill", ".add-page-tittle-page"),
               ],
               ".add-page-container-back-btn-tittle"
            ),

            Div(
               [
                  Div(
                     [
                        Input(
                           null,
                           "Name",
                           true,
                           null,
                           "error",
                           "Name",
                           "fild"
                        ),
                        Input(
                           null,
                           "Image name",
                           true,
                           "file",
                           "error",
                           "ImageName",
                           "fild"
                        ),
                        
                     ],
                     ".add-page-filds"
                  ),

                  Button("Save", ".save-btn hadd-page-save-btn", null, (e) => {
                     controller_skill.post(da, document.forms[0]);
                  }),
               ],
               ".add-page-form form-skill"
            ),
         ],
         ".add-page-container-page"
      ),
   ]);
}
