import Ui from "../../../3_controllers/helpers/ui.js";
import handleUrl from "../../../3_controllers/helpers/handleUrl.js";
import controller_reference from "../../../3_controllers/controller_reference.js";

export default function add_reference_page() {
   //
   const { Div, Label, Button, Input, Form } = Ui;
   //
   return Form([
      Div(
         [
            Div(
               [
                  Button("back", ".back-btn", null, (e) => {
                     handleUrl.back();
                  }),
                  Label("Add New Reference", ".add-page-tittle-page"),
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
                           "Phone Number",
                           true,
                           null,
                           "error",
                           "PhoneNumber",
                           "fild"
                        ),
                     ],
                     ".add-page-filds"
                  ),

                  Button("Save", ".save-btn", null, (e) =>
                     controller_reference.post(da, document.forms[0])
                  ),
               ],
               ".add-page-form form-reference"
            ),
         ],
         ".add-page-container-page"
      ),
   ]);
}
