import Ui from "../../3_controllers/helpers/ui.js";
import handleUrl from "../../3_controllers/helpers/handleUrl.js";

export default function setting_page() {
   const { Label, Button, Line, Div } = Ui;
   const { changePage, back } = handleUrl;

   return Div(
      [
         Div(
            [
               Label("Skills", ".tittle-option"),
               Button("Go to skills", ".btn-option", null, (e) =>
                  changePage({
                     target: { href: "/view/skills" },
                  })
               ),
            ],
            ".option"
         ),
         Div(
            [
               Label("Experiences", ".tittle-option"),
               Button("Go to experiences", ".btn-option", null, (e) =>
                  changePage({
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
                  changePage({
                     target: { href: "/view/proyects" },
                  })
               ),
            ],
            ".option"
         ),
         Div(
            [
               Label("Educations", ".tittle-option"),
               Button("Go to educations", ".btn-option", null, (e) =>
                  changePage({
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
                  changePage({
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
