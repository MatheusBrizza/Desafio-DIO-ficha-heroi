class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo == "guerreiro") {
            ataque = "espada";
        } else if (this.tipo == "monge") {
            ataque = "artes marciais";
        } else if (this.tipo == "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque desconhecido"; 
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi("Arthur", 30, "mago");
const heroi2 = new Heroi("Lia", 25, "guerreiro");
const heroi3 = new Heroi("Zen", 40, "monge");
const heroi4 = new Heroi("Kai", 22, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
