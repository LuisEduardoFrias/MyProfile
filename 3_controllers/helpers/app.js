"use strict";

 const base_url = `${location.protocol}//${location.host}/`;
 const aserts = `${location.protocol}//${location.host}/aserts/`;

 function Error(e) {
  console.error(e);
}
 function Warn(e) {
  console.warn(e);
}
 function l(e) {
  console.log("%c Log:" + e, "background: #222; color: #bada55");
}

 function AddCI(element, classId) {
  if (classId !== undefined && classId !== null && classId !== "") {
    const _char = classId.charAt(0);

    _char == "."
      ? element.setAttribute("class", classId.substring(1, classId.length))
      : _char == "#"
      ? element.setAttribute("id", classId.substring(1, classId.length))
      : Warn(
          "warnning: El strig no especifica si es un atributo de class (.) o Id (#). tools.AddCI"
        );
  }
}

 function Mapper(form, model) {
  const keys = Reflect.ownKeys(new model());
  const value = [];

  keys.forEach((key) => {
    for (const i in form.elements) {
      if (form.elements[i].name === key) {
        value.push(form.elements[i].value.replace("C:\\fakepath\\", ""));
        break;
      }
    }
  });

  return Reflect.construct(model, value);
}

 function clearForm(form) {
  for (const i in form.elements) {
    if (`${form.elements[i]}` === "[object HTMLInputElement]") {
      form.elements[i].value = "";
    }
  }
}

 function RemoveChild(Node, child) {
  if (IsNode(Node)) {
    if (child !== undefined && child !== null) {
      Node.childNodes.forEach((e) => {
        const _char = child.charAt(0);
        let identity;
        _char == "."
          ? (identity = e.className)
          : _char == "#"
          ? (identity = e.getAttribite("id"))
          : Error(
              "Error: El strig no especifica si es un atributo de class (.) o Id (#). tools.AddCI"
            );

        if (e.className === identity) {
          Node.removeChild(e);
        }
      });
    } else {
      while (Node.firstChild) {
        Node.removeChild(Node.lastChild);
      }
    }
  } else {
    Error("Error: El argumento no es un Nodo, tools.RemoveChild.");
  }
}

 function IsNode(element) {
  return element instanceof Element || element instanceof HTMLDocument;
}

 function Select(element) {
  return element.charAt(0) == "."
    ? document.querySelector(element)
    : element.charAt(0) == "#"
    ? document.querySelector(element)
    : Error(
        "Error: El strig no especifica si es un atributo de class (.) o Id (#). tools.AddCI"
      );
}

 function MediaQuery(query, home_vertical, home_horizontal) {
  const MediaQuery = window.matchMedia(`(${query})`);

  function handleTabletChange(e) {
    if (e.matches) {
      home_vertical();
    } else {
      home_horizontal();
    }
  }

  MediaQuery.addListener(handleTabletChange);

  handleTabletChange(MediaQuery);
}

class Ui {
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

    return Ui.Div(
      [labelT, input, Ui.Label(error, `.error${identiti} error-input_`)],
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
            [Ui.Label(Reflect.get(obj, e), `.text-cell text-cell-${i} ${e}`)],

            //la class cell-data  no se puede modificar o elimiar, ya que  es usada el boton eliminar. la class asignada mediante la variable 'e' no se puede remover ni y se debe mantener en la  posicion 3 por que usada en el boton eliminar.

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
    img.src = aserts + src;
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
        [btn, Ui.Img(src, alt, ".showImg-img", "--width: 95%; height: 70%;")],
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

              label.text += " - " + ((value / total) * 100).toFixed(0) + "%";
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
  //////     LINE
  //////

  static Line(className) {
    const line = document.createElement("hr");
    line.setAttribute("class", className);
    return line;
  }

  //////
  //////     FLOAT BUTTON
  //////

  static FloatButton(iconName, evenClick) {
    const span = document.createElement("span");
    span.innerText = iconName;
    span.className = "material-icons";

    const btn = Ui.Dic(
      [Ui.Dic([Ui.Dic([span], ".center_push_btn")], ".border_push_btn")],
      ".push_btn"
    );

    if (evenClick !== "undefiner") {
      btn.addEventListener("click", evenClick);
    }

    return btn;
  }
}

//
function cp_profile() {
   return Ui.Div(
      [
         Ui.Div(
            [
               Ui.Button(
                  Ui.Icon("settings_suggest", "icon-switch"),
                  ".setting-btn",
                  null,
                  (e) => {
                     const span = Select(".icon-switch");
            
                     if (span.innerHTML === "settings_suggest") {
                        handleUrl.changePage({
                           target: {
                              href: "/settings",
                           },
                        });

                        span.innerHTML = "home";
                     } else {
                        handleUrl.changePage({
                           target: {
                              href: "/index.html",
                           },
                        });

                        span.innerHTML = "settings_suggest";
                     }
                  }
               ),
            ],
            ".profile-comtainer-setting-btn"
         ),
         Ui.Div(
            [
               Ui.Div(
                  [
                     Ui.Img(
                        "imgProfile.jpg",
                        "my image profile",
                        ".profile-img"
                     ),
                  ],
                  ".profile-container-img"
               ),
               Ui.Div(
                  [
                     Ui.Label("Luis Eduardo Frias", ".l1"),
                     Ui.Label("Ing De Software", ".l2"),
                  ],
                  ".profile-container-title"
               ),
            ],
            ".profile"
         ),
         Ui.Div(
            [
               Ui.Div([
                  Ui.Icon("email"),
                  Ui.Label("luiseduardofrias27@gmail.com"),
               ]),

               Ui.Div([
                  Ui.Icon("phone_iphone"),
                  Ui.Label("Personal 849-228-0058"),
               ]),

               Ui.Div([
                  Ui.Icon("phone_iphone"),
                  Ui.Label("Esposa 849-356-5151"),
               ]),

               Ui.Div([
                  Ui.Icon("home"),
                  Ui.Label(
                     "El Almirante, Santo Domingo Este, Republica Dominicana"
                  ),
               ]),

               Ui.Div([
                  Ui.Icon("link"),
                  Ui.Link(
                     "linkedin.com/in/luis-eduardo-frias-64204b1a3",
                     "linkedin,luis eduardo frias",
                     null,
                     "text-decoration-line: underline;"
                  ),
               ]),
            ],
            ".profile-container-data"
         ),
         Ui.Div([Ui.Line()], ".profile-container-line"),
      ],
      ".profile-container"
   );
}

function cp_menu() {
   const { Nav, Ul, Button } = Ui;
    return Nav([
        Ul([
            Button("Habilidaded",".memu-btn-skill"),
            Button("Experiencia laboral",".menu-btn-experience"),
            Button("Educacion",".menu-btn-education"),
            Button("Proyectos persolanes",".menu-btn-proyect"),
            Button("Referencia",".menu-btn-reference"),
        ])
    ],".menu-container");
}
//
 class skills {
  constructor(Name, ImageName) {
    this.Name = Name;
    this.ImageName = ImageName;
  }
}

 class experiences {
  constructor() {}
}

 class proyects {
  constructor() {}
}

 class educations {
  constructor() {}
}

 class references {
  constructor() {}
}

 class all {
  constructor() {}
}

class models {}

models.skills = skills;
models.experiences = experiences;
models.proyects = proyects;
models.educations = educations;
models.references = references;
models.all = all;
//
class gateway {
  static async get(obj) {
    switch (obj) {
      case models.skills:
        return dataArray.skills;
      case models.experiences:
        return dataArray.experiences;
      case models.proyects:
        return dataArray.proyects;
      case models.educations:
        return dataArray.educations;
      case models.references:
        return dataArray.references;
      case models.all:
        return dataArray;
      default:
        return undefined;
    }
  }

  static async post(obj) {
    const pro = Reflect.get(dataArray, obj.constructor.name);

    if (pro === undefined) {
      if (!Reflect.set(obj, "Key", 1)) return false;

      return Reflect.set(dataArray, obj.constructor.Name, obj);
    }

    if (!Reflect.set(obj, "Key", pro.length + 1)) return false;

    pro.push(obj);

    return Reflect.set(dataArray, obj.constructor.Name, pro);

    return true;
  }

  static async put(obj) {
    let newPro = [...Reflect.get(dataArray, obj.constructor.name)];

    const index = newPro.findIndex((e) => e.Key === obj.Key);

    newPro[index] = {
      ...newPro[index],
      ...obj,
    };

    return Reflect.set(dataArray, obj.constructor.Name, newPro);
  }

  static async delete(obj, Key) {
    const pro = Reflect.get(dataArray, obj.constructor.name);

    if (pro === undefined) return false;

    const index = pro.findIndex((e) => e.Key == Key);

    if (index > -1) {
      pro.splice(index, 1);
    } else {
      return false;
    }
    return Reflect.set(dataArray, obj.constructor.Name, pro);
  }
}

const dataArray = {
  skills: [
    { Key: "1", Name: "C#", ImageName: "cShart.png" },
    { Key: "2", Name: "React", ImageName: "react.png" },
    { Key: "3", Name: "Html 5", ImageName: "html5.png" },
    { Key: "4", Name: "Css 3", ImageName: "css3.png" },
    { Key: "5", Name: "Java Script", ImageName: "javaScript.png" },
    { Key: "6", Name: "Sql Server", ImageName: "sqlServer.png" },
    { Key: "7", Name: "Oracle", ImageName: "oracle.png" },
    { Key: "8", Name: "Type Script", ImageName: "typeScript.png" },
    { Key: "9", Name: "GitHub", ImageName: "github.svg" },
    { Key: "10", Name: "Node", ImageName: "node.png" },
    { Key: "11", Name: "BootStrap", ImageName: "bootStrap.png" },
  ],
  experiences: [
    {
      Key: "1",
      Company: "Rancom Vitrinas y Decoraciones SRL",
      Description:
        "Ramco vitrinas y decorasiones es una empresa de fabricacion de mobiliarios, en especifico para comercio.",
      Position: "Analista de costos",
      Tacks: [
        "Ayudante de ensamblado",
        "Encargado de ensamblado",
        "Encargado área modular",
        "Analista de costos",
      ],
    },

    {
      Key: "2",
      Company: "EC Mobiliario Creativo SRL",
      Description:
        "EC Mobiliario Creativo es una empresa de fabricacion de mobiliarios en general.",
      Position: "Ebanista",
      Tacks: ["Ensamblado", "Ebanista"],
    },

    {
      Key: "3",
      Company: "Tegnología y Sistema Computarizado SRL",
      Description:
        "Tecnosis es una compañia de servicios de sistemas infomáticos.",
      Position: "Desarrollador",
      Tacks: [
        "Migrarcion del sistema de facturacíon y ventas con contabilidad, cobol a c#.",

        "User las ternilias winforms, as.net core api 3.1, Sql server, Entity Framework core.",

        "Creacion de inferfaces para comunicar aplicacion en cobol con sistema de verifone carNet y visaNet.",
      ],
    },

    {
      Key: "4",
      Company: "Aloe Software",
      Description:
        "Aloe software es una empresa dedicada al desarrollo y gestión software, infraestructura tecnológica y servicios informáticos, asi como cualquier otra actividad del entorno de TI.",
      Position: "Desarrollador de software",
      Tacks: [
        "Migrar ´sistema de operaciones´ en delphy 5 a .net 5 y react.",

        "Desarrollar software de calidad, enfocado en las metodologias agiles.",

        "Trabajar con metodologia de trabajo Scrum.",
      ],
    },
  ],
  proyects: [
    {
      Key: "1",
      Tittle: "Tridente SC",
      Description: "Administrador de tienda de celulares.",
      Tegnologys: [
        "WinForms",
        "Sql Server",
        "Entity Framework",
        "SignalR",
        "Asp.net Core",
      ],
      Repositorys: [],
    },
    {
      Key: "2",
      Tittle: "ARS Afiliados",
      Description: "Sistema de afiliados",
      Tegnologys: [
        "Angular 11",
        "Asp.Net Core Api 3.1",
        "Ado.net",
        "Entity Framework",
        "Sql Server",
        "Identity",
        "Bootstrap",
        "Madia-Type vnd",
      ],
      Repositorys: [
        "https://github.com/LuisEduardoFrias/Back-End",
        "https://github.com/LuisEduardoFrias/front-end-ars-afiliados",
      ],
    },
    {
      Key: "3",
      Tittle: "PokeSite",
      Description: "Guía de pokemones",
      Tegnologys: ["Angular 11", "Asp.Net Core Api 3.1", "Bootstrap"],
      Repositorys: [],
    },
    {
      Key: "4",
      Tittle: "DSRG",
      Description: "Generador de reporte de la estructura tu base de datos.",
      Tegnologys: [
        "WindowsForms",
        "Telerik report",
        "SpreadsheetLight - Excel",
      ],
      Repositorys: ["https://github.com/LuisEduardoFrias/DSRG"],
    },
  ],
  educations: [
    {
      Key: "1",
      Tittle: "Técnico Superior en Desarrollo del Software",
      Institution: "Instituto Técnico Superior Comunitario (ITSC)",
      TittleImg: "diploma.jpg",
      MoreEducation: [
        {
          Tittle: "Desarrollando Aplicaciones en Angular 10 y ASP.NET Core 5",
          Institution: "udemy",
          UrlIstitution:
            "https://www.udemy.com/course/desarrollando-aplicaciones-en-angular-y-aspnet-core/",
          TittleImg: "",
        },
        {
          Tittle: "Entity Framework Core y SQL Server / MySQL",
          Institution: "udemy",
          UrlIstitution:
            "https://www.udemy.com/course-dashboard-redirect/?course_id=3072640",
          TittleImg: "",
        },
        {
          Tittle: "Creación de API web Restful con ASP.NET Core 3.1",
          Institution: "udemy",
          UrlIstitution:
            "https://www.udemy.com/course-dashboard-redirect/?course_id=2156664",
          TittleImg: "",
        },
        {
          Tittle: "Introducción a la concurrencia en C # - Async y Paralelismo",
          Institution: "udemy",
          UrlIstitution:
            "https://www.udemy.com/course-dashboard-redirect/?course_id=3401576",
          TittleImg: "",
        },
        {
          Tittle: "Introducción a la inyección SQL",
          Institution: "udemy",
          UrlIstitution:
            "https://www.udemy.com/course-dashboard-redirect/?course_id=2908130",
          TittleImg: "",
        },
        {
          Tittle: "Diseño y programación orientados a objetos en C #",
          Institution: "udemy",
          UrlIstitution:
            "https://www.udemy.com/course-dashboard-redirect/?course_id=2442390",
          TittleImg: "",
        },
        {
          Tittle: "Desarrollando Aplicaciones en Angular 10 y ASP.NET Core 5",
          Institution: "udemy",
          UrlIstitution:
            "https://www.udemy.com/course-dashboard-redirect/?course_id=3548864",
          TittleImg: "",
        },
        {
          Tittle: "React: De cero a experto (Hooks y MERN)",
          Institution: "udemy",
          UrlIstitution:
            "https://www.udemy.com/course-dashboard-redirect/?course_id=3096364",
          TittleImg: "",
        },
      ],
    },
  ],
  references: [
    {
      Key: "1",
      Name: "Ing. José Manuel Tejeda Contacto",
      PhoneNumber: "809-436-7126",
    },
    {
      Key: "2",
      Name: "Lic. Jairo Esteban Lora Mejía Contacto",
      PhoneNumber: "829-983-1386",
    },
    {
      Key: "3",
      Name: "Ing. Julio Angel Florentino Contacto",
      PhoneNumber: "829-854-7130",
    },
  ],
};

// controllers

  function add_skill_page(da) {
   //
   const { Div, Label, Button, Input, Form, Select } = Ui;
   //
   return Form([
      Div(
         [
            Div(
               [
                  Button("back", ".back-btn", null, (e) => {
                     handleUrl.back();
                  }),
                  Label("Add New Skill", ".add-page-tittle-page"),
               ],
               ".add-page-container-back-btn-tittle"
            ),

            Div(
               [
                  Div(
                     [
                        Input(
                           null,
                           "Name",
                           true,
                           null,
                           "error",
                           "Name",
                           "fild"
                        ),
                        Input(
                           null,
                           "Image name",
                           true,
                           "file",
                           "error",
                           "ImageName",
                           "fild"
                        ),
                        
                     ],
                     ".add-page-filds"
                  ),

                  Button("Save", ".save-btn hadd-page-save-btn", null, (e) => {
                     controller_skill.post(da, document.forms[0]);
                  }),
               ],
               ".add-page-form form-skill"
            ),
         ],
         ".add-page-container-page"
      ),
   ]);
}

  function view_skill_page(data, gate) {
   const { Div, ViewData, Label, Button } = Ui;

   return Div(
      [
         Div(
            [
               Label("Skills", ".view-tittle-page skill-page-tittle"),
               ViewData(
                  data,
                  () => {
                     handleUrl.changePage({
                        target: { href: "/add/skill" },
                     });
                  },
                  (obj) => controller_skill.delete(gate, obj.Key)
               ),
            ],
            ".view-container-data skill-container-viewskill"
         ),
         Div(
            [
               Button("back", ".back-btn", null, (e) => {
                  handleUrl.back();
               }),
            ],
            ".view-container-back-btn"
         ),
      ],
      ".view-container-page skill-container-page"
   );
}

  class controller_skill {
   static add(gate) {
      return add_skill_page(gate);
   }
   static view(gate) {
      return (async () => {
         return view_skill_page(await gate.get(skills), gate);
      })();
   }
   static post(gate, form) {
      (async () => {
         const res = await gate.post(Mapper(form, skills));
         if (res) {
            clearForm(form);
         }
         alert("data save");
      })();
   }

   static delete(gate, key) {
      (async () => {
         if (await gate.delete(new skills(), key)) {
            alert("data delete");
            handleUrl.changePage({
               target: { href: "/view/skills" },
            });
         } else alert("error");
      })();
   }
}

//

  function add_reference_page() {
   //
   const { Div, Label, Button, Input, Form } = Ui;
   //
   return Form([
      Div(
         [
            Div(
               [
                  Button("back", ".back-btn", null, (e) => {
                     handleUrl.back();
                  }),
                  Label("Add New Reference", ".add-page-tittle-page"),
               ],
               ".add-page-container-back-btn-tittle"
            ),

            Div(
               [
                  Div(
                     [
                        Input(
                           null,
                           "Name",
                           true,
                           null,
                           "error",
                           "Name",
                           "fild"
                        ),
                        Input(
                           null,
                           "Phone Number",
                           true,
                           null,
                           "error",
                           "PhoneNumber",
                           "fild"
                        ),
                     ],
                     ".add-page-filds"
                  ),

                  Button("Save", ".save-btn", null, (e) =>
                     controller_reference.post(da, document.forms[0])
                  ),
               ],
               ".add-page-form form-reference"
            ),
         ],
         ".add-page-container-page"
      ),
   ]);
}

  function view_reference_page(data, da) {
   const { Div, ViewData, Label, Button } = Ui;

   return Div(
      [
         Div(
            [
               Label("References", ".view-tittle-page reference-page-tittle"),
               ViewData(
                  data,
                  () => {
                     handleUrl.changePage({
                        target: { href: "/add/reference" },
                     });
                  },
                                   (obj) => controller_skill.delete(gate, obj.Key)
               ),
            ],
            ".view-container-data reference-container-viewreference"
         ),
         Div(
            [
               Button("back", ".back-btn", null, (e) => {
                  handleUrl.back();
               }),
            ],
            ".view-container-back-btn"
         ),
      ],
      ".view-container-page reference-container-page"
   );
}

  class controller_reference {
   static add(gate) {
      return add_reference_page(gate);
   }
   static view(gate) {
      return (async () => {
         return view_reference_page(await gate.get(references), gate);
      })();
   }
   static post(gate, form) {
      (async () => {
         const res = await gate.post(Mapper(form, references));
         if (res) {
            clearForm(form);
         }
         alert("data save");
      })();
   }
   static delete(gate, key) {
      (async () => {
         if (await gate.delete(new references(), key)) {
            alert("data delete");
            handleUrl.changePage({
               target: { href: "/view/references" },
            });
         } else alert("error");
      })();
   }
}

//

  function add_experience_page() {
   //
   const { Div, Label, Button, Input, Form } = Ui;
   let countTask = 1;
   //
   return Form([
      Div(
         [
            Div(
               [
                  Button("back", ".back-btn", null, (e) => {
                     handleUrl.back();
                  }),
                  Label("Add New Experience", ".add-page-tittle-page"),
               ],
               ".add-page-container-back-btn-tittle"
            ),

            Div(
               [
                  Div(
                     [
                        Input("", "Company", "text", "error", "Company", "fild"),
                        Input(
                           "",
                           "Description",
                           "text",
                           "error",
                           "Description",
                           "fild"
                        ),
                        Input("", "Position", "text", "error", "Position", "fild"),

                        Div(
                           [
                              Div(
                                 [
                                    Label("Task", ".add-page-tittle-task"),
                                    Ui.Button(
                                       Ui.Icon("add_circle", "icon-switch"),
                                       ".btn-add-fild",
                                       null,
                                       (e) => {
                                          const divfather = Select(".task");

                                          divfather.appendChild(
                                             Input(
                                                null,
                                                "New task",
                                                "text",
                                                "error",
                                                `Task-Name-${countTask}`,
                                                "fild"
                                             )
                                          );
                                          countTask++;
                                       }
                                    ),
                                 ],
                                 ".add-btn-header"
                              ),
                              Div(
                                 [
                                    Input(
                                       null,
                                       "New task",
                                       "t",
                                       "error",
                                       "Tern-Name-0",
                                       "fild"
                                    ),
                                 ],
                                 ".task add-item-group"
                              ),
                           ],
                           ".task-group"
                        ),
                     ],
                     ".add-page-filds"
                  ),

                  Button("Save", ".save-btn", null, (e) =>
                     controller_experience.post(da, document.forms[0])
                  ),
               ],
               ".add-page-form form-experience"
            ),
         ],
         ".add-page-container-page"
      ),
   ]);
}

  function view_experience_page(data, da) {
   const { Div, ViewData, Label, Button } = Ui;

   return Div(
      [
         Div(
            [
               Label("Experiences", ".view-tittle-page experience-page-tittle"),
               ViewData(
                  data,
                  () => {
                     handleUrl.changePage({
                        target: { href: "/add/experience" },
                     });
                  },
                                (obj) => controller_skill.delete(gate, obj.Key)
               ),
            ],
            ".view-container-data experience-container-viewexperience"
         ),
         Div(
            [
               Button("back", ".back-btn", null, (e) => {
                  handleUrl.back();
               }),
            ],
            ".view-container-back-btn"
         ),
      ],
      ".view-container-page experience-container-page"
   );
}

  class controller_experience {
   static add(gate) {
      return add_experience_page(gate);
   }
   static view(gate) {
      return (async () => {
         return view_experience_page(await gate.get(experiences), gate);
      })();
   }
   static post(gate, form) {
      (async () => {
         const res = await gate.post(Mapper(form, experiences));
         if (res) {
            clearForm(form);
         }
         alert("data save");
      })();
   }
   static delete(gate, key) {
      (async () => {
         if (await gate.delete(new experiences(), key)) {
            alert("data delete");
            handleUrl.changePage({
               target: { href: "/view/experiences" },
            });
         } else alert("error");
      })();
   }
}

//

  function add_proyect_page() {
   //
   const { Div, Label, Button, Input, Form } = Ui;
   let countRepo = 1;
   let countTern = 1;
   //
   return Form([Div(
      [
         Div(
            [
               Button("back", ".back-btn", null, (e) => {
                  handleUrl.back();
               }),
               Label("Add New Proyect", ".add-page-tittle-page"),
            ],
            ".add-page-container-back-btn-tittle"
         ),

         Div(
            [
               Div(
                  [
                     Input("", "Tittle", "text", "error", "Tittle", "fild"),
                     Input("", "Description", "text", "error", "Description", "fild"),

                     Div(
                        [
                           Div(
                              [
                                 Label("Ternologys", ".add-page-tittle-terno"),
                                 Ui.Button(
                                    Ui.Icon("add_circle", "icon-switch"),
                                    ".btn-add-fild",
                                    null,
                                    (e) => {
                                       const divfather = Select(".ternology");

                                       divfather.appendChild(
                                          Input(
                                             "",
                                             "New ternology",
                                             "text",
                                             "error",
                                             `Tern-Name-${countTern}`,
                                             "fild"
                                          )
                                       );
                                       countTern++;
                                    }
                                 ),
                              ],
                              ".add-btn-header"
                           ),
                           Div(
                              [
                                 Input(
                                    "",
                                    "New ternology",
                                    "t",
                                    "error",
                                    "Tern-Name-0",
                                    "fild"
                                 ),
                              ],
                              ".ternology add-item-group"
                           ),
                        ],
                        ".ternology-group"
                     ),
                     Div(
                        [
                           Div(
                              [
                                 Label("Repositorys", ".add-page-tittle-repo"),
                                 Ui.Button(
                                    Ui.Icon("add_circle", "icon-switch"),
                                    ".btn-add-fild",
                                    null,
                                    (e) => {
                                       const divfather = Select(".repository");

                                       divfather.appendChild(
                                          Input(
                                             "",
                                             "New repository",
                                             "text",
                                             "error",
                                             `Repo-Name-${countRepo}`,
                                             "fild"
                                          )
                                       );

                                       countRepo++;
                                    }
                                 ),
                              ],
                              ".add-btn-header"
                           ),
                           Div(
                              [
                                 Input(
                                    "",
                                    "New repository",
                                    "t",
                                    "error",
                                    "Repo-Name-0",
                                    "fild"
                                 ),
                              ],
                              ".repository add-item-group"
                           ),
                        ],
                        ".reository-group"
                     ),
                  ],
                  ".add-page-filds"
               ),

               Button("Save", ".save-btn", null, (e) =>
                  controller_proyect.post(da, document.forms[0])
               ),
            ],
            ".add-page-form form-proyect"
         ),
      ],
      ".add-page-container-page"
   )])
}

  function view_proyect_page(data,da) {
   const { Div, ViewData, Label, Button } = Ui;

   return Div(
      [
         Div(
            [
               Label("Proyects", ".view-tittle-page proyect-page-tittle"),
               ViewData(
                  data,
                  () => {
                     handleUrl.changePage({
                        target: { href: "/add/proyect" },
                     });
                  },
                  (obj) => controller_skill.delete(gate, obj.Key)
               ),
            ],
            ".view-container-data proyect-container-viewproyect"
         ),
         Div(
            [
               Button("back", ".back-btn", null, (e) => {
                  handleUrl.back();
               }),
            ],
            ".view-container-back-btn"
         ),
      ],
      ".view-container-page proyect-container-page"
   );
}

  class controller_proyect {
   static add(gate) {
      return add_proyect_page(gate);
   }
   static view(gate) {
      return (async () => {
         return view_proyect_page(await gate.get(proyects), gate);
      })();
   }
   static post(gate, form) {
      (async () => {
         const res = await gate.post(Mapper(form, proyects));
         if (res) {
            clearForm(form);
         }
         alert("data save");
      })();
   }
   static delete(gate, key) {
      (async () => {
         if (await gate.delete(new proyects(), key)) {
            alert("data delete");
            handleUrl.changePage({
               target: { href: "/view/proyects" },
            });
         } else alert("error");
      })();
   }
}

//

  function add_education_page() {
   //
   const { Div, Label, Button, Input, Form, Line } = Ui;
   let countMoreE = 1;
   //
   return Form([
      Div(
         [
            Div(
               [
                  Button("back", ".back-btn", null, (e) => {
                     handleUrl.back();
                  }),
                  Label("Add New Education", ".add-page-tittle-page"),
               ],
               ".add-page-container-back-btn-tittle"
            ),

            Div(
               [
                  Div(
                     [
                        Input(
                           null,
                           "Tittle",
                           false,
                           "text",
                           null,
                           "Tittle",
                           "fild"
                        ),
                        Input(
                           null,
                           "Institution",
                           false,

                           "text",
                           null,
                           "Institution",
                           "fild"
                        ),
                        Input(
                           null,
                           "Image Name",
                           false,
                           "text",
                           null,
                           "TittleImg",
                           "fild"
                        ),

                        Div(
                           [
                              Div(
                                 [
                                    Label(
                                       "More Education",
                                       ".add-page-tittle-task"
                                    ),
                                    Ui.Button(
                                       Ui.Icon("add_circle", "icon-switch"),
                                       ".btn-add-fild",
                                       null,
                                       (e) => {
                                          const divfather =
                                             Select(".more-education");

                                          divfather.appendChild(
                                             Group(
                                                [
                                                   Line("divide-more-e"),
                                                   Input(
                                                      null,
                                                      "Tittle",
                                                      false,
                                                      "text",
                                                      null,
                                                      `Tittle-${countMoreE}`,
                                                      "fild"
                                                   ),
                                                   Input(
                                                      null,
                                                      "Url",
                                                      false,
                                                      "text",
                                                      null,
                                                      `Institution-${countMoreE}`,
                                                      "fild"
                                                   ),
                                                   Input(
                                                      null,
                                                      "Img Name",
                                                      false,
                                                      "text",
                                                      null,
                                                      `UrlIstitution-${countMoreE}`,
                                                      "fild"
                                                   ),
                                                   Input(
                                                      null,
                                                      "Img Name",
                                                      false,
                                                      "text",
                                                      null,
                                                      null,
                                                      `TittleImg-${countMoreE}`,
                                                      "fild"
                                                   ),
                                                ],
                                                                                      "MoreEducation", ".add-page-more-education"
                                             )
                                          );
                                          countMoreE++;
                                       }
                                    ),
                                 ],
                                 ".add-btn-header"
                              ),
                              Div(
                                 [
                                    Group(
                                       [
                                          Input(
                                             null,
                                             "Tittle",
                                             false,
                                             "text",
                                             null,
                                             `Tittle-${countMoreE}`,
                                             "fild"
                                          ),
                                          Input(
                                             null,
                                             "Url",
                                             false,
                                             "text",
                                             null,
                                             `Institution-${countMoreE}`,
                                             "fild"
                                          ),
                                          Input(
                                             null,
                                             "Img Name",
                                             false,
                                             "text",
                                             null,
                                             `UrlIstitution-${countMoreE}`,
                                             "fild"
                                          ),
                                          Input(
                                             null,
                                             "Img Name",
                                             false,
                                             "text",
                                             null,
                                             null,
                                             `TittleImg-${countMoreE}`,
                                             "fild"
                                          ),
                                       ],
                                       "MoreEducation",
                                       ".add-page-more-education"
                                    ),
                                 ],
                                 ".more-education add-item-group"
                              ),
                           ],
                           ".more-education-group"
                        ),
                     ],
                     ".add-page-filds"
                  ),

                  Button("Save", ".save-btn", null, (e) =>
                     controller_education.post(da, document.forms[0])
                  ),
               ],
               ".add-page-form form-education"
            ),
         ],
         ".add-page-container-page"
      ),
   ]);
}

  function view_education_page(data, da) {
   const { Div, ViewData, Label, Button } = Ui;

   return Div(
      [
         Div(
            [
               Label("Educations", ".view-tittle-page education-page-tittle"),
               ViewData(
                  data,
                  () => {
                     handleUrl.changePage({
                        target: { href: "/add/education" },
                     });
                  },
                  (obj) => controller_skill.delete(gate, obj.Key)
               ),
            ],
            ".view-container-data education-container-viewproyect"
         ),
         Div(
            [
               Button("back", ".back-btn", null, (e) => {
                  handleUrl.back();
               }),
            ],
            ".view-container-back-btn"
         ),
      ],
      ".view-container-page education-container-page"
   );
}

  class controller_education {
   static add(gate) {
      return add_education_page(gate);
   }
   static view(gate) {
      return (async () => {
         return view_education_page(await gate.get(educations), gate);
      })();
   }
   static post(gate, form) {
      (async () => {
         const res = await gate.post(Mapper(form, educations));
         if (res) {
            clearForm(form);
         }
         alert("data save");
      })();
   }
   static delete(gate, key) {
      (async () => {
         if (await gate.delete(new educations(), key)) {
            alert("data delete");
            handleUrl.changePage({
               target: { href: "/view/educations" },
            });
         } else alert("error");
      })();
   }
}

//

  function cp_skill({ Name, ImageName }) {
   return Ui.Div(
      [
         Ui.Img(ImageName, Name, ".skill-img", `width: 70%; height: 70%;`),
         Ui.Label(Name, ".skill-name"),
      ],
      ".skill-container"
   );
}

  function cp_experience({
   Company,
   Descripcion,
   Position,
   Tacks,
}) {
   const { Label, Div, Group } = Ui;

   const labelC = Label(Company, ".experience_company");
   const labelD = Label(Descripcion, ".experience_description");
   const labelP = Label(Position, ".experience_position");

   const GroupCT = Group(
      [],
      "Tacks",
      "Tacks",
      ".experience-container-tacks",
      ".experience-tittle-group-tacks",
      null
   );

   Tacks.forEach((element) =>
      GroupCT.appendChild(Label(element, ".experience_tack"))
   );

   return Div([labelC, labelD, labelP, GroupCT], ".experience_constainer");
}

  function cp_proyect({
   Tittle,
   Description,
   Tegnologys,
   Repositorys,
}) {
   const { Div, Label, Link, Group } = Ui;

   const labelT = Label(Tittle, ".proyect-tittle");
   const labelD = Label(Description, ".proyect-description");

   const groupT = Group(
      [],
      "Tegnologys",
      "Tegnologys",
      ".proyect-container-tegnology",
      ".proyect-tittle-group-tacks"
   );

   const groupR = Group(
      [],
      "Repositorys",
      "Repositorys",
      ".proyect-container-repository"
   );

   Tegnologys.forEach((element) => {
      groupT.appendChild(Label(element, ".proyect-tenology"));
   });

   Repositorys.forEach((element) => {
      groupR.appendChild(Link(element, element, ".proyect-repository"));
   });

   return Div(
      [labelT, labelD, groupT, groupR],
      ".proyect-constainer-experience"
   );
}

  function cp_education({
   Tittle,
   Institution,
   TittleImg,
   MoreEducation,
}) {
   const { Div, Label, Img, Link } = Ui;

   const contaS = Div([], ".education-container-sub-tittle");

   MoreEducation.forEach((e) => {
      contaS.appendChild(
         Div(
            [
               Label(e.Tittle, ".education-sub-tittle"),
               Div(
                  [
                     Label("Institucion : ", ".educstion-label-institution"),
                     e.url !== ""
                        ? Link(
                             e.url,
                             e.Institution,
                             ".education-sub-institution-link"
                          )
                        : Label(e.Institution, ".education-sub-institution"),
                  ],
                  ".education-contaiber-institution"
               ),
               e.TittleImg !== ""
                  ? Img(
                       e.TittleImg,
                       "Imagen del titutlo",
                       ".education-img-sub-tittle",
                       "",
                       true
                    )
                  : null,
            ],
            ".education-container-sub-education"
         )
      );
   });

   return Div(
      [
         Div(
            [
               Label(Tittle, ".education-tittle"),
               Label(Institution, ".education-institution"),
               Img(
                  TittleImg,
                  "Imagen de titulo.",
                  ".education-img-tittle",
                  "",
                  true
               ),
            ],
            ".education-container-last-tittle"
         ),
         contaS,
      ],
      ".education-container_education"
   );
}

  function cp_reference({ Name, PhoneNumber }) {
   const { Div, Label } = Ui;

   return Div(
      [Label(Name, ".name"), Label(PhoneNumber, ".phone")],
      ".constainer-reference"
   );
}

//

  function home_horizontal_page(gate) {
   const { Div, Section } = Ui;

   function clearAdd(page) {
      const section = Select(".container-horizontal");
      RemoveChild(section);

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

      if (page.toString() === "[object Promise]") {
         page.then((value) => appendchild(value));
      } else {
         appendchild(page);
      }
   }

   const btnS = Select(".memu-btn-skill");
   const btnE = Select(".menu-btn-experience");
   const btnD = Select(".menu-btn-education");
   const btnP = Select(".menu-btn-proyect");
   const btnR = Select(".menu-btn-reference");

   function skill() {
      clearAdd(
         (async () => {
            const data = await gate.get(skills);

            return Div(
               data.map((i) => cp_skill(i)),
               ".skills matches-div"
            );
         })()
      );
   }

   skill();

   /* ********************************** */

   btnS.addEventListener("click", (event) => skill());

   /* ********************************** */

   btnE.addEventListener("click", (event) => {
      clearAdd(
         (async () => {
            const data = await gate.get(experiences);

            return Div(
               data.map((i) => cp_experience(i)),
               ".experiences matches-div"
            );
         })()
      );
   });

   /* ********************************** */

   btnP.addEventListener("click", (event) => {
      clearAdd(
         (async () => {
            const data = await gate.get(proyects);

            return Div(
               data.map((i) => cp_proyect(i)),
               ".proyects matches-div"
            );
         })()
      );
   });

   /* ********************************** */

   btnD.addEventListener("click", (event) => {
      clearAdd(
         (async () => {
            const data = await gate.get(educations);

            return Div(
               data.map((i) => cp_education(i)),
               ".educations matches-div"
            );
         })()
      );
   });

   /* ********************************** */

   btnR.addEventListener("click", (event) => {
      clearAdd(
         (async () => {
            const data = await gate.get(references);

            return Div(
               data.map((i) => cp_reference(i)),
               ".references matches-div"
            );
         })()
      );
   });
}

  function home_vertical_page(data) {
   const { Section, Div, Label, Line, Icon } = Ui;

   return Section(
      [
         Div(
            [
               Label("Habilidades", ".main-tittle"),
               Div(
                  data.skills.map((i) => cp_skill(i)),
                  ".skills matches_container_into"
               ),
            ],
            ".matches-div matches_container_section"
         ),

         Div(
            [
               Line(),
               Label("Experiencia laboral", ".main-tittle"),
               Div(
                  [
                     Icon(
                        "arrow_back_ios",
                        ".experiences-arrow-button arrow-button"
                     ),
                     Div(
                        data.experiences.map((i) => cp_experience(i)),
                        ".experiences matches_container_into"
                     ),
                     Icon(
                        "arrow_forward_ios",
                        ".experiences-arrow-button arrow-button"
                     ),
                  ],
                  ".matches_container_into slider_arrow"
               ),
            ],
            ".matches-div matches_container_section"
         ),

         Div(
            [
               Line(),
               Label("Proyectos personales", ".main-tittle"),
               Div(
                  [
                     Icon(
                        "arrow_back_ios",
                        ".proyect-arrow-button arrow-button"
                     ),
                     Div(
                        data.proyects.map((i) => cp_proyect(i)),
                        ".proyects matches_container_into"
                     ),
                     Icon(
                        "arrow_forward_ios",
                        ".proyect-arrow-button arrow-button"
                     ),
                  ],
                  ".matches_container_into slider_arrow"
               ),
            ],
            ".matches-div matches_container_section"
         ),

         Div(
            [
               Line(),
               Label("Educacion", ".main-tittle"),
               Div(
                  data.educations.map((i) => cp_education(i)) ,
                  ".educations matches_container_into"
               ),
            ],
            ".matches-div matches_container_section"
         ),

         Div(
            [
               Line(),
               Label("Referencia", ".main-tittle"),
               Div(
                  data.references.map((i) => cp_reference(i)),
                  ".references matches_container_into"
               ),
            ],
            ".matches-div matches_container_section"
         ),
      ],
      ".container"
   );
}

  class controller_home {
   static horizontal(gate) {
      home_horizontal_page(gate);
   }
   static vertical(gate) {
      return (async () => home_vertical_page(await gate.get(all)))();
   }
}

//

  function error_page() {
   const { Div, Label, Line, Button } = Ui;

   return Div(
      [
         Label("error", ".error-tittle"),

         Label("400", ".error-tittle-error-code"),

         Label("add new skill", ".error-subtittle"),

         Line(""),

         Button("back", ".back-btn", null, (e) =>{ handleUrl.back()}),
      ],
      ".error-container"
   );
}

  function setting_page() {
   const { Label, Button, Line, Div } = Ui;
   const { changePage, back } = handleUrl;

   return Div(
      [
         Div(
            [
               Label("Skills", ".tittle-option"),
               Button("Go to skills", ".btn-option", null, (e) =>
                  changePage({
                     target: { href: "/view/skills" },
                  })
               ),
            ],
            ".option"
         ),
         Div(
            [
               Label("Experiences", ".tittle-option"),
               Button("Go to experiences", ".btn-option", null, (e) =>
                  changePage({
                     target: { href: "/view/experiences" },
                  })
               ),
            ],
            ".option"
         ),
         Div(
            [
               Label("Proyects", ".tittle-option"),
               Button("Go to proyects", ".btn-option", null, (e) =>
                  changePage({
                     target: { href: "/view/proyects" },
                  })
               ),
            ],
            ".option"
         ),
         Div(
            [
               Label("Educations", ".tittle-option"),
               Button("Go to educations", ".btn-option", null, (e) =>
                  changePage({
                     target: { href: "/view/educations" },
                  })
               ),
            ],
            ".option"
         ),
         Div(
            [
               Label("References", ".tittle-option"),
               Button("Go to references", ".btn-option", null, (e) =>
                  changePage({
                     target: { href: "/view/references" },
                  })
               ),
            ],
            ".option"
         ),
         
      ],
      ".setting-container"
   );
}

  class controller_setting {
   static setting() {
      return setting_page();
   }
   static error() {
      return error_page();
   }
}

//

class handleUrl {
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
      default : {
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
    main.appendChild(cp_profile());
    main.appendChild(Ui.Section([], ".container-home"));

    handleUrl.changePage({
      target: { href: window.location.pathname },
    });
  }
}

handleUrl.listenerUrl();
