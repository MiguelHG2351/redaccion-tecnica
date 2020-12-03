if('paintWorklet' in CSS) {
    CSS.paintWorklet.addModule('/paint.js')
} else {
    console.log('No puedes usar Paint API por tu versión de navegador')
}