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
    prerequisites: ["MA638"]  // Prerrequisito: Nivelación Matemática
  },
  {
    id: "CC126",
    name: "Introducción a los Algoritmos",
    cycle: 1,
    credits: 6,
    prerequisites: ["MA638"]  // Prerrequisito: Nivelación Matemática
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
    id: "CC215",
    name: "Algoritmos",
    cycle: 2,
    credits: 5,
    prerequisites: ["CC126"]  // Prerrequisito: Introducción a los Algoritmos
  }
];
