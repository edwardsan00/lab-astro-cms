export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  featured: boolean;
}

export const getCategories = (): { categories: Category[] } => {
  return {
    categories: [
      {
        id: "1",
        name: "Mujer",
        slug: "mujer",
        description: "Descubre la última moda y tendencias para mujer",
        imageUrl:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000",
        featured: true,
      },
      {
        id: "2",
        name: "Hombre",
        slug: "hombre",
        description:
          "Encuentra tu estilo perfecto en nuestra colección para hombre",
        imageUrl:
          "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2000",
        featured: true,
      },
      {
        id: "3",
        name: "Deporte",
        slug: "deporte",
        description: "Equipamiento y ropa deportiva para un rendimiento óptimo",
        imageUrl:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000",
        featured: true,
      },
      {
        id: "4",
        name: "Accesorios",
        slug: "accesorios",
        description:
          "Complementa tu estilo con nuestra colección de accesorios",
        imageUrl:
          "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=2000",
        featured: false,
      },
      {
        id: "5",
        name: "Hogar",
        slug: "hogar",
        description: "Transforma tu hogar con nuestra selección de productos",
        imageUrl:
          "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2000",
        featured: false,
      },
    ],
  };
};
