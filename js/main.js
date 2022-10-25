let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];







window.onload = function renderGlasses (){
    let content = dataGlasses.reduce((html, product) => {
        
        html += `
        <div  class="col-4 "  onclick = "wearGlasses('${product.virtualImg}')">
            <img style="width:100% ;" src="${product.src}" alt="">
        </div>
        `;
        return html;
    },'');
    document.getElementById("vglassesList").innerHTML = content;
}

window.wearGlasses = (imgL)=>{
   let content1 = `
    <img src="${imgL}" alt="" >`
    document.getElementById("avatar").innerHTML = content1 ;
    let prod = dataGlasses.find(sp=>sp.virtualImg === imgL);
    let content2 = `
        <h5 style="text-transform: uppercase;">
        ${prod.name}-
        <span style="text-transform: none;">${prod.brand}(${prod.color})</span></h5>
        <div>
        <p class="p-1" style="display:inline-block; background-color:red;">${prod.price}</p > 
        <span style="color:green;">Stocking</span> </div> 
        <p>${prod.description}</p>
    `
    document.getElementById("glassesInfo").innerHTML = content2 ;
    document.getElementById("glassesInfo").style.display = "block" ;
};

