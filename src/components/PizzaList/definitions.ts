import pizza01 from "../../img/pizza01.jpg";
import pizza02 from "../../img/pizza02.jpg";
import pizza03 from "../../img/pizza03.jpg";
import pizza04 from "../../img/pizza04.jpg";

export type PizzaFlavors = {
    image: string;
    name: string;
    price: string;
    description: string;
}

export const pizzasFlavors: Array<PizzaFlavors> = [
    {
        image: pizza02,
        name: "Margherita Especial",
        price: "R$25,00",
        description: "A clássica Margherita com muçarela de búfala fresca, tomates suculentos e manjericão."
    },
    {
        image: pizza01,
        name: "Pepperoni Picante",
        price: "R$28,00",
        description: "Uma explosão de sabor com generosas fatias de pepperoni e pimenta jalapeño."
    },
    {
        image: pizza04,
        name: "Vegetariana Delícia",
        price: "R$26,00",
        description: "Repleta de vegetais frescos, incluindo cogumelos, pimentões, cebola e azeitonas."
    },
    {
        image: pizza03,
        name: "Quatro Queijos",
        price: "R$30,00",
        description: "Uma combinação divina de muçarela, gorgonzola, parmesão e provolone."
    },
    {
        image: pizza01,
        name: "Frango com Pesto",
        price: "R$27,50",
        description: "Peito de frango suculento, molho pesto, tomate cereja e queijo feta."
    },
    {
        image: pizza04,
        name: "Calabresa",
        price: "R$29,00",
        description: "Calabresa defumada, pimentões coloridos e cebola roxa, tudo com um toque picante."
    },
    {
        image: pizza03,
        name: "Mediterrânea",
        price: "R$31,50",
        description: "Inspirada na culinária mediterrânea, com azeitonas kalamata, tomate seco e queijo feta."
    },
    {
        image: pizza02,
        name: "Pizza do Chef",
        price: "R$33,00",
        description: "Uma seleção especial do chef, com ingredientes sazonais e surpresas deliciosas."
    }
]