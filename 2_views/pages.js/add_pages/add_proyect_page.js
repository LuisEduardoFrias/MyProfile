import { Ui } from "../../../3_controllers/helpers/ui.js";
import { handleUrl } from "../../../3_controllers/helpers/handleUrl.js";
import { controller_proyect } from "../../../3_controllers/controller_";

export default function addProyect() {
   const { Div, Label, Button, Input, Form } = Ui;
   return Div([
      Div(
         [Button("back", ".back-button", null, (e) => handleUrl.back())],
         ".view-container-back-btn"
      ),
      Form(
         [
            Div(
               [
                  Label("add new proyect", ".tittle-section"),
                  Input("", "placeholder", "t", "error", "name"),
                  Input("", "placeholder", "t", "error", "name"),
                  Input("", "placeholder", "t", "error", "name"),
                  Input("", "placeholder", "t", "error", "name"),
                  Button("save", ".btn-section", null, (e) =>
                     controller_proyect.post()
                  ),
               ],
               ".section"
            ),
         ],
         ".setting-container-form"
      ),
   ]);
}
