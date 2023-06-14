import { Ui, handleUrl } from "../../1_controllers/js/tools.js";

export default function setting() {
   const { Label, Button, Line, Div } = Ui;
   const { changePageEvenClick } = handleUrl;

   return Div(
      [
         Div(
            [
               Label("Skills", ".tittle-option"),
               Button("Go to skills", ".btn-option", null, (e) =>
                  changePageEvenClick({ target: { href: "/view/skills" } })
               ),
            ],
            ".option"
         ),
         Div(
            [
               Label("Experiences", ".tittle-option"),
               Button("Go to experiences", ".btn-option", null, (e) =>
                  changePageEvenClick({
                     target: { href: "/view/experiences" },
                  })
               ),
            ],
            ".option"
         ),
         Div(
            [
               Label("Proyects", ".tittle-option"),
               Button("Go to proyects", ".btn-option", null, (e) =>
                  changePageEvenClick({ target: { href: "/view/proyects" } })
               ),
            ],
            ".option"
         ),
         Div(
            [
               Label("Educations", ".tittle-option"),
               Button("Go to educations", ".btn-option", null, (e) =>
                  changePageEvenClick({
                     target: { href: "/view/educations" },
                  })
               ),
            ],
            ".option"
         ),
         Div(
            [
               Label("References", ".tittle-option"),
               Button("Go to references", ".btn-option", null, (e) =>
                  changePageEvenClick({
                     target: { href: "/view/references" },
                  })
               ),
            ],
            ".option"
         ),
      ],
      ".setting-container"
   );
}
