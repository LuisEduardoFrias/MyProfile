export async function getdata(t) { 
  return await fetch('https://luiseduardofrias.github.io/MyProfile/data/data.json')
        .then((response) => response.json())
        .then((json) =>
        {     
            switch (t) {
                case skills:      return json.skills;
                case segurity:    return json.segurity;
                case experiences: return json.experiences;
                case proyects:    return json.proyects;
                case 
                default:          return undefined;
            }
        });
};

export const segurity = {};
export const skills = {};
export const experiences = {};
export const proyects = {};
export const educations = {};
export const references = {};

/*
export class segurity {
    constructor(password){
        this.password = password;
    }
};

export class skills {
    constructor(name,url) {
        this.name = name;
        this.url = url;
    }
};

export class experiences {
    constructor(company, descripcion, position, tacks) {
        this.company = company;
        this.description = descripcion;
        this.position = position;
        this.tacks = tacks;
    }
}*/
