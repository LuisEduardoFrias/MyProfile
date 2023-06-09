import { Ui } from "../js/tools.js";

export default function skill_page() {
   const { Div, Label, Button, Input, Form } = Ui;
   return Form(
      [
         Div(
            [
               Label("add new skill", ".tittle-section"),
               Input("", "placeholder", "t", "error", "name"),
               Input("", "placeholder", "t", "error", "name"),
               Input("", "placeholder", "t", "error", "name"),
               Input("", "placeholder", "t", "error", "name"),
               Button("save", ".btn-section"),
            ],
            ".section"
         ),
      ],
      ".setting-container-form"
   );
}
