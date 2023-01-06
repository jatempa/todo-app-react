import styled from 'styled-components';

const ItemContainer = styled.ul`
  padding: 0px;

  & li {
    padding: 0px;
    text-align: left;
    list-style-position: inside;
    list-style-type: decimal;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

const ItemList = (props) => {
  const { items } = props;
  return (
    <ItemContainer>
      {items.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ItemContainer>
  );
};

export default ItemList;
