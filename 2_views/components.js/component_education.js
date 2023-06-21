import Ui from "../../3_controllers/helpers/ui.js";

export default function cp_education({tittle,institution,tittle_img,more_education}) {
   const { Div, Label, Img, Link } = Ui;


   const contaS = Div([], ".education-container-sub-tittle");

   more_education?.forEach((e) => {
      contaS.appendChild(
         Div(
            [
               Label(e.tittle, ".education-sub-tittle"),
               Div(
                  [
                     Label("Institucion : ", ".educstion-label-institution"),
                     e.url !== ""
                        ? Link(
                             e.url,
                             e.institution,
                             ".education-sub-institution-link"
                          )
                        : Label(e.institution, ".education-sub-institution"),
                  ],
                  ".education-contaiber-institution"
               ),
               e.tittle_img !== ""
                  ? Img(
                       e.tittle_img,
                       "Imagen del titutlo",
                       ".education-img-sub-tittle",
                       "",
                       true
                    )
                  : null,
            ],
            ".education-container-sub-education"
         )
      );
   });

   return Div(
      [Div(
      [
         Label(tittle, ".education-tittle"),
         Label(institution, ".education-institution"),
         Img(
            tittle_img,
            "Imagen de titulo.",
            ".education-img-tittle",
            "",
            true
         ),
      ],
      ".education-container-last-tittle"
   ), contaS],
      ".education-container_education"
   );
}
