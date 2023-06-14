import { Ui, handleUrl } from "../../../1_controllers/js/tools.js";

export default function viewSkill(data) {
   const { Div, ViewData, Label, Button } = Ui;

   return Div(
      [
         Div(
            [
               Label("skill"),
               ViewData(
                  data,
                  () => {
                     handleUrl.changePageEvenClick({
                        target: { href: "/add/skill" },
                     });
                  },
                  (key) => {
                     // skill.key = key;
                     /*  gate.delete((e) => alert(e), skill);*/
                  }
               ),
            ],
            ".view-container-data viewskill"
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
