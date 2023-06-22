import Ui from "../../../3_controllers/helpers/ui.js";
import handleUrl from "../../../3_controllers/helpers/handleUrl.js";
import { Select, RemoveChild } from "../../../3_controllers/helpers/tools.js";
import controller_education from "../../../3_controllers/controller_education.js";

export default function add_education_page(gate) {
   //
   const { Div, Label, Button, Input, Form, Group } = Ui;
   let countMoreE = 1;
   //
   return Form([
      Div(
         [
            Div(
               [
                  Button("back", ".back-btn", null, (e) => {
                     handleUrl.back();
                  }),
                  Label("Add New Education", ".add-page-tittle-page"),
               ],
               ".add-page-container-back-btn-tittle"
            ),

            Div(
               [
                  Div(
                     [
                        /*  Input(
                           null,
                           "Tittle",
                           false,
                           null,
                           null,
                           "Tittle",
                           "fild"
                        ),
                        Input(
                           null,
                           "Institution",
                           false,
                           null,
                           null,
                           "Institution",
                           "fild"
                        ),
                        Input(
                           null,
                           "Image Name",
                           false,
                           null,
                           null,
                           "TittleImg",
                           "fild"
                        ),*/

                        Div(
                           [
                              Div(
                                 [
                                    Label(
                                       "More Education",
                                       ".add-page-tittle-task"
                                    ),
                                    Ui.Button(
                                       Ui.Icon("add_circle", "icon-switch"),
                                       ".btn-add-fild",
                                       null,
                                       (e) => {
                                          const divfather =
                                             Select(".more-education");

                                          divfather.appendChild(
                                             Group(
                                                [
                                                   Input(
                                                      null,
                                                      "Tittle",
                                                      false,
                                                      null,
                                                      null,
                                                      `Tittle-${countMoreE}`,
                                                      `fild focus-${countMoreE}`
                                                   ),
                                                   Input(
                                                      null,
                                                      "Institution",
                                                      false,
                                                      null,
                                                      null,
                                                      `Institution-${countMoreE}`,
                                                      "fild"
                                                   ),
                                                   Input(
                                                      null,
                                                      "Url istitution",
                                                      false,
                                                      null,
                                                      null,
                                                      `UrlIstitution-${countMoreE}`,
                                                      "fild"
                                                   ),
                                                   Input(
                                                      null,
                                                      "Img",
                                                      false,
                                                      null,
                                                      null,
                                                      `TittleImg-${countMoreE}`,
                                                      "fild"
                                                   ),
                                                ],
                                                "MoreEducation",
                                                null,
                                                ".add-page-more-education"
                                             )
                                          );

                                          Select(
                                             `.focus-${countMoreE}`
                                          ).focus();
                                          countMoreE++;
                                       }
                                    ),
                                 ],
                                 ".add-btn-header"
                              ),
                              Div(
                                 [
                                    Group(
                                       [
                                          Input(
                                             null,
                                             "Tittle",
                                             false,
                                             null,
                                             null,
                                             `Tittle-0`,
                                             "fild"
                                          ),
                                          Input(
                                             null,
                                             "Institution",
                                             false,
                                             null,
                                             null,
                                             `Institution-0`,
                                             "fild"
                                          ),
                                          Input(
                                             null,
                                             "Url istitution",
                                             false,
                                             null,
                                             null,
                                             `UrlIstitution-0`,
                                             "fild"
                                          ),
                                          Input(
                                             null,
                                             "Img Name",
                                             false,
                                             null,
                                             null,
                                             `TittleImg-0`,
                                             "fild"
                                          ),
                                       ],
                                       "MoreEducation",
                                       null,
                                       ".add-page-more-education"
                                    ),
                                 ],
                                 ".more-education"
                              ),
                           ],
                           ".more-education-group"
                        ),
                     ],
                     ".add-page-filds"
                  ),

                  Button("Save", ".save-btn", null, (e) => {
                     controller_education.post(gate, document.forms[0]);

                     const divfather = Select(".more-education");
                     RemoveChild(divfather);

                     divfather.appendChild(
                        Group(
                           [
                              Input(
                                 null,
                                 "Tittle",
                                 false,
                                 null,
                                 null,
                                 `Tittle-0`,
                                 "fild"
                              ),
                              Input(
                                 null,
                                 "Institution",
                                 false,
                                 null,
                                 null,
                                 `Institution-0`,
                                 "fild"
                              ),
                              Input(
                                 null,
                                 "Url istitution",
                                 false,
                                 null,
                                 null,
                                 `UrlIstitution-0`,
                                 "fild"
                              ),
                              Input(
                                 null,
                                 "Img",
                                 false,
                                 null,
                                 null,
                                 `TittleImg-0`,
                                 "fild"
                              ),
                           ],
                           "MoreEducation",
                           null,
                           ".add-page-more-education"
                        )
                     );
                  }),
               ],
               ".add-page-form form-education"
            ),
         ],
         ".add-page-container-page"
      ),
   ]);
}
