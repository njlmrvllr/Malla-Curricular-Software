// js/main.js

// Importamos los cursos desde el archivo data/courses.js
import { courses } from '../data/courses.js';

// Función para cargar los cursos en el HTML
function loadCourses() {
  courses.forEach(course => {
    const cycleElement = document.getElementById(`cycle-${course.cycle}`);
    const courseElement = document.createElement('div');
    courseElement.classList.add('course');
    courseElement.dataset.id = course.id;
    courseElement.dataset.prereqs = course.prerequisites.join(',');

    courseElement.innerHTML = `
      <span>${course.name}</span>
    `;
//      <span>Créditos: ${course.credits}</span>

    cycleElement.appendChild(courseElement);

    // Agregar evento de clic para marcar como aprobado
    courseElement.addEventListener('click', () => {
      courseElement.classList.toggle('approved');
      checkUnlockableCourses();
    });
  });
}

// Función para verificar si los cursos se pueden desbloquear
function checkUnlockableCourses() {
  document.querySelectorAll('.course').forEach(courseElement => {
    const prereqs = courseElement.dataset.prereqs.split(',');
    const approvedCourses = document.querySelectorAll('.course.approved');
    const approvedIds = Array.from(approvedCourses).map(course => course.dataset.id);

    const canUnlock = prereqs.every(pr => approvedIds.includes(pr));

    if (canUnlock) {
      courseElement.classList.add('unlocked');
    } else {
      courseElement.classList.remove('unlocked');
    }
  });
}

// Cargar los cursos al cargar la página
document.addEventListener('DOMContentLoaded', loadCourses);

