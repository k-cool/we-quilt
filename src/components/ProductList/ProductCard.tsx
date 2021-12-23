import { ProductProps } from './products';
import WeQuiltColor from '../../constant/colors';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { priceToString } from '../../util/util';
interface props {
  data: ProductProps;
}

function ProductCard({ data }: props): JSX.Element {
  const { name, imageUrl, price, soldout } = data;
  return (
    <Link to="/1">
      <Container>
        <Image src={imageUrl} alt={name} />
        <Name name={name} info={soldout ? 'soldout' : priceToString(price)} />
      </Container>
    </Link>
  );
}

export default ProductCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% 5%;
`;

const Image = styled.img`
  &:hover {
    opacity: 0.8;
  }
  transition: all ease 0.5s;
`;

interface Content {
  name: string;
  info: string | number;
}

const Name = styled.h1<Content>`
  &:before {
    content: '${(props: Content) => props.name}';
  }
  ${Container}:hover & {
    ${(props: Content) => `&::before{
  content:"${props.info}"
  }`};
  }
  padding-top: 5%;
  color: ${WeQuiltColor.gray700};
  text-align: right;
  font-size: 0.85rem;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
`;
