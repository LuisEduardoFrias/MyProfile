import home_horizontal_page from "../2_views/pages/home_horizontal_page.js";
import home_vertical_page from "../2_views/pages/home_vertical_page.js";
import { all } from "../1_models/models.js";

export default class controller_home {
   static horizontal(gate) {
      home_horizontal_page(gate);
   }
   static vertical(gate) {
      return (async () => home_vertical_page(await gate.get(all)))();
   }
}
