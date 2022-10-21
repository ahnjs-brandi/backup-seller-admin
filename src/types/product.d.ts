declare namespace Product {
  interface Params {
    page: number;
    exhibition: boolean | null;
    sell: boolean | null;
    discount: boolean | null;
    category1: string | null;
    category2: string | null;
    searchText: string | null;
  }
	interface List {
    id: number;
    code: string;
    img: string;
    name: string;
    price: number;
    finalPrice: number;
    discountPercent: number;
    exhibition: boolean;
    sell: boolean;
    review: number;
    category1: string;
    category2: string;
    createdAt: string;
	}
  interface Detail {
    id: number;
    exhibition: boolean | null;
    sell: boolean | null;
    category1: string | null;
    category2: string | null;
    tax: boolean | null;
    delivery: string;
    name: string | null;
    image1: array | null;
    image2: array | null;
    image3: array | null;
    image4: array | null;
    image5: array | null;
  }
}
