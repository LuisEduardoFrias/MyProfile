export class Ui {
   //////
   //////     ICON
   //////

   static Icon(name, classid) {
      const span = document.createElement("span");
      span.innerHTML = name;

      if (classid !== undefined) {
         const classids =
            ".material-icons " + classid.substring(1, classid.length);

         AddCI(span, classids);
      } else {
         AddCI(span, ".material-icons");
      }

      return span;
   }

   //////
   //////     SECTION
   //////

   static Section(array, classid, style) {
      const section = document.createElement("section");
      AddCI(section, classid);

      if (Array.isArray(array)) {
         array.forEach((e) => section.appendChild(e));
      }

      if (style !== undefined && style !== null) {
         section.style.cssText = style;
      }

      return section;
   }

   //////
   //////     FORM
   //////

   static Form(array, classId, style) {
      const form = document.createElement("form");
      form.style.cssText = style;
      form.className = classId;
      array.forEach((e) => form.appendChild(e));

      return form;
   }

   //////
   //////     INPUT
   //////

   static Input(tittle, placeholder, type, error, name, identiti) {
      identiti = identiti !== undefined ? `-${identiti}` : "";

      const labelT =
         tittle !== "" && tittle !== null && tittle !== undefined
            ? Ui.Label(tittle, `.tittle${identiti}`)
            : undefined;

      const input = document.createElement("input");
      input.setAttribute("placeholder", placeholder);
      input.setAttribute("class", `text-box${identiti} text-box-input_`);
      input.setAttribute("type", "text");
      input.setAttribute("name", name);
      input.setAttribute("id", name);

      if (type === "t") {
         input.setAttribute("pattern", "[sa-zA-Z]+");
      } else if (type === "n") {
         input.setAttribute("pattern", "[s0-9]+");
      }

      return Ui.Div(
         [labelT, input, Ui.Label(error, `.error${identiti} error-input_`)],
         `.container-input${identiti} container-input_`
      );
   }

   //////
   //////     VIEW DATA
   //////

   static ViewData(dataArray, callballadd, callballdelete) {
      const contenviewdata = Ui.Div(
         [
            Ui.Button(
               "agregar",
               ".btn-add",
               `
               background-color:${Colors.T};
               border-radius:3px 3px;
               header:25px;
               width:70px;
               tab-size:15px;
              `,
               callballadd
            ),
         ],
         ".conten-view-data"
      );

      const viewdata = Ui.Div([], ".view-data");

      //header
      const header = Ui.Div([], ".view-data-header");

      let count = 1;
      const propertyNames = Reflect.ownKeys(dataArray[0]);
      const clac = 95 / (propertyNames.length + 1);

      header.appendChild(
         Ui.Div(
            [],
            `.view-data-column view-data-column-0`,
            `overflow-x: scroll;
          white-space:nowrap;
          height:20px;
          padding-inline: 2px;
          width:5%;
          background-color:${Colors.T};
          border-radius: 10px 0 0 0;
          `
         )
      );

      propertyNames.forEach((e) => {
         header.appendChild(
            Ui.Div(
               [
                  Ui.Label(
                     e,
                     `.view-data-column-text
         view-data-column-text-${count}`
                  ),
               ],
               `.view-data-column view-data-column-${count}`,
               `overflow-x: scroll;
             white-space:nowrap;
             padding-inline: 2px;
             width:${clac}%;
             background-color:${Colors.T};`
            )
         );
         count++;
      });

      header.appendChild(
         Ui.Div(
            [
               Ui.Label(
                  "Eliminar",
                  `.view-data-column-text
         view-data-column-text-${count}`
               ),
            ],
            `.view-data-column view-data-column-${count}`,
            `overflow-x: scroll;
             white-space:nowrap;
             padding-inline: 2px;
             width:${clac}%;
             background-color:${Colors.T};`
         )
      );

      header.style.cssText = `
   display:flex;
   flex-direction:row;
   gap:1.5px;
   width:100%;
   justify-content:space-evenly;
   align-content:center;
   background-color: gray;
   overflow-x: auto;
   height:20px;
   box-sizing: border-box;`;

      viewdata.appendChild(header);

      //row
      let i = 0;
      dataArray.forEach((obj) => {
         const row = Ui.Div([], ".view-data-row");

         //TODO event click to button select
         const evenclick = (e) => {
            const classs = `.text-cell-${0}`;
            const labelToSelet = Select(classs);

            /* Para obtener el valor */
            const cod = labelToSelet.textContent;
            alert(cod);

            /* Para obtener el texto */
            labelToSelet.options[labelToSelet.selectedIndex];
            alert(selected);
         };

         row.appendChild(
            Ui.Button(
               "",
               ".view-data-cell",
               `overflow-x: scroll;
             white-space:nowrap;
             width:6%;
             background-color:black;
             padding-inline: 2px;
             margin-top:1.5px
             border-width: 0px;
             `,
               evenclick
            )
         );

         propertyNames.forEach((e) => {
            row.appendChild(
               Ui.Div(
                  [
                     Ui.Label(
                        Reflect.get(obj, e),
                        `.text-cell-${i}`,
                        `background-color: black;
                      display:block;`
                     ),
                  ],
                  ".view-data-cell",
                  `overflow-x: scroll;
                white-space:nowrap;
                width:${clac}%;
                background-color:black;
                padding-inline: 2px;
                margin-top:1.5px;
                `
               )
            );
         });

         //button eliminar
         row.appendChild(
            Ui.Div(
               [
                  Ui.Button(
                     "Eliminar",
                     ".btn-add",
                     `
                  background-color: ${Colors.C};
                  border-width: 0;
                  border-radius:3px 3px;
                  width:60px;
                  tab-size:10px;
                  `,
                     () =>
                        callballdelete("fb96d2da-400e-4de4-bf38-86d9dc0a80b4")
                  ),
               ],
               ".view-data-cell",
               `overflow-x: scroll;
             white-space:nowrap;
             width:${clac}%;
             background-color:black;
             padding-inline: 2px;
             margin-top:1.5px;
                `
            )
         );

         row.style.cssText = `
      display:flex;
      flex-direction:row;
      gap:1.5px;
      justify-content: space-evenly;
      align-content:center;
      overflow-x: auto;
      box-sizing: border-box;
      border:1px solid black;
      `;

         viewdata.appendChild(row);

         i++;
      });

      viewdata.style.cssText = `
   background-color:gray;
   width:100%;
   header:100%;
   displsy:flex;
   flex-direction:column;
   overflow-x: auto;
   box-sizing: border-box;
   padding:2px;
   border-radius:10px 10px`;

      contenviewdata.appendChild(viewdata);

      contenviewdata.style.cssText = `
      display:flex;
      flex-direction:column;
      justify-content: flex-end;
      gap:10px;
      width:100%;
      header:100%;
      padding: 2px 2px;`;

      return contenviewdata;
   }

   //////
   //////     LABEL
   //////

   static Label(text, classId, style) {
      const label = document.createElement("label");

      label.innerText = text;
      AddCI(label, classId);

      if (style !== undefined && style !== null) {
         label.style.cssText = style;
      }

      return label;
   }

   //////
   //////     NAV
   //////

   static Nav(array, classid, style) {
      const nav = document.createElement("nav");
      AddCI(nav, classid);

      if (Array.isArray(array)) {
         array.forEach((e) => nav.appendChild(e));
      }

      if (style !== undefined && style !== null) {
         section.style.cssText = style;
      }

      return nav;
   }

   //////
   //////     UL
   //////

   static Ul(array, style, li_style) {
      const ul = document.createElement("ul");

      if (Array.isArray(array)) {
         array.forEach((e) => {
            const li = document.createElement("li");

            if (li_style !== undefined && li_style !== null) {
               li.style.cssText = li_style;
            }

            li.appendChild(e);
            ul.appendChild(li);
         });
      }

      if (style !== undefined && style !== null) {
         ul.style.cssText = style;
      }

      return ul;
   }

   //////
   //////     IMG
   //////

   static Img(src, alt, classId, style, event_click) {
      const img = document.createElement("img");
      img.src = source + src;
      img.alt = alt;
      AddCI(img, classId);

      if (event_click === true) {
         img.addEventListener("click", (e) => ShowImg(source + src, alt));
      }

      if (style !== undefined && style !== null) {
         img.style.cssText = style;
      }
      return img;
   }


   ShowImg(src, alt){
   const btn = Ui.Button(
      Ui.Icon("cancel", ".showImg-btn"),
      ".showImg-btn-close",
      null,
      (e) => {
         document.body.style.overflow = "auto";
         RemoveChild(main, ".showImg-container");
      }
   );

   const main = Select(".container-main");

   document.body.style.overflow = "hidden";

   main.appendChild(
      Ui.Div(
         [btn, Ui.Img(src, alt, ".showImg-img", "--width: 95%; height: 70%;")],
         ".showImg-container",
         `top: ${-1 * document.body.getBoundingClientRect().y}px;`
      )
   );
};
   //////
   //////     DIV
   //////

   static Div(array, classId, style) {
      const div = document.createElement("div");

      AddCI(div, classId);

      if (Array.isArray(array)) {
         const i = 0;

         array.forEach((element) => {
            if (element !== null) {
               if (IsNode(element)) {
                  div.appendChild(element);
               } else {
                  console.log(
                     `El elemento ${i} del Array no es un elemento html`
                  );
               }
            }
         });
      } else {
         console.log("El angumento, no es un Array de elementos html");
      }

      if (style !== undefined && style !== null) {
         div.style.cssText = style;
      }

      return div;
   }

   //////
   //////     BUTTON
   //////

   static Button(text, classId, style, callball) {
      const button = document.createElement("button");

      if (text !== undefined && text !== "" && text !== null) {
         if (IsNode(text)) {
            if (Array.isArray(text)) {
               text.forEach((e) => {
                  button.appendChild(e);
               });
            } else {
               button.appendChild(text);
            }
         } else {
            button.innerText = text;
         }
      }

      AddCI(button, classId);

      if (style !== null && style !== undefined) {
         button.style.cssText = style;
      }

      if (callball !== null && callball !== undefined) {
         button.addEventListener("click", callball);
      }

      return button;
   }

   //////
   //////     LINK
   //////

   static Link(href, text, classId, style, callback) {
      const node = document.createElement("a");

      if (text !== null && text !== undefined) {
         node.appendChild(document.createTextNode(text));
      }
      node.href = href;
      node.setAttribute("rel", "noopener noreferrer");
      node.setAttribute("target", "_blank");

      AddCI(node, classId);

      if (style !== undefined && style !== null) {
         node.style.cssText = style;
      }

      node.addEventListener("click", (event) => {
         callback(node, event);
      });

      return node;
   }

   //////
   //////     LINR
   //////

   static Line() {
      return document.createElement("hr");
   }

   //////
   //////     LINR
   //////

   static FloatButton(iconName, evenClick) {
      const span = document.createElement("span");
      span.innerText = iconName;
      span.className = "material-icons";

      const btn = Ui.Dic(
         [Ui.Dic([Ui.Dic([span], "center_push_btn")], "border_push_btn")],
         "push_btn"
      );

      if (evenClick !== "undefiner") {
         btn.addEventListener("click", evenClick);
      }

      return btn;
   }
}
