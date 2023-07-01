import { AddCI, IsNode, Error, Warn, aserts } from "./tools.js";

export default class Ui {
   //////
   //////     ICON
   //////

   static Icon(name, classid) {
      const span = document.createElement("span");
      span.innerHTML = name;

      if (classid !== undefined) {
         const classids = ".material-icons " + classid.replace(".", "");

         AddCI(span, classids);
      } else {
         AddCI(span, ".material-icons");
      }

      return span;
   }

   //////
   //////     SECTION
   //////

   static Select(obj) {
      const select = document.createElement("select");
      select.innerHTML = name;

      const appendchild = (value) => {
         let isnode = true;
         if (Array.isArray(value)) {
            value.forEach((e) => {
               const option = document.createElement("option");
               const key = Reflect.ownKeys(e)[0];
               Warn(key);
               option.setAttribute("value", key);
               option.innerHTML = Reflect.get(e, key);
               select.appendChild(option);
            });
         } else {
            const option = document.createElement("option");
            const key = Reflect.ownKeys(value)[0];
            option.setAttribute("value", key);
            option.innerHTML = Reflect.get(e, key);
            select.appendChild(option);
         }
         if (!isnode) Error(`Error: El elemento no es un Nodo. Ui.Select.`);
      };

      if (obj.toString() === "[object Promise]") {
         obj[0].then((value) => appendchild(value));
      } else {
         appendchild(obj);
      }
      return select;
   }

   //////
   //////     SECTION
   //////

   static Section(obj, classid, style) {
      const section = document.createElement("section");
      AddCI(section, classid);

      const appendchild = (value) => {
         let isnode = true;
         if (Array.isArray(value)) {
            value.forEach((e) => {
               if (IsNode(e)) section.appendChild(e);
               else isnode = false;
            });
         } else {
            if (IsNode(value)) section.appendChild(value);
            else isnode = false;
         }
         if (!isnode) Error(`Error: El elemento no es un Nodo. Ui.Section.`);
      };

      if (obj.toString() === "[object Promise]") {
         obj[0].then((value) => appendchild(value));
      } else {
         appendchild(obj);
      }

      if (style !== undefined && style !== null) {
         section.style.cssText = style;
      }

      return section;
   }

   //////
   //////     FORM
   //////

   static Form(array, classId) {
      const form = document.createElement("form");
      form.setAttribute("onsubmit", "return false");
      form.className = classId;

      array.forEach((e) => {
         form.appendChild(e);
      });

      return form;
   }

   //////
   //////     INPUT
   //////

   static Input(tittle, placeholder, required, type, error, name, identiti) {
      identiti = identiti !== undefined ? `-${identiti}` : "";

      const labelT =
         tittle !== "" && tittle !== null && tittle !== undefined
            ? Ui.Label(tittle, `.tittle${identiti}`)
            : undefined;

      const input = document.createElement("input");
      input.setAttribute("placeholder", placeholder);
      input.setAttribute("class", `text-box${identiti} text-box-input_`);
      input.setAttribute("type", type);
      input.setAttribute("name", name);
      input.setAttribute("id", name);

      if (required) {
         // . /^\s*$/  \s$
         // input.setAttribute("pattern", "");
      }

      if (type === "t") {
         input.setAttribute("pattern", "[sa-zA-Z]+");
      } else if (type === "n") {
         input.setAttribute("pattern", "[s0-9]+");
      }

      const errorlabel =
         error !== null && error !== "" && error !== undefined
            ? Ui.Label(error, `.error${identiti} error-input_`)
            : null;
            
      return Ui.Div(
         [labelT, input, errorlabel],
         `.container-input${identiti} container-input_`
      );
   }

   //////
   //////     VIEW DATA
   //////

   static ViewData(dataArray, callballadd, callballdelete) {
      //
      //boton para agregar nuevos datos.
      const btnAdd = () => {
         if (callballadd !== null && callballadd !== undefined) {
            if (typeof callballadd === "function") {
               return Ui.Button("agregar", ".add-btn", null, () => {
                  callballadd();
               });
            }
         }
      };

      //contenedor de todó el ViewData.
      const contenviewdata = Ui.Div([btnAdd()], ".conten-view-data");

      //contenedor de viewdata
      const viewdata = Ui.Div([], ".view-data");

      //header
      const header = Ui.Div([], ".view-data-header");

      let count = 1;
      const propertyNames = Reflect.ownKeys(dataArray[0]);
      const clac = 80 / propertyNames.length;

      //columna de copiar
      header.appendChild(Ui.Div([], `.view-data-column view-data-column-0`));

      //agregando columna por cada dato
      propertyNames.forEach((e) => {
         header.appendChild(
            Ui.Div(
               [
                  Ui.Label(
                     e,
                     `.view-data-column-text view-data-column-text-${count}`
                  ),
               ],
               `.view-data-column view-data-column-${count}`,
               `width:${clac}%;`
            )
         );
         count++;
      });

      //columna de eliminar
      header.appendChild(
         Ui.Div(
            [
               Ui.Label(
                  "Eliminar",
                  `.view-data-column-text view-data-column-text-${count}`
               ),
            ],
            `.view-data-column view-data-column-eliminar`
            //  `width:${clac}%;`
         )
      );

      viewdata.appendChild(header);

      //row
      let i = 0;
      dataArray.forEach((obj) => {
         //contenedor(fila) de celdas
         const row = Ui.Div([], ".view-data-row");

         // boton para copiar
         row.appendChild(
        Ui.Div(
          [
            Ui.Button("", ".copy-btn", null, (event) => {
              let selected = "";
              const element = event.target.parentElement;

              element.parentElement.childNodes.forEach((e) => {
                if (e.className.search("cell-data") !== -1) {
                  selected += `${e.firstElementChild.innerText} `;
                }
              });

              var aux = document.createElement("input");
              aux.setAttribute("value", selected);
              document.body.appendChild(aux);
              aux.select();

              document.execCommand("copy");

              document.body.removeChild(aux);

              alert("copiado.", "My Profile");
            }),
          ],
          ".view-data-container-copy-btn"
        )
      );

         //celda por cada dato
         propertyNames.forEach((e) => {
            row.appendChild(
               Ui.Div(
                  [
                     Ui.Label(
                        Reflect.get(obj, e),
                        `.text-cell text-cell-${i} ${e}`
                     ),
                  ],

                  /*la class cell-data  no se puede modificar o elimiar, ya que
                  es usada el boton eliminar.*/
                  /*la class asignada mediante la variable 'e' no se puede
                  remover ni y se debe mantener en la posicion 3 por que usada
                  en el boton eliminar */
                  `.view-data-cell cell-data ${e}`,
                  `width:${clac}%;
                  `
               )
            );
         });

         //button eliminar
         row.appendChild(
            Ui.Div(
               [
                  Ui.Button("Eliminar", ".btn-delete", null, (event) => {
                     const obj = {};
                     const element = event.target.parentElement;

                     element.parentElement.childNodes.forEach((e) => {
                        if (e.className.search("cell-data") !== -1) {
                           Reflect.set(
                              obj,
                              e.firstElementChild.classList[2],
                              e.firstElementChild.innerText
                           );
                        }
                     });

                     callballdelete(obj);
                  }),
               ],
               ".delete-btn"
               //  `width:${clac}%;`
            )
         );

         viewdata.appendChild(row);

         i++;
      });

      //
      contenviewdata.appendChild(viewdata);

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

      if (!src.search("http")) {
         img.src = src;
      } else {
         img.src = aserts + src;
      }

      img.alt = alt;
      AddCI(img, classId);

      if (event_click === true) {
         img.addEventListener("click", (e) => ShowImg(aserts + src, alt));
      }

      if (style !== undefined && style !== null) {
         img.style.cssText = style;
      }
      return img;
   }

   static ShowImg(src, alt) {
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
            [
               btn,
               Ui.Img(src, alt, ".showImg-img", "--width: 95%; height: 70%;"),
            ],
            ".showImg-container",
            `top: ${-1 * document.body.getBoundingClientRect().y}px;`
         )
      );
   }

   //////
   //////     DIV
   //////

   static Div(obj, classId, style) {
      const div = document.createElement("div");

      AddCI(div, classId);

      const appendchild = (value) => {
         let isnode = true;
         if (Array.isArray(value)) {
            const i = 0;
            value.forEach((element) => {
               if (element !== null && element !== undefined) {
                  if (IsNode(element)) {
                     div.appendChild(element);
                  } else {
                     Error(
                        `Error: El elemento ${i} del Array no es un elemento html. Ui.Div`
                     );
                  }
               }
            });
         } else {
            if (IsNode(value)) div.appendChild(value);
            else isnode = false;
         }

         if (!isnode)
            Error(
               "Error: El 1er angumento, no es un Array, se requiere un Array[ElementosHTMl].  Ui.Div"
            );
      };

      if (obj.toString() === "[object Promise]") {
         obj[0].then((value) => appendchild(value));
      } else {
         appendchild(obj);
      }

      if (style !== undefined && style !== null) {
         div.style.cssText = style;
      }

      return div;
   }

   //////
   //////     Chart
   //////

   static Chart(
      labels = ["a", "b", "c", "d"],
      series = [4, 2, 1, 3],
      backgroundColor = ["red", "blue", "green", "orange"]
   ) {
      const canvas = document.createElement("canvas");
      canvas.setAttribute("id", "chart");
      myChart = new Chart(canvas, {
         type: "doughnut",
         data: {
            labels: labels,
            datasets: [
               {
                  data: series,
                  backgroundColor: backgroundColor,
               },
            ],
         },
         options: {
            maintainAspectRatio: false,
         },
         plugins: [
            {
               afterLayout: function (chart) {
                  let total = chart.data.datasets[0].data.reduce((a, b) => {
                     return a + b;
                  });
                  chart.legend.legendItems.forEach((label) => {
                     let value = chart.data.datasets[0].data[label.index];

                     label.text +=
                        " - " + ((value / total) * 100).toFixed(0) + "%";
                     return label;
                  });
               },
            },
         ],
      });
   }

   //////
   //////     Group
   //////

   static Group(
      obj,
      Name,
      tittle = "",
      classId = null,
      classId2 = null,
      style = null
   ) {
      const fieldset = document.createElement("fieldset");
      const legend = document.createElement("legend");

      fieldset.setAttribute("Name", Name);
      AddCI(fieldset, classId);

      legend.innerText = tittle;
      AddCI(legend, classId2);

      fieldset.appendChild(legend);

      const appendchild = (value) => {
         let isnode = true;
         if (Array.isArray(value)) {
            const i = 0;
            value.forEach((element) => {
               if (element !== null && element !== undefined) {
                  if (IsNode(element)) {
                     fieldset.appendChild(element);
                  } else {
                     Error(
                        `Error: El elemento ${i} del Array no es un elemento html. Ui.Group`
                     );
                  }
               }
            });
         } else {
            if (IsNode(value)) fieldset.appendChild(value);
            else isnode = false;
         }

         if (!isnode)
            Error(
               "Error: El 1er angumento, no es un Array, se requiere un Array[ElementosHTMl].  Ui.Group"
            );
      };

      if (obj.toString() === "[object Promise]") {
         obj[0].then((value) => appendchild(value));
      } else {
         appendchild(obj);
      }

      if (style !== undefined && style !== null) {
         fieldset.style.cssText = style;
      }

      return fieldset;
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

   static Line(className) {
      const line = document.createElement("hr");
      line.setAttribute("class", className);
      return line;
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
