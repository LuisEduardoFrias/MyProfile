import { Ui, Select, handleUrl } from "../../../1_controllers/js/tools.js";
//import { getdata, all } from "../data/data_access.js";
//import { models } from "../models/models.js";
//import gate from "../data/daj.js";

export default function viewSkill() {
   const { Div, ViewData, Label, Button } = Ui;

   (async () => {
      // const data = await getdata(all);
      //const skill = models.Skill();
      let dataskills = {};
      /*gate.get((e) => {
         dataskills = e;
      }, skill);*/
      console.log("aja: " + JSON.stringify(dataskills));
      const div = Select(".viewskill");
      div.appendChild(
         ViewData(
            data.skills,
            () => {
               handleUrl.changePageEvenClick({
                  target: { href: "/add/skill" },
               });
            },
            (key) => {
               // skill.key = key;
               /*  gate.delete((e) => alert(e), skill);*/
            }
         )
      );
   })();

   return Div(
      [
         Div([Label("skill")], ".view-container-data viewskill"),
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
