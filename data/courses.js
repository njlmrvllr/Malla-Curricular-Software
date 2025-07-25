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
  }
];
