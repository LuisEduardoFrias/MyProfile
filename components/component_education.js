import { Colors, Ui } from "../js/tools.js";

export default function education(element, education) {
   const { P, T } = Colors;
   const { Div, Label, Img, Link } = Ui;

   const contaLT = Div(
      [
         Label(education.tittle, ".education-tittle"),
         Label(education.institution, ".education-institution"),
         Img(
            education.tittle_img,
            "Imagen de titulo.",
            ".education-img-tittle",
            "",
            true
         ),
      ],
      ".education-container-last-tittle"
   );

   const contaS = Div([], ".education-container-sub-tittle");

   education.more_education.forEach((e) => {
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

   element.appendChild(
      Div(
         [contaLT, contaS],
         ".education-container_education",
         `
         border-width: 2px;
         border-style: double;
         border-bottom-color: ${P};
         border-left-color: ${P};
         border-top-color: ${T};
         border-right-color: ${T};`
      )
   );
}
