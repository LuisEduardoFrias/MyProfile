import { Ui, handleUrl } from "../../../1_controllers/js/tools.js";

export default function addSkill() {
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
                  Label("add new skill", ".tittle-section"),
                  Input("", "placeholder", "t", "error", "name"),
                  Input("", "placeholder", "t", "error", "name"),
                  Input("", "placeholder", "t", "error", "name"),
                  Input("", "placeholder", "t", "error", "name"),
                  Button(
                     "save",
                     ".btn-section",
                     `
                  background-color:rgb(55,255,67);
                  border-radius:10px 10px;
                  width:100px;
                  height:35px;`
                  ),
               ],
               ".section"
            ),
         ],
         ".setting-container-form"
      ),
   ]);
}
