import { Select, RemoveChild, MediaQuery, l, IsNode } from "./tools.js";
import Ui from "./ui.js";
//
import component_profile from "../../2_views/components/component_profile.js";
import cp_menu from "../../2_views/components/component_menu.js";
//
import { gateway } from "../../4_data_access/dataAccess.js";
//

import controller_skill from "../controller_skill.js";
import controller_experience from "../controller_experience.js";
import controller_proyect from "../controller_proyect.js";
import controller_education from "../controller_education.js";
import controller_reference from "../controller_reference.js";
import controller_home from "../controller_home.js";
import controller_setting from "../controller_setting.js";

export default class handleUrl {
   static back() {
      history.back();
   }

   static clearAdd(page) {
      const section = Select(".container-home");
      RemoveChild(section);

      const appendchild = (value) => {
         let isnode = true;
         //
         if (Array.isArray(value)) {
            value.forEach((e) => {
               if (IsNode(e)) section.appendChild(e);
               else isnode = false;
            });
         } else {
            if (IsNode(value)) section.appendChild(value);
            else isnode = false;
         }
         //
         if (!isnode) Error(`Error: El elemento no es un Nodo. Ui.Section.`);
      };

      if (page.toString() === "[object Promise]") {
         page.then((value) => appendchild(value));
      } else {
         appendchild(page);
      }
   }

   static changePage(event) {
      event = event || window.event;

      history.pushState(
         { page: event.target.href },
         "My Profile",
         event.target.href
      );

      switch (event.target.href) {
         case "/index.html": {
            MediaQuery(
               "max-width: 900px",
               () => this.clearAdd(controller_home.vertical(gateway)),
               () => {
                  const section = Select(".container-home");
                  RemoveChild(section);

                  section.appendChild(cp_menu());
                  section.appendChild(Ui.Div([], ".container-horizontal"));

                  controller_home.horizontal(gateway);
               }
            );
            break;
         }
         case "/settings": {
            handleUrl.clearAdd(controller_setting.setting());
            break;
         }
         case "/view/skills": {
            handleUrl.clearAdd(controller_skill.view(gateway));

            break;
         }
         case "/view/experiences": {
            handleUrl.clearAdd(controller_experience.view(gateway));
            break;
         }
         case "/view/proyects": {
            handleUrl.clearAdd(controller_proyect.view(gateway));
            break;
         }
         case "/view/educations": {
            handleUrl.clearAdd(controller_education.view(gateway));
            break;
         }
         case "/view/references": {
            handleUrl.clearAdd(controller_reference.view(gateway));
            break;
         }
         case "/add/skill": {
            handleUrl.clearAdd(controller_skill.add(gateway));
            break;
         }
         case "/add/experience": {
            handleUrl.clearAdd(controller_experience.add(gateway));
            break;
         }
         case "/add/proyect": {
            handleUrl.clearAdd(controller_proyect.add(gateway));
            break;
         }
         case "/add/education": {
            handleUrl.clearAdd(controller_education.add(gateway));
            break;
         }
         case "/add/reference": {
            handleUrl.clearAdd(controller_reference.add(gateway));
            break;
         }
         default: {
            handleUrl.clearAdd(controller_setting.error());
            break;
         }
      }
   }

   async handleLocation() {
      handleUrl.changePage({
         target: { href: window.location.pathname },
      });
   }

   static listenerUrl() {
      window.onpopstate = this.handleLocation;
      window.route = this.changePage;

      window.addEventListener("popstate", (event) => {
         handleUrl.changePage({
            target: { href: window.history.state.page },
         });
      });

      const main = Select(".container-main");
      main.appendChild(component_profile());
      main.appendChild(Ui.Section([], ".container-home"));

      handleUrl.changePage({
         target: { href: window.location.pathname },
      });
   }
}