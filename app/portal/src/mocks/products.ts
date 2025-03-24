export interface Product {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  isFeatured: boolean;
  isNew: boolean;
  isSale: boolean;
  rating?: number;
  reviewCount?: number;
  stock: number;
  colors?: string[];
  sizes?: string[];
}

export interface Carousel {
  title: string;
  imgSrc: string;
  description?: string;
  url?: string;
  actions?: Array<{
    label: string;
    url: string;
    variant?: "primary" | "secondary" | "outline";
  }>;
}

export interface CategoryContent {
  title: string;
  description: string;
  heroImage: string;
  carouselItems: Carousel[];
  featuredProducts: string[]; // Product IDs
}

export interface ProductContent {
  title: string;
  description: string;
  images: string[];
  details: {
    material?: string;
    careInstructions?: string[];
    features?: string[];
  };
  relatedProducts: string[]; // Product IDs
}

export const getCategoryContent = (slug: string): CategoryContent | null => {
  const categoryContent: Record<string, CategoryContent> = {
    mujer: {
      title: "Colección para Mujer",
      description:
        "Descubre las últimas tendencias en moda femenina con nuestra colección exclusiva para mujer.",
      heroImage:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000",
      carouselItems: [
        {
          title: "Nueva Colección Primavera-Verano",
          imgSrc:
            "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=2000",
          description: "Descubre las nuevas tendencias para esta temporada",
          actions: [
            {
              label: "Ver Colección",
              url: "/mujer/primavera-verano",
              variant: "primary",
            },
            {
              label: "Novedades",
              url: "/mujer?sort=newest",
              variant: "outline",
            },
          ],
        },
        {
          title: "Ofertas Especiales",
          imgSrc:
            "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2000",
          description: "Hasta 50% de descuento en selección de productos",
          actions: [
            {
              label: "Ver Ofertas",
              url: "/mujer?filter=sale",
              variant: "primary",
            },
          ],
        },
      ],
      featuredProducts: ["1", "3", "5", "7"],
    },
    hombre: {
      title: "Colección para Hombre",
      description:
        "Estilo y confort se unen en nuestra selección para hombre, diseñada para el hombre moderno.",
      heroImage:
        "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=2000",
      carouselItems: [
        {
          title: "Elegancia Casual",
          imgSrc:
            "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=2000",
          description: "Prendas versátiles para cualquier ocasión",
          actions: [
            {
              label: "Explorar",
              url: "/hombre/casual",
              variant: "primary",
            },
          ],
        },
        {
          title: "Colección Business",
          imgSrc:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000",
          description: "Estilo profesional para el día a día",
          actions: [
            {
              label: "Ver Colección",
              url: "/hombre/business",
              variant: "primary",
            },
          ],
        },
      ],
      featuredProducts: ["2", "4", "6", "8"],
    },
    deporte: {
      title: "Equipamiento Deportivo",
      description:
        "Maximiza tu rendimiento con nuestra línea de ropa y accesorios deportivos.",
      heroImage:
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2000",
      carouselItems: [
        {
          title: "Colección Running",
          imgSrc:
            "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2000",
          description: "Equipamiento especializado para corredores",
          actions: [
            {
              label: "Descubrir",
              url: "/deporte/running",
              variant: "primary",
            },
          ],
        },
        {
          title: "Fitness & Training",
          imgSrc:
            "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2000",
          description: "Todo lo que necesitas para tu entrenamiento diario",
          actions: [
            {
              label: "Explorar",
              url: "/deporte/fitness",
              variant: "primary",
            },
          ],
        },
      ],
      featuredProducts: ["9", "10", "11", "12"],
    },
  };

  return categoryContent[slug] || null;
};

export const getProductContent = (
  categorySlug: string,
  productSlug: string
): ProductContent | null => {
  // In a real application, you would fetch this from your CMS
  // We're simulating it with mock data for demonstration purposes
  return {
    title: `Producto detallado: ${productSlug}`,
    description:
      "Esta es una descripción detallada del producto que incluye sus características principales y beneficios para el cliente.",
    images: [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=2000",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000",
      "https://images.unsplash.com/photo-1578535073490-35f9c98ec8ed?q=80&w=2000",
    ],
    details: {
      material: "100% algodón sostenible",
      careInstructions: [
        "Lavar a máquina a 30°C",
        "No usar lejía",
        "Planchar a temperatura media",
        "No lavar en seco",
      ],
      features: [
        "Tejido transpirable",
        "Diseño ergonómico",
        "Disponible en varios colores",
        "Fabricado con materiales sostenibles",
      ],
    },
    relatedProducts: ["1", "2", "3", "4"].filter((id) => id !== productSlug),
  };
};

export const getProducts = (): Product[] => {
  return [
    {
      id: "1",
      name: "Vestido Floral Verano",
      slug: "vestido-floral-verano",
      categorySlug: "mujer",
      description:
        "Vestido ligero con estampado floral, perfecto para los días cálidos de verano.",
      price: 59.99,
      originalPrice: 79.99,
      images: [
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=2000",
        "https://images.unsplash.com/photo-1623580890503-836bcc1cc97a?q=80&w=2000",
      ],
      isFeatured: true,
      isNew: true,
      isSale: true,
      rating: 4.5,
      reviewCount: 28,
      stock: 15,
      colors: ["#FFD1DC", "#90EE90", "#87CEFA"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: "2",
      name: "Camisa Oxford Clásica",
      slug: "camisa-oxford-clasica",
      categorySlug: "hombre",
      description:
        "Camisa Oxford de algodón de alta calidad con un corte clásico y elegante.",
      price: 49.99,
      images: [
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2000",
        "https://images.unsplash.com/photo-1563630423918-b58f07336ac5?q=80&w=2000",
      ],
      isFeatured: true,
      isNew: false,
      isSale: false,
      rating: 4.8,
      reviewCount: 42,
      stock: 25,
      colors: ["#FFFFFF", "#87CEEB", "#FFB6C1"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: "3",
      name: "Jeans Skinny Fit",
      slug: "jeans-skinny-fit",
      categorySlug: "mujer",
      description:
        "Jeans skinny fit de cintura alta, perfectos para cualquier ocasión.",
      price: 45.99,
      originalPrice: 59.99,
      images: [
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=2000",
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=2000",
      ],
      isFeatured: false,
      isNew: false,
      isSale: true,
      rating: 4.3,
      reviewCount: 36,
      stock: 20,
      colors: ["#000080", "#000000", "#808080"],
      sizes: ["24", "26", "28", "30", "32"],
    },
    {
      id: "4",
      name: "Chaqueta de Cuero",
      slug: "chaqueta-de-cuero",
      categorySlug: "hombre",
      description:
        "Chaqueta de cuero genuino con forro interior cálido, ideal para el otoño e invierno.",
      price: 199.99,
      originalPrice: 249.99,
      images: [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2000",
        "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=2000",
      ],
      isFeatured: true,
      isNew: false,
      isSale: true,
      rating: 4.9,
      reviewCount: 52,
      stock: 10,
      colors: ["#8B4513", "#000000"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: "5",
      name: "Blusa de Seda",
      slug: "blusa-de-seda",
      categorySlug: "mujer",
      description: "Elegante blusa de seda con detalle de lazo en el cuello.",
      price: 89.99,
      images: [
        "https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=2000",
        "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=2000",
      ],
      isFeatured: true,
      isNew: true,
      isSale: false,
      rating: 4.6,
      reviewCount: 18,
      stock: 12,
      colors: ["#FFFFFF", "#FFC0CB", "#E6E6FA"],
      sizes: ["XS", "S", "M", "L"],
    },
    {
      id: "6",
      name: "Pantalones Chinos",
      slug: "pantalones-chinos",
      categorySlug: "hombre",
      description:
        "Pantalones chinos de algodón para un look casual pero elegante.",
      price: 69.99,
      images: [
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000",
        "https://images.unsplash.com/photo-1593030942430-c682b4f1bfb4?q=80&w=2000",
      ],
      isFeatured: false,
      isNew: true,
      isSale: false,
      rating: 4.4,
      reviewCount: 26,
      stock: 30,
      colors: ["#F5F5DC", "#808080", "#000080"],
      sizes: ["28", "30", "32", "34", "36", "38"],
    },
    {
      id: "7",
      name: "Sudadera Oversize",
      slug: "sudadera-oversize",
      categorySlug: "mujer",
      description:
        "Sudadera oversize de algodón orgánico con capucha para un look urbano y cómodo.",
      price: 49.99,
      images: [
        "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=2000",
        "https://images.unsplash.com/photo-1556307673-95e8c7a60f68?q=80&w=2000",
      ],
      isFeatured: false,
      isNew: true,
      isSale: false,
      rating: 4.7,
      reviewCount: 34,
      stock: 25,
      colors: ["#808080", "#000000", "#C71585"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: "8",
      name: "Zapatos Derby Cuero",
      slug: "zapatos-derby-cuero",
      categorySlug: "hombre",
      description:
        "Zapatos derby de cuero genuino con suela de goma para mayor comodidad.",
      price: 129.99,
      originalPrice: 149.99,
      images: [
        "https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=2000",
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=2000",
      ],
      isFeatured: true,
      isNew: false,
      isSale: true,
      rating: 4.8,
      reviewCount: 46,
      stock: 15,
      colors: ["#8B4513", "#000000"],
      sizes: ["40", "41", "42", "43", "44", "45"],
    },
    {
      id: "9",
      name: "Leggings Deportivos",
      slug: "leggings-deportivos",
      categorySlug: "deporte",
      description:
        "Leggings deportivos de alta compresión con bolsillos laterales.",
      price: 39.99,
      images: [
        "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=2000",
        "https://images.unsplash.com/photo-1578763460789-324a182f646a?q=80&w=2000",
      ],
      isFeatured: true,
      isNew: false,
      isSale: false,
      rating: 4.5,
      reviewCount: 58,
      stock: 40,
      colors: ["#000000", "#000080", "#8B008B"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: "10",
      name: "Camiseta Running",
      slug: "camiseta-running",
      categorySlug: "deporte",
      description:
        "Camiseta técnica para running con tejido transpirable y secado rápido.",
      price: 29.99,
      originalPrice: 34.99,
      images: [
        "https://images.unsplash.com/photo-1581612129334-551ccd2c6a8c?q=80&w=2000",
        "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=2000",
      ],
      isFeatured: false,
      isNew: false,
      isSale: true,
      rating: 4.4,
      reviewCount: 32,
      stock: 35,
      colors: ["#4169E1", "#000000", "#228B22"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: "11",
      name: "Zapatillas Entrenamiento",
      slug: "zapatillas-entrenamiento",
      categorySlug: "deporte",
      description:
        "Zapatillas multifuncionales para entrenamiento en gimnasio con suela amortiguada.",
      price: 89.99,
      originalPrice: 109.99,
      images: [
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2000",
        "https://images.unsplash.com/photo-1605408499391-6368c628ef42?q=80&w=2000",
      ],
      isFeatured: true,
      isNew: true,
      isSale: true,
      rating: 4.7,
      reviewCount: 64,
      stock: 20,
      colors: ["#000000", "#FF4500", "#4682B4"],
      sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    },
    {
      id: "12",
      name: "Chaqueta Impermeable",
      slug: "chaqueta-impermeable",
      categorySlug: "deporte",
      description:
        "Chaqueta impermeable y cortavientos perfecta para actividades al aire libre.",
      price: 79.99,
      images: [
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2000",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000",
      ],
      isFeatured: false,
      isNew: true,
      isSale: false,
      rating: 4.6,
      reviewCount: 28,
      stock: 18,
      colors: ["#000080", "#DC143C", "#2F4F4F"],
      sizes: ["S", "M", "L", "XL"],
    },
  ];
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return getProducts().filter(
    (product) => product.categorySlug === categorySlug
  );
};

export const getProductBySlug = (
  categorySlug: string,
  productSlug: string
): Product | null => {
  return (
    getProducts().find(
      (product) =>
        product.categorySlug === categorySlug && product.slug === productSlug
    ) || null
  );
};
