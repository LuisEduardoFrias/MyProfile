import { Ui, Select, handleUrl } from "../../../1_controllers/js/tools.js";
//import { getdata, all } from "../data/data_access.js";

export default function viewEducation() {
   const { Div, ViewData, Label, Button } = Ui;

   (async () => {
      const data = {}; //await getdata(all);
      const div = Select(".vieweducation");
      div.appendChild(
         ViewData(
            data.educations,
            () => {
               handleUrl.changePageEvenClick({
                  target: { href: "/add/education" },
               });
            },
            (key) => {}
         )
      );
   })();

   return Div(
      [
         Div([Label("Education")], ".view-container-data vieweducation"),
         Div(
            [
               Button(
                  "back",
                  null,
                  `
            background-color:black;
            border-radius:10px 10px;
            width:100px;
            height:35px;`,
                  (e) => handleUrl.back()
               ),
            ],
            ".view-container-btn"
         ),
      ],
      ".view-container"
   );
}
