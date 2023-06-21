import data from "./data.json" assert { type: "json" };
import models from "../1_models/models.js";
import { base_url } from "../3_controllers/helpers/tools.js";

export class gateway {
        static async get(t) {
                return await fetch(base_url + "data/data.json")
                        .then((response) => data /*response.json()*/)
                        .then((json) => {
                                switch (t) {
                                        case models.skills:
                                                return json.skills;
                                        case models.segurity:
                                                return json.segurity;
                                        case models.experiences:
                                                return json.experiences;
                                        case models.proyects:
                                                return json.proyects;
                                        case models.educations:
                                                return json.educations;
                                        case models.references:
                                                return json.references;
                                        case models.all:
                                                return json;
                                        default:
                                                return undefined;
                                }
                        });
        }

        static async post(obj) {
                const pro = Reflect.get(dataArray, obj.constructor.Name);

                if (pro === undefined) {
                        if (!Reflect.set(obj, "Key", 1)) return false;

                        return Reflect.set(
                                dataArray,
                                obj.constructor.Name,
                                obj
                        );
                }

                if (!Reflect.set(obj, "Key", pro.length + 1)) return false;

                pro.push(obj);

                return Reflect.set(dataArray, obj.constructor.Name, pro);

                return true;
        }

        static async put(obj) {
                let newPro = [...Reflect.get(dataArray, obj.constructor.Name)];

                const index = newPro.findIndex((e) => e.Key === obj.Key);

                newPro[index] = {
                        ...newPro[index],
                        ...obj,
                };

                return Reflect.set(dataArray, obj.constructor.Name, newPro);
        }

        static async delete(obj, Key) {
                const pro = Reflect.get(dataArray, obj.constructor.Name);

                const index = pro.findIndex((e) => e.Key === Key);
                if (index > -1) {
                        pro.splice(index, 1);
                }

                return Reflect.set(dataArray, obj.constructor.Name, pro);
        }
}

const dataArray = {
        segurity: {
                password: "Robert190114",
        },
        skills: [
                { Key: "1", Name: "C#", Img: "cShart.png" },
                { Key: "2", Name: "React", Img: "react.png" },
                { Key: "3", Name: "Html 5", Img: "html5.png" },
                { Key: "4", Name: "Css 3", Img: "css3.png" },
                { Key: "5", Name: "Java Script", Img: "javaScript.png" },
                { Key: "6", Name: "Sql Server", Img: "sqlServer.png" },
                { Key: "7", Name: "Oracle", Img: "oracle.png" },
                { Key: "8", Name: "Type Script", Img: "typeScript.png" },
                { Key: "9", Name: "GitHub", Img: "github.svg" },
                { Key: "10", Name: "Node", Img: "node.png" },
                { Key: "11", Name: "BootStrap", Img: "bootStrap.png" },
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
                        Tegnologys: [
                                "Angular 11",
                                "Asp.Net Core Api 3.1",
                                "Bootstrap",
                        ],
                        Repositorys: [],
                },
                {
                        Key: "4",
                        Tittle: "DSRG",
                        Description:
                                "Generador de reporte de la estructura tu base de datos.",
                        Tegnologys: [
                                "WindowsForms",
                                "Telerik report",
                                "SpreadsheetLight - Excel",
                        ],
                        Repositorys: [
                                "https://github.com/LuisEduardoFrias/DSRG",
                        ],
                },
        ],
        educations: [
                {
                        Key: "1",
                        Tittle: "Técnico Superior en Desarrollo del Software",
                        Institution:
                                "Instituto Técnico Superior Comunitario (ITSC)",
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
