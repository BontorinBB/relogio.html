function atualizarRelogio() {
    const agora = new Date();
    
    // Obter horas, minutos e segundos
    let horas = agora.getHours();
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    
    // Formato AM/PM
    const ampm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12;
    horas = horas ? horas.toString().padStart(2, '0') : '12';
    
    // Atualizar o relógio
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
    document.getElementById('ampm').textContent = ampm;
    
    // Atualizar a data
    const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const diaSemana = diasSemana[agora.getDay()];
    const dia = agora.getDate();
    const mes = meses[agora.getMonth()];
    const ano = agora.getFullYear();
    
    document.getElementById('data').textContent = `${diaSemana}, ${dia} ${mes} ${ano}`;
}

// Atualizar imediatamente e a cada segundo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);
