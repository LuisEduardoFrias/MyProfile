import data from "./data.json" assert { type: "json" };

export async function getdata(t) {
   return await fetch(base_url + "data/data.json")
      .then((response) => data /*response.json()*/)
      .then((json) => {
         switch (t) {
            case skills:
               return json.skills;
            case segurity:
               return json.segurity;
            case experiences:
               return json.experiences;
            case proyects:
               return json.proyects;
            case educations:
               return json.educations;
            case references:
               return json.references;
            case all:
               return json;
            default:
               return undefined;
         }
      });
}
