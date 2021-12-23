import ProductList from '../../components/ProductList/ProductList';
import { ProductProps } from '@/components/ProductList/products';

function Main(): JSX.Element {
  const products: ProductProps[] = [
    {
      id: 1,
      name: '가방1',
      soldout: false,
      imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9300000003335]_20210310092146175.jpg',
      price: 100000,
    },
    {
      id: 2,
      name: '가방1',
      soldout: false,
      imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9300000003335]_20210310092146175.jpg',
      price: 100000,
    },
    {
      id: 3,
      name: '가방1',
      soldout: false,
      imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9300000003335]_20210310092146175.jpg',
      price: 100000,
    },
    {
      id: 4,
      name: '가방1',
      soldout: false,
      imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9300000003335]_20210310092146175.jpg',
      price: 100000,
    },
    {
      id: 5,
      name: '가방1',
      soldout: false,
      imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9300000003335]_20210310092146175.jpg',
      price: 100000,
    },
    {
      id: 6,
      name: '가방1',
      soldout: false,
      imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9300000003335]_20210310092146175.jpg',
      price: 100000,
    },
    {
      id: 7,
      name: '가방1',
      soldout: false,
      imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9300000003335]_20210310092146175.jpg',
      price: 100000,
    },
  ];
  return <ProductList data={products} />;
}

export default Main;
