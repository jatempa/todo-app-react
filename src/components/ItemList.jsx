import styled from 'styled-components';
import Item from './Item';
import Mark from './Mark';

const ItemContainer = styled.ul`
  padding: 0px;

  & li {
    padding: 0px;
    text-align: left;
    list-style-position: inside;
    list-style-type: decimal;
    font-size: 1.5rem;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ItemList = (props) => {
  const { items, updateStatus } = props;

  return (
    <ItemContainer>
      {items.map((item) => {
        return (
          <li className={'item-container'} key={item.id}>
            <Item item={item} />
            <Mark item={item} updateStatus={updateStatus} />
          </li>
        );
      })}
    </ItemContainer>
  );
};

export default ItemList;
