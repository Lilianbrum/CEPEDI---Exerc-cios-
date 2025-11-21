// GERENCIADOR DE TAREFAS

class GerenciadorTarefas {
    constructor() {
        this.tarefas = [];
        this.contadorId = 1;
        this.prioridadesValidas = ['baixa', 'média', 'alta'];
    }

    // 1. Criar uma nova tarefa
    criarTarefa(descricao, prioridade = 'média') {
        // Validar prioridade
        if (!this.prioridadesValidas.includes(prioridade.toLowerCase())) {
            throw new Error(`Prioridade inválida. Use: ${this.prioridadesValidas.join(', ')}`);
        }

        const novaTarefa = {
            id: this.contadorId++,
            descricao: descricao,
            concluida: false,
            prioridade: prioridade.toLowerCase()
        };

        this.tarefas.push(novaTarefa);
        console.log(` Tarefa criada: "${descricao}" (ID: ${novaTarefa.id})`);
        return novaTarefa;
    }

    // 2. Listar todas as tarefas
    listarTarefas(filtro = 'todas') {
        console.log(`\n LISTA DE TAREFAS (${filtro.toUpperCase()})`);
        console.log('='.repeat(50));

        let tarefasFiltradas = this.tarefas;

        switch (filtro.toLowerCase()) {
            case 'pendentes':
                tarefasFiltradas = this.tarefas.filter(tarefa => !tarefa.concluida);
                break;
            case 'concluidas':
                tarefasFiltradas = this.tarefas.filter(tarefa => tarefa.concluida);
                break;
            case 'alta':
            case 'média':
            case 'baixa':
                tarefasFiltradas = this.tarefas.filter(tarefa => 
                    tarefa.prioridade === filtro.toLowerCase());
                break;
        }

        if (tarefasFiltradas.length === 0) {
            console.log(' Nenhuma tarefa encontrada');
            return [];
        }

        tarefasFiltradas.forEach(tarefa => {
            const status = tarefa.concluida ? '' : '';
            const prioridadeEmoji = this.obterEmojiPrioridade(tarefa.prioridade);
            console.log(`${status} ${tarefa.id}. ${tarefa.descricao} ${prioridadeEmoji}`);
        });

        return tarefasFiltradas;
    }

    // 3. Marcar tarefa como concluída
    concluirTarefa(id) {
        const tarefa = this.encontrarTarefaPorId(id);
        
        if (tarefa) {
            if (tarefa.concluida) {
                console.log(` Tarefa ${id} já estava concluída`);
            } else {
                tarefa.concluida = true;
                console.log(` Tarefa "${tarefa.descricao}" marcada como concluída!`);
            }
            return tarefa;
        } else {
            throw new Error(`Tarefa com ID ${id} não encontrada`);
        }
    }

    // 4. Excluir uma tarefa
    excluirTarefa(id) {
        const index = this.tarefas.findIndex(tarefa => tarefa.id === id);
        
        if (index !== -1) {
            const tarefaExcluida = this.tarefas.splice(index, 1)[0];
            console.log(` Tarefa "${tarefaExcluida.descricao}" excluída com sucesso!`);
            return tarefaExcluida;
        } else {
            throw new Error(`Tarefa com ID ${id} não encontrada`);
        }
    }

    // 5. Editar uma tarefa
    editarTarefa(id, novaDescricao, novaPrioridade) {
        const tarefa = this.encontrarTarefaPorId(id);
        
        if (tarefa) {
            if (novaDescricao) tarefa.descricao = novaDescricao;
            if (novaPrioridade) {
                if (!this.prioridadesValidas.includes(novaPrioridade.toLowerCase())) {
                    throw new Error(`Prioridade inválida. Use: ${this.prioridadesValidas.join(', ')}`);
                }
                tarefa.prioridade = novaPrioridade.toLowerCase();
            }
            
            console.log(` Tarefa ${id} atualizada com sucesso!`);
            return tarefa;
        } else {
            throw new Error(`Tarefa com ID ${id} não encontrada`);
        }
    }

    // 6. Buscar tarefas por texto
    buscarTarefas(texto) {
        const termo = texto.toLowerCase();
        const resultados = this.tarefas.filter(tarefa => 
            tarefa.descricao.toLowerCase().includes(termo)
        );

        console.log(`\n RESULTADOS DA BUSCA: "${texto}"`);
        console.log('='.repeat(40));

        if (resultados.length === 0) {
            console.log(' Nenhuma tarefa encontrada');
            return [];
        }

        resultados.forEach(tarefa => {
            const status = tarefa.concluida ? '' : '';
            const prioridadeEmoji = this.obterEmojiPrioridade(tarefa.prioridade);
            console.log(`${status} ${tarefa.id}. ${tarefa.descricao} ${prioridadeEmoji}`);
        });

        return resultados;
    }

    // 7. Obter estatísticas
    obterEstatisticas() {
        const total = this.tarefas.length;
        const concluidas = this.tarefas.filter(t => t.concluida).length;
        const pendentes = total - concluidas;
        
        const prioridades = {
            alta: this.tarefas.filter(t => t.prioridade === 'alta').length,
            média: this.tarefas.filter(t => t.prioridade === 'média').length,
            baixa: this.tarefas.filter(t => t.prioridade === 'baixa').length
        };

        console.log('\n ESTATÍSTICAS DAS TAREFAS');
        console.log('='.repeat(30));
        console.log(` Total: ${total}`);
        console.log(` Concluídas: ${concluidas}`);
        console.log(` Pendentes: ${pendentes}`);
        console.log(` Alta prioridade: ${prioridades.alta}`);
        console.log(` Média prioridade: ${prioridades.média}`);
        console.log(` Baixa prioridade: ${prioridades.baixa}`);

        return { total, concluidas, pendentes, prioridades };
    }

    // Métodos auxiliares
    encontrarTarefaPorId(id) {
        return this.tarefas.find(tarefa => tarefa.id === id);
    }

    obterEmojiPrioridade(prioridade) {
        const emojis = {
            'alta': '',
            'média': '',
            'baixa': ''
        };
        return emojis[prioridade] || '';
    }

    // Limpar todas as tarefas
    limparTodasTarefas() {
        const quantidade = this.tarefas.length;
        this.tarefas = [];
        this.contadorId = 1;
        console.log(` ${quantidade} tarefas removidas. Lista limpa!`);
    }

    // Exportar tarefas (para persistência)
    exportarTarefas() {
        return JSON.parse(JSON.stringify(this.tarefas));
    }

    // Importar tarefas
    importarTarefas(dados) {
        if (Array.isArray(dados)) {
            this.tarefas = dados;
            // Atualizar contadorId baseado no maior ID existente
            const maiorId = dados.reduce((max, tarefa) => Math.max(max, tarefa.id || 0), 0);
            this.contadorId = maiorId + 1;
            console.log(` ${dados.length} tarefas importadas com sucesso!`);
        } else {
            throw new Error('Dados de importação devem ser um array');
        }
    }
}

// FUNÇÕES DE DEMONSTRAÇÃO E USO

function demonstrarGerenciador() {
    console.log(' DEMONSTRAÇÃO DO GERENCIADOR DE TAREFAS');
    console.log('='.repeat(50));

    const gerenciador = new GerenciadorTarefas();

    // Criar algumas tarefas de exemplo
    gerenciador.criarTarefa('Estudar JavaScript', 'alta');
    gerenciador.criarTarefa('Fazer compras no mercado', 'média');
    gerenciador.criarTarefa('Ler um livro', 'baixa');
    gerenciador.criarTarefa('Preparar apresentação', 'alta');
    gerenciador.criarTarefa('Caminhar no parque', 'baixa');

    // Listar todas as tarefas
    gerenciador.listarTarefas();

    // Marcar algumas como concluídas
    gerenciador.concluirTarefa(1);
    gerenciador.concluirTarefa(4);

    // Listar pendentes
    gerenciador.listarTarefas('pendentes');

    // Buscar tarefas
    gerenciador.buscarTarefas('estudar');

    // Estatísticas
    gerenciador.obterEstatisticas();

    // Editar uma tarefa
    gerenciador.editarTarefa(2, 'Fazer compras semanais', 'alta');

    // Listar por prioridade
    gerenciador.listarTarefas('alta');

    return gerenciador;
}
