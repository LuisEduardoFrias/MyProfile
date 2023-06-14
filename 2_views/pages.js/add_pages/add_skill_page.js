import { Ui,handleUrl } from "../../../1_controllers/js/tools.js";

export default function addSkill() {
   const { Div, Label, Button, Input, Form } = Ui;
   return Div([
      Button(
         "back",
         null,
         `
                  background-color:gray;
                  border-radius:10px 10px;
                  width:100px;
                  height:35px;`,
         (e) => handleUrl.back()
      ),
      Form (
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
