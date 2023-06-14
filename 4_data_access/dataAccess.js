import data from "./data.json" assert { type: "json" };
import models from "../1_models/models.js";

export async function getdata(t) {
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
