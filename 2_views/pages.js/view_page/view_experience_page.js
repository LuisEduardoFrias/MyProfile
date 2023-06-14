import { Ui, Select, handleUrl } from "../../../1_controllers/js/tools.js";
import { getdata, all } from "../data/data_access.js";

export default function viewExperience() {
   const { Div, ViewData, Label, Button } = Ui;

   (async () => {
      const data = {};//await getdata(all);
      const div = Select(".viewexperience");
      div.appendChild(
         ViewData(data.experiences,             () => {
               handleUrl.changePageEvenClick({
                  target: { href: "/add/experience" },
               });
            },
            (key) => {}
         )
      );
   })();

   return Div(
      [
         Div([Label("Experience")], ".view-container-data viewexperience"),
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

