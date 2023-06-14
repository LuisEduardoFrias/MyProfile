
import { Ui, Select, handleUrl } from "../../../1_controllers/js/tools.js";
//import { getdata, all } from "../data/data_access.js";

export default function viewReference() {
   const { Div, ViewData, Label, Button } = Ui;

   (async () => {
      const data = {};//await getdata(all);
      const div = Select(".viewreference");
      div.appendChild(ViewData(data.references,  
                  () => {
               handleUrl.changePageEvenClick({
                  target: { href: "/add/reference" },
               });
            },
            (key) => {}))
   })();

   return Div(
      [
         Div(
            [Label("Reference")],
            ".view-container-data viewreference"
         ),
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
