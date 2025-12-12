// CORRECCIÓN: Agregar event listeners correctamente
document.getElementById('showTransformBtn').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.switchView('transform');
});
applyTransformation() {
    // ... código anterior ...
    
    // Cambiar a vista de transformación automáticamente DESPUÉS de aplicar
    this.switchView('transform');
    
    // ... resto del código ...
    // En todos los botones importantes
.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    // ... tu código ...
});
}
