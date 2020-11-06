const socket = io();
		
socket.on('connect', () => {
	console.log('Conectado al servidor')
});

// Escuchar
socket.on('disconnect', () => {
	console.log('Perdimos conexion con el servidor')
});

// Enviar informacion
socket.emit('enviarMensaje', {
	usuario: 'Omar',
	mensaje: 'Hola Mundo',
}, (res) => {
	console.log('respuesta server', res);
});

// Escuchar informacion
socket.on('enviarMensaje', (mensaje) => {
	console.log('Servidor', mensaje)
});