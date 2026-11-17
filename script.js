const botoes = document.querySelectorAll('.btn-proximo');

botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        const passoAtual = document.querySelector('.passo.ativo');
        const proximoPasso = document.querySelector(`#passo-${botao.dataset.proximo}`);

        if (!passoAtual || !proximoPasso) {
            console.error(`Não foi possível encontrar a etapa "${botao.dataset.proximo}".`);
            return;
        }

        passoAtual.classList.remove('ativo');
        proximoPasso.classList.add('ativo');
    });
});