import { Ui } from "../js/tools.js";

export default function profile() {
   return Ui.Div(
      [
         Ui.Div(
            [
               Ui.Div(
                  [
                     Ui.Img(
                        "imgProfile.jpg",
                        "my image profile",
                        ".profile-img",
                        "width: 150px; height: 200px;"
                     ),
                  ],
                  ".profile-container-img"
               ),
               Ui.Div(
                  [
                     Ui.Label("Luis Eduardo Frias", ".l1"),
                     Ui.Label("Ing De Software", ".l2"),
                  ],
                  ".profile-container-title"
               ),
            ],
            ".profile"
         ),
         Ui.Div(
            [
               Ui.Div([
                  Ui.Icon("email"),
                  Ui.Label("luiseduardofrias27@gmail.com"),
               ]),

               Ui.Div([
                  Ui.Icon("phone_iphone"),
                  Ui.Label("Personal 849-228-0058"),
               ]),

               Ui.Div([
                  Ui.Icon("phone_iphone"),
                  Ui.Label("Esposa 849-356-5151"),
               ]),

               Ui.Div([
                  Ui.Icon("home"),
                  Ui.Label(
                     "El Almirante, Santo Domingo Este, Republica Dominicana"
                  ),
               ]),

               Ui.Div([
                  Ui.Icon("link"),
                  Ui.Link(
                     "linkedin.com/in/luis-eduardo-frias-64204b1a3",
                     "linkedin,luis eduardo frias",
                     null,
                     "text-decoration-line: underline;"
                  ),
               ]),
            ],
            ".profile-container-data"
         ),
      ],
      ".profile-container"
   );
}
