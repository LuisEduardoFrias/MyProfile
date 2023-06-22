import error_page from "../2_views/pages/error_page.js";
import setting_page from "../2_views/pages/setting_page.js";

export default class controller_setting {
   static setting() {
      return setting_page();
   }
   static error() {
      return error_page();
   }
}
