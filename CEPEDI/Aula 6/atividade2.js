// GERENCIADOR DE TAREFAS SIMPLES

const gerenciadorTarefas = {
    // Array para armazenar as tarefas
    tarefas: [],
    contadorId: 1,
    prioridadesValidas: ['baixa', 'média', 'alta'],

    // ➢ adicionarTarefa(descricao, prioridade)
    adicionarTarefa(descricao, prioridade = 'média') {
        // Validar a prioridade
        if (!this.prioridadesValidas.includes(prioridade.toLowerCase())) {
            console.log(` Prioridade inválida! Use: ${this.prioridadesValidas.join(', ')}`);
            return null;
        }

        // Criar o objeto tarefa
        const novaTarefa = {
            id: this.contadorId++,
            descricao: descricao,
            concluida: false,
            prioridade: prioridade.toLowerCase()
        };

        // Adicionar ao array
        this.tarefas.push(novaTarefa);
        console.log(` Tarefa adicionada: "${descricao}" (ID: ${novaTarefa.id})`);
        return novaTarefa;
    },

    // ➢ listarTarefas()
    listarTarefas() {
        console.log('\n LISTA DE TAREFAS');
        console.log('='.repeat(50));

        if (this.tarefas.length === 0) {
            console.log('📭 Nenhuma tarefa cadastrada');
            return;
        }

        this.tarefas.forEach(tarefa => {
            const status = tarefa.concluida ? '' : '';
            const emojiPrioridade = this.obterEmojiPrioridade(tarefa.prioridade);
            console.log(`${status} [${tarefa.id}] ${tarefa.descricao} ${emojiPrioridade}`);
        });

        // Mostrar estatísticas rápidas
        const total = this.tarefas.length;
        const concluidas = this.tarefas.filter(t => t.concluida).length;
        console.log(`\n Resumo: ${concluidas}/${total} concluídas`);
    },

    // ➢ marcarComoConcluida(id)
    marcarComoConcluida(id) {
        const tarefa = this.encontrarTarefaPorId(id);
        
        if (!tarefa) {
            console.log(` Tarefa com ID ${id} não encontrada`);
            return false;
        }

        if (tarefa.concluida) {
            console.log(`A tarefa "${tarefa.descricao}" já estava concluída`);
            return true;
        }

        tarefa.concluida = true;
        console.log(` Tarefa "${tarefa.descricao}" marcada como concluída!`);
        return true;
    },

    // ➢ removerTarefa(id)
    removerTarefa(id) {
        const index = this.tarefas.findIndex(tarefa => tarefa.id === id);
        
        if (index === -1) {
            console.log(` Tarefa com ID ${id} não encontrada`);
            return false;
        }

        const tarefaRemovida = this.tarefas.splice(index, 1)[0];
        console.log(` Tarefa removida: "${tarefaRemovida.descricao}"`);
        return true;
    },

    // Funções auxiliares
    encontrarTarefaPorId(id) {
        return this.tarefas.find(tarefa => tarefa.id === id);
    },

    obterEmojiPrioridade(prioridade) {
        const emojis = {
            'alta': '',
            'média': '', 
            'baixa': ''
        };
        return emojis[prioridade] || '';
    },

    // Função extra útil: limpar todas as tarefas
    limparTodasTarefas() {
        this.tarefas = [];
        this.contadorId = 1;
        console.log(' Todas as tarefas foram removidas!');
    },

    // Função extra útil: listar tarefas pendentes
    listarTarefasPendentes() {
        const pendentes = this.tarefas.filter(tarefa => !tarefa.concluida);
        
        console.log('\n TAREFAS PENDENTES');
        console.log('='.repeat(30));

        if (pendentes.length === 0) {
            console.log(' Todas as tarefas estão concluídas!');
            return;
        }

        pendentes.forEach(tarefa => {
            const emojiPrioridade = this.obterEmojiPrioridade(tarefa.prioridade);
            console.log(` [${tarefa.id}] ${tarefa.descricao} ${emojiPrioridade}`);
        });
    }
};

// DEMONSTRAÇÃO DO SISTEMA
function demonstrarGerenciador() {
    console.log(' DEMONSTRAÇÃO DO GERENCIADOR DE TAREFAS');
    console.log('='.repeat(50));

    // Adicionar tarefas de exemplo
    gerenciadorTarefas.adicionarTarefa('Estudar JavaScript', 'alta');
    gerenciadorTarefas.adicionarTarefa('Fazer compras', 'média');
    gerenciadorTarefas.adicionarTarefa('Ler livro', 'baixa');
    gerenciadorTarefas.adicionarTarefa('Preparar apresentação', 'alta');

    // Listar todas as tarefas
    gerenciadorTarefas.listarTarefas();

    // Marcar algumas como concluídas
    console.log('\n--- Marcando tarefas como concluídas ---');
    gerenciadorTarefas.marcarComoConcluida(1);
    gerenciadorTarefas.marcarComoConcluida(3);

    // Listar novamente para ver as alterações
    gerenciadorTarefas.listarTarefas();

    // Remover uma tarefa
    console.log('\n--- Removendo uma tarefa ---');
    gerenciadorTarefas.removerTarefa(2);

    // Listar tarefas pendentes
    gerenciadorTarefas.listarTarefasPendentes();

    // Testar erros
    console.log('\n--- Testando casos de erro ---');
    gerenciadorTarefas.marcarComoConcluida(99); // ID inexistente
    gerenciadorTarefas.removerTarefa(99); // ID inexistente
    gerenciadorTarefas.adicionarTarefa('Tarefa inválida', 'prioridade_errada');
}

