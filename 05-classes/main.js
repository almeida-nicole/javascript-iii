const x = 40

class Ponto {
    constructor(nome, posX, posY) {
        this.nome = nome
        this.x = posX
        this.y = posY
    }

    mover_horizontalmente(distancia) {
        this.x += distancia
        return this.x
    }

    mover_verticalmente(distancia) {
        this.y += distancia
        return this.y
    }

    mover(distanciaX, distanciaY) {
        this.x += distanciaX
        this.y += distanciaY
        return [ this.x, this.y ]
    }

    distancia_entre_dois_pontos(outro_ponto) {
        const x1 = this.x
        const y1 = this.y
        const x2 = outro_ponto.x
        const y2 = outro_ponto.y
        return Math.sqrt( ( Math.abs( x1 - x2 ) ) ** 2 + ( Math.abs( y1 - y2 ) ) ** 2 )
    }
}

class Div extends Ponto {
    constructor(nome, cor, posX, posY, altura, largura) {
        super(nome, posX, posY)

        this.cor = cor
        this.altura = altura
        this.largura = largura
    }

    desenhar() {
        const body = document.querySelector("body")
        this.node = document.createElement("div")
        this.node.style.width = this.largura + "px"
        this.node.style.height = this.altura + "px"
        this.node.style.backgroundColor = this.cor
        // this.node.style.top = this.x + "px"
        // this.node.style.left = this.y + "px"
        body.appendChild(this.node)
    }

    atualizar() {
        this.node.style.top = this.y + 'px';
        this.node.style.left = this.x + 'px';
    }
}

const bolinhas = [];
bolinhas.push(new Div('Teste', 'red', 100, 0, 50, 50))

bolinhas[0].desenhar()

document.addEventListener("keydown", function(event){
    console.log(event.key)
        if (event.key === "ArrowRight") {
            bolinhas[0].mover_horizontalmente(10)
            bolinhas[0].atualizar();    
        }
        if (event.key === "ArrowLeft") {
            bolinhas[0].mover_horizontalmente(-10)
            bolinhas[0].atualizar();    
        }
        else if (event.key === "ArrowDown") {
            // mover_verticalmente(distancia)
        }

})