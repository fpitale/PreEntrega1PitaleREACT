
 export const categories = [
    { id: "Alimentos para perros" , name: "Alimentos para perros" },
    { id: "Alimentos para gatos" , name: "Alimentos para gatos"}
  ];
  

export const items = [
    {id: 1, 
    name: "Astro selection adulto 15 +",
    categoryId: "Alimentos para perros" ,
    precio: 2048,
    description: "Recomendado para perro adulto./n Formulado para todos los tamaños",
    images: "/img//comida-perro/astro1.jpg"},


    {id: 2, 
        name: "Golden",
        categoryId: "Alimentos para perros" ,
        precio: 2048,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sunt. Enim aliquid minus alias. In, ipsum dolorem rerum animi, ut porro sapiente recusandae fugiat aspernatur suscipit modi, eum inventore officia!",
        images: "/img//comida-perro/golden5.jpg"} ,

        {id: 3, 
            name: "Nero",
            categoryId: "Alimentos para perros" ,
            precio: 2.048,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sunt. Enim aliquid minus alias. In, ipsum dolorem rerum animi, ut porro sapiente recusandae fugiat aspernatur suscipit modi, eum inventore officia!",
            images: "/img//comida-perro/Nero-Carne-Frente3.webp"} ,

            {id: 4, 
                name: "Large",
                categoryId: "Alimentos para perros" ,
                precio: 2.048,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sunt. Enim aliquid minus alias. In, ipsum dolorem rerum animi, ut porro sapiente recusandae fugiat aspernatur suscipit modi, eum inventore officia!",
                images: "/img//comida-perro/lagercach2.jpg"} ,

                {id: 5, 
                    name: "Tree Dog",
                    categoryId: "Alimentos para perros" ,
                    precio: 2.048,
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sunt. Enim aliquid minus alias. In, ipsum dolorem rerum animi, ut porro sapiente recusandae fugiat aspernatur suscipit modi, eum inventore officia!",
                    images: "/img//comida-perro/three-dogs-super-premium.webp"} ,

                 
                    {id: 6, 
                    name: "Three cats superpremium gatos castrados salmón",
                    categoryId: "Alimentos para gatos" ,
                    precio: 2420,
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sunt. Enim aliquid minus alias. In, ipsum dolorem rerum animi, ut porro sapiente recusandae fugiat aspernatur suscipit modi, eum inventore officia!",
                    images: "/img/comida-gato/three_cats_gato_cast_1_1.jpg"} ,


    {id: 7, 
        name: "Gran Plus gatito sabor pollo & arroz 10kg",
        categoryId:  "Alimentos para gatos" ,
        precio: 2050,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sunt. Enim aliquid minus alias. In, ipsum dolorem rerum animi, ut porro sapiente recusandae fugiat aspernatur suscipit modi, eum inventore officia!",
                images: "/img/comida-gato/granplus_gatitos_pollo_1.jpg"} ,


        {id: 8, 
            name: "Primogato Blend 10Kg + sobre Gran Plus 85g (Exclusivo online)",
            categoryId: "Alimentos para gatos" ,
            precio: 1990,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sunt. Enim aliquid minus alias. In, ipsum dolorem rerum animi, ut porro sapiente recusandae fugiat aspernatur suscipit modi, eum inventore officia!",
                images: "/img/comida-gato/primogato_gran.jpg"} ,

            {id: 9, 
                name: "Lager gato adulto 10Kg + 2 sobres Gran Plus de regalo",
                categoryId: "Alimentos para gatos" ,
                precio: 1202,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sunt. Enim aliquid minus alias. In, ipsum dolorem rerum animi, ut porro sapiente recusandae fugiat aspernatur suscipit modi, eum inventore officia!",
                images: "/img/comida-gato/lager_gato_promo.jpg"} ,

                {id: 10, 
                    name: "Frost Kitten",
                    categoryId:  "Alimentos para gatos" ,
                    precio: 2780,
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sunt. Enim aliquid minus alias. In, ipsum dolorem rerum animi, ut porro sapiente recusandae fugiat aspernatur suscipit modi, eum inventore officia!",
                images: "/img/comida-gato/kitten_3d_dir_1.png"} ,
 
]

export const getProducts = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(items);
      }, 2000);
    });
  };


  /* export const getProductsByCategory = (category) => {
    return new Promise((res) => {
      const productos = items.filter((product) => product.category === category);
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
  }; */


  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      const filteredProducts = items.filter(
        (item) => item.categoryId === categoryId
      );
      resolve(filteredProducts);
    });
  };


    
  export const getProduct = (id) => {
    return new Promise((resolve) => {
      const productoFiltrado = items.find((p) => p.id === parseInt(id));
      setTimeout(() => {
        resolve(productoFiltrado);
      }, 1000);
    });
  };

