// Part 1: Basic Arrays - Product Inventory

// Define the Product type
type Product = {
    name: string,
    price: number,
    inventory: {
        stock: number,
        colourOptions: string[]
    }
}

// Initialize an array of products
let product: Product[] = [
    {
        name: "Bags",
        price: 800,
        inventory: {
            stock: 18,
            colourOptions: ["Black", "Pink", "Purple", "Grey"]
        }
    },
    {
        name: "Sneakers",
        price: 1000,
        inventory: {
            stock: 13,
            colourOptions: ["Grey", "Neon", "White", "Green"]
        }
    },
    {
        name: "Jeans",
        price: 500,
        inventory: {
            stock: 20,
            colourOptions: ["Black", "White", "Grey"]
        }
    },
];

// Function to change the colour of a product
function changeColour(product: Product, newColour: string){
    if(product.inventory.colourOptions.includes(newColour)){
        if(newColour === "Red"){
            product.price *= 1.10
        }
        else if(newColour === "Blue"){
            product.price *= 0.95
        }
        // Update the colour of the product
        product.inventory.colourOptions[0] = newColour
        console.log(`Colour changed to ${newColour}. New price: ${product.price}`);
    } else {
        console.log(`Error: ${newColour} is not available for ${product.name}`);
    }
}

// Display each products details
product.forEach(product => {
    console.log(`Product: ${product.name}`);
    console.log(`Price: ${product.price.toFixed(2)}`);
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available colours: ${product.inventory.colourOptions.join(", ")}`);
    console.log("------------------------------------------");  
});