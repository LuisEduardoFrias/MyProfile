import Ui from "../../../3_controllers/helpers/ui.js";
import handleUrl from "../../../3_controllers/helpers/handleUrl.js";
import { Select } from "../../../3_controllers/helpers/tools.js";
import controller_education from "../../../3_controllers/controller_education.js";

export default function add_education_page() {
   //
   const { Div, Label, Button, Input, Form, Line } = Ui;
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
                        Input(
                           null,
                           "Tittle",
                           false,
                           "text",
                           null,
                           "Tittle",
                           "fild"
                        ),
                        Input(
                           null,
                           "Institution",
                           false,

                           "text",
                           null,
                           "Institution",
                           "fild"
                        ),
                        Input(
                           null,
                           "Image Name",
                           false,
                           "text",
                           null,
                           "TittleImg",
                           "fild"
                        ),

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
                                                   Line("divide-more-e"),
                                                   Input(
                                                      null,
                                                      "Tittle",
                                                      false,
                                                      "text",
                                                      null,
                                                      `Tittle-${countMoreE}`,
                                                      "fild"
                                                   ),
                                                   Input(
                                                      null,
                                                      "Url",
                                                      false,
                                                      "text",
                                                      null,
                                                      `Institution-${countMoreE}`,
                                                      "fild"
                                                   ),
                                                   Input(
                                                      null,
                                                      "Img Name",
                                                      false,
                                                      "text",
                                                      null,
                                                      `UrlIstitution-${countMoreE}`,
                                                      "fild"
                                                   ),
                                                   Input(
                                                      null,
                                                      "Img Name",
                                                      false,
                                                      "text",
                                                      null,
                                                      null,
                                                      `TittleImg-${countMoreE}`,
                                                      "fild"
                                                   ),
                                                ],
                                                                                      "MoreEducation", ".add-page-more-education"
                                             )
                                          );
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
                                             "text",
                                             null,
                                             `Tittle-${countMoreE}`,
                                             "fild"
                                          ),
                                          Input(
                                             null,
                                             "Url",
                                             false,
                                             "text",
                                             null,
                                             `Institution-${countMoreE}`,
                                             "fild"
                                          ),
                                          Input(
                                             null,
                                             "Img Name",
                                             false,
                                             "text",
                                             null,
                                             `UrlIstitution-${countMoreE}`,
                                             "fild"
                                          ),
                                          Input(
                                             null,
                                             "Img Name",
                                             false,
                                             "text",
                                             null,
                                             null,
                                             `TittleImg-${countMoreE}`,
                                             "fild"
                                          ),
                                       ],
                                       "MoreEducation",
                                       ".add-page-more-education"
                                    ),
                                 ],
                                 ".more-education add-item-group"
                              ),
                           ],
                           ".more-education-group"
                        ),
                     ],
                     ".add-page-filds"
                  ),

                  Button("Save", ".save-btn", null, (e) =>
                     controller_education.post(da, document.forms[0])
                  ),
               ],
               ".add-page-form form-education"
            ),
         ],
         ".add-page-container-page"
      ),
   ]);
}
