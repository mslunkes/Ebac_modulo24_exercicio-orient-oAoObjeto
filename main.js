function Veiculo (fabricante, modelo, categoria, preco) {
    this.fabricante =  fabricante;
    this.modelo = modelo;
    this.fabricante = fabricante

    let _preco = preco;
    this.getPreco = function(){
        return _preco
    }

    this.setPreco = function(valor){
        if (typeof preco === 'number') {
            _preco = valor;
        }
    }

    this.desconto = function(){
        const novoPreco = _preco * 0.95;
        _preco = novoPreco
    }
}

function SUV(fabricante, modelo){
    Veiculo.call(this,fabricante, modelo, "SUV", 100000)

    this.desconto = function(){
        const novoPreco = this.getPreco() * 0.92
        this.setPreco(novoPreco)
    }
}

function Pickup (fabricante, modelo){
    Veiculo.call(this,fabricante, modelo, "Pickup", 150000)

    this.desconto = function(){
        const novoPreco = this.getPreco() *0.90
        this.setPreco(novoPreco)
    }
}

const veiculo1 = new Veiculo("Chevrolet", "Onix", "hatch", 80000);
const veiculo2 = new SUV("Volkswagen", "T-Cros");
const veiculo3 = new Pickup("Chevrolet", "S10");

veiculo1.desconto();
const precoVeiculo1 = veiculo1.getPreco();
console.log( `O preço do ${veiculo1.fabricante} ${veiculo1.modelo} é: R$ ${precoVeiculo1}`)

veiculo2.desconto();
const precoVeiculo2 = veiculo2.getPreco();
console.log( `O preço do ${veiculo1.fabricante} ${veiculo2.modelo} é: R$ ${precoVeiculo2}`)

veiculo3.desconto();
const precoVeiculo3 = veiculo3.getPreco();
console.log( `O preço do ${veiculo1.fabricante} ${veiculo3.modelo} é: R$ ${precoVeiculo3}`)


