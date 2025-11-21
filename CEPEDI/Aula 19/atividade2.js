class Departamento {
    #nome;

    constructor(nome) {
        this.#nome = nome;
    }

    get nome() {
        return this.#nome;
    }
}

class Empresa {
    #nome;
    #departamentos;

    constructor(nome) {
        this.#nome = nome;
        this.#departamentos = [];
    }

    get nome() {
        return this.#nome;
    }

    adicionarDepartamento(departamento) {
        this.#departamentos.push(departamento);
    }

    listarDepartamentos() {
        console.log(`Departamentos da empresa ${this.#nome}:`);
        this.#departamentos.forEach(dep => {
            console.log("- " + dep.nome);
        });
    }
}

const depTI = new Departamento("TI");
const depRH = new Departamento("RH");
const depFin = new Departamento("Finanças");

const empresa = new Empresa("IFMG");

empresa.adicionarDepartamento(depTI);
empresa.adicionarDepartamento(depRH);
empresa.adicionarDepartamento(depFin);

empresa.listarDepartamentos();