export class handleUrl {
   static clearAdd(page) {
      const main = Select(".container-main");
      RemoveChild(main);
      main.appendChild(cp_profile());
      main.appendChild(Ui.Section([page], ".container"));
   }

   static listenerUrl() {
      window.onpopstate = this.handleLocation;
      window.route = this.changePageEvenClick;

      window.addEventListener("popstate", (event) => {
         handleUrl.changePageEvenClick({
            target: { href: window.history.state.page },
         });
      });

      this.changePageEvenClick({
         target: { href: window.location.pathname },
      });
   }

   async handleLocation() {
      console.log("async method :" + event);
      this.changePageEvenClick({
         target: { href: window.location.pathname },
      });
   }

   static back() {
      history.back();
   }

   static changePageEvenClick(event) {
      event = event || window.event;

      history.pushState(
         { page: event.target.href },
         "My Profile",
         event.target.href
      );

      console.log(event.target.href);

      switch (event.target.href) {
         case "/index.html": {
            MediaQuery(
               "max-width: 900px",
               cp_home_vertical,
               cp_home_horizontal
            );
            break;
         }
         case "/settings": {
            handleUrl.clearAdd(settingPage());
            break;
         }
         case "/view/skills": {
            handleUrl.clearAdd(viewSkillPage());

            break;
         }
         case "/view/experiences": {
            handleUrl.clearAdd(viewExperiencePage());
            break;
         }
         case "/view/proyects": {
            handleUrl.clearAdd(viewProyectPage());
            break;
         }
         case "/view/educations": {
            handleUrl.clearAdd(viewEducationPage());
            break;
         }
         case "/view/references": {
            handleUrl.clearAdd(viewReferencePage());
            break;
         }
         case "/add/skill": {
            handleUrl.clearAdd(addSkillPage());
            break;
         }
         case "/add/experience": {
            handleUrl.clearAdd(addExperiencePage());
            break;
         }
         case "/add/proyect": {
            handleUrl.clearAdd(addProyectPage());
            break;
         }
         case "/add/education": {
            handleUrl.clearAdd(addEducationPage());
            break;
         }
         case "/add/reference": {
            handleUrl.clearAdd(addReferencePage());
            break;
         }
         default: {
            handleUrl.clearAdd(errorpage());
            break;
         }
      }
   }
}