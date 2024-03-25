function tabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    let n = Number(num.value);

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        // Limpa a tabela antes de adicionar os novos resultados
        tab.innerHTML = '';

        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            item.value = `tab${c}`
            tab.appendChild(item);
        }
    }
}
