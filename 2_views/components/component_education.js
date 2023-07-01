import Ui from "../../3_controllers/helpers/ui.js";

export default function cp_education({
   Tittle,
   Institution,
   TittleImg,
   MoreEducation,
}) {
   const { Div, Label, Img, Link } = Ui;

   const contaS = Div([], ".education-container-sub-tittle");

   MoreEducation.forEach((e) => {
      contaS.appendChild(
         Div(
            [
               Label(e.Tittle, ".education-sub-tittle"),
               Div(
                  [
                     Label("Institucion : ", ".educstion-label-institution"),
                     e.url !== ""
                        ? Link(
                             e.url,
                             e.Institution,
                             ".education-sub-institution-link"
                          )
                        : Label(e.Institution, ".education-sub-institution"),
                  ],
                  ".education-contaiber-institution"
               ),
               e.TittleImg !== ""
                  ? Img(
                       e.TittleImg,
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
      [
         Div(
            [
               Label(Tittle, ".education-tittle"),
               Label(Institution, ".education-institution"),
               Img(
                  TittleImg,
                  "Imagen de titulo.",
                  ".education-img-tittle",
                  "",
                  true
               ),
            ],
            ".education-container-last-tittle"
         ),
         contaS,
      ],
      ".education-container_education"
   );
}
