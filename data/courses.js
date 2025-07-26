// data/courses.js

export const courses = [
  {
    id: "HU625",
    name: "Comprensión y Producción de Lenguaje I",
    cycle: 1,
    credits: 4,
    prerequisites: []  // No tiene prerrequisitos
  },
  {
    id: "HU612",
    name: "Creatividad y Liderazgo",
    cycle: 1,
    credits: 3,
    prerequisites: []  // No tiene prerrequisitos
  },
  {
    id: "MA420",
    name: "Matemática Básica",
    cycle: 1,
    credits: 6,
    prerequisites: []  // Prerrequisito: Nivelación Matemática
  },
  {
    id: "HU548",
    name: "Ética y Ciudadanía",
    cycle: 1,
    credits: 3,
    prerequisites: []
  },
  {
    id: "CC126",
    name: "Introducción a los Algoritmos",
    cycle: 1,
    credits: 6,
    prerequisites: []  // Prerrequisito: Nivelación Matemática
  },
  {
    id: "MA262",
    name: "Cálculo I",
    cycle: 2,
    credits: 6,
    prerequisites: ["MA420"]  // Prerrequisito: Matemática Básica
  },
  {
    id: "HU626",
    name: "Comprensión y Producción de Lenguaje II",
    cycle: 2,
    credits: 4,
    prerequisites: ["HU625"]  // Prerrequisito: Comprensión y Producción de Lenguaje I
  },
  {
    id: "HU159",
    name: "Seminario de Investigacion Academica I",
    cycle: 2,
    credits: 2,
    prerequisites: ["HU625"] 
  },
  {
    id: "AD99",
    name: "Organización y Dirección de Empresas",
    cycle: 2,
    credits: 4,
    prerequisites: []
  },
  {
    id: "CC215",
    name: "Algoritmos",
    cycle: 2,
    credits: 5,
    prerequisites: ["CC126"]  // Prerrequisito: Introducción a los Algoritmos
  },
  {
    id: "MA466",
    name: "Física I",
    cycle: 3,
    credits: 4,
    prerequisites: ["MA262"]
  },
  {
    id: "CC182",
    name: "Algoritmos y Estructuras de Datos",
    cycle: 3,
    credits: 4,
    prerequisites: ["CC215"]
  },
  {
    id: "SI720",
    name: "Diseño Y Patrones De Software",
    cycle: 3,
    credits: 5,
    prerequisites: ["CC215"]
  },
  {
    id: "SI397",
    name: "Especificación Y Análisis De Requerimientos",
    cycle: 3,
    credits: 3,
    prerequisites: ["AD99"]
  },
  {
    id: "MA265",
    name: "Matemática Discreta",
    cycle: 3,
    credits: 6,
    prerequisites: []
  },
  {
    id: "SI725",
    name: "Arquitectura De Computadoras",
    cycle: 4,
    credits: 4,
    prerequisites: ["MA265"]
  },
  {
    id: "SI400",
    name: "Diseño de Base de Datos",
    cycle: 4,
    credits: 4,
    prerequisites:["CC182", "SI720"]
  },
  {
    id: "MA462",
    name: "Física II",
    cycle: 4,
    credits: 6, 
    prerequisites: ["MA466"]
  },
  {
    id: "SI385",
    name: "IHC y Tecnologias Móviles",
    cycle: 4,
    credits: 4,
    prerequisites: ["SI397"]
  },
  {
    id: "MA475",
    name: "Matemática Computacional",
    cycle: 4,
    credits: 2,
    prerequisites: ["MA265"]
  },
  {
    id: "SI730",
    name: "Aplicaciones Web",
    cycle: 5,
    credits: 4,
    prerequisites: ["SI400"]
  },
  {
    id: "MA263",
    name: "Cálculo II",
    cycle: 5,
    credits: 6,
    prerequisites: ["MA262"]
  },
  {
    id: "SI729",
    name: "Desarrollo de Aplicaciones Open Source",
    cycle: 5,
    credits: 6,
    prerequisites: ["SI400"]
  },
  {
    id: "SI726",
    name: "Sistemas Operativos",
    cycle: 5,
    credits: 6,
    prerequisites: ["SI725", "SI385"]
  },
  {
    id: "MA642",
    name: "Estadístiva Aplicada I",
    cycle: 6,
    credits: 4,
    prerequisites: ["MA475"]
  },
  {
    id: "CC238",
    name: "Aplicaciones para Dispositivos Móviles",
    cycle: 6,
    credits: 4,
    prerequisites: ["SI730"]
  },
  {
    id: "CC184",
    name: "Complejidad Algorítmica",
    cycle: 6,
    credits: 4,
    prerequisites: ["CC182"]
  },
  {
    id: "SI640",
    name: "Redes y Comunicaciones de Datos",
    cycle: 6, 
    credits: 4,
    prerequisites: ["SI726"]
  },
  {
    id: "SI572",
    name: "Desarrolo de Soluciones IoT",
    cycle: 7,
    credits: 4,
    prerequisites: ["CC238"]
  },
  {
    id: "SI732",
    name: "Diseño de Experimentos de Ingeniería de Software",
    cycle: 7,
    credits: 4,
    prerequisites: ["MA642"]
  },
  {
    id: "SI642",
    name: "Finanzas e Ingeniería Económica",
    cycle: 7,
    credits: 4,
    prerequisites: []
  },
  {
    id: "SI657",
    name: "Fundamentos de Arquitectura de Software",
    cycle: 7,
    credits: 5,
    prerequisites: ["SI729"]
  },
  {
    id: "SI728",
    name: "Arquitecturas de Software Emergentes",
    cycle: 8,
    credits: 4,
    prerequisites: ["SI657"]
  },
  {
    id: "SI727",
    name:"Gerencia de Proyectos en Computación",
    cycle: 8,
    credits: 4,
    prerequisites: []
  },
  {
    id: "IN397",
    name: "Seminario de Investigación Académica II",
    cycle: 8,
    credits: 3,
    prerequisites: ["HU159"]
  },
  {
    id: "SI639",
    name: "Taller de Desempeño Profesional",
    cycle: 8,
    credits: 4,
    prerequisites: ["SI732"]
  },
  {
    id: "SI438",
    name: "Calidad y Mejora de Procesos de Software",
    cycle: 9,
    credits: 4,
    prerequisites: ["SI657"],
  },
  {
    id: "SI570",
    name: "Desarrolo Ágil de Productos de Software",
    cycle: 9,
    credits: 4,
    prerequisites: ["SI728", "SI727"]
  },
  {
    id: "SI644",
    name: "Taller de Proyecto I",
    cycle: 9,
    credits: 5,
    prerequisites: ["SI727","SI639","IN397"]
  },
  {
    id: "SI646",
    name: "Curso de Trabajo de Investigación - Taller De Proyecto II",
    cycle: 10,
    credits: 5,
    prerequisites: ["SI644"]
  }
];
