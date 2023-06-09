import { Ui } from "../js/tools.js";

export default function setting() {
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
         Div(
            [
               Label("add new experience", ".tittle-section"),
               Input("", "placeholder", "t", "error", "name"),
               Input("", "placeholder", "t", "error", "name"),
               Input("", "placeholder", "t", "error", "name"),
               Input("", "placeholder", "t", "error", "name"),
               Button("save", ".btn-section"),
            ],
            ".section"
         ),
         Div(
            [
               Label("add new proyect", ".tittle-section"),
               Input("", "placeholder", "t", "error", "name"),
               Input("", "placeholder", "t", "error", "name"),
               Input("", "placeholder", "t", "error", "name"),
               Input("", "placeholder", "t", "error", "name"),
               Button("save", ".btn-section"),
            ],
            ".section"
         ),
         Div(
            [
               Label("add new education", ".tittle-section"),
               Input("", "placeholder", "t", "error", "name"),
               Input("", "placeholder", "t", "error", "name"),
               Input("", "placeholder", "t", "error", "name"),
               Input("", "placeholder", "t", "error", "name"),
               Button("save", ".btn-section"),
            ],
            ".section"
         ),
         Div(
            [
               Label("add new refecence", ".tittle-section"),
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
