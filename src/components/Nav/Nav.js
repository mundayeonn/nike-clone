import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Drawer from './Drawer/Drawer';
import CATEGORY_DATA from './Drawer/CategoryData';
import styled from 'styled-components';
import { flexBox } from '../../styles/mixin';

const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [titleId, setTitleId] = useState(0);

  const onMouseEnter = id => {
    setIsDrawerOpen(true);
    setTitleId(id);
  };

  const onMouseLeave = () => {
    setIsDrawerOpen(false);
  };

  const navigate = useNavigate();

  const moveMain = e => {
    navigate('/Main');
  };

  return (
    <HeaderWrapper>
      <BrandHeader>
        <BrnadMenu>
          <BrandLink>
            <BrandIcon src="/images/Nav/jordan.png" alt="jordan_icon" />
            <BrandIcon src="/images/Nav/converse.png" alt="converse_icon" />
          </BrandLink>
          <UserMenu>
            <MenuSection>
              <MenuLink>매장찾기</MenuLink>
              <MenuSpan>｜</MenuSpan>
            </MenuSection>
            <MenuSection>
              <MenuLink>고객센터</MenuLink>
              <MenuSpan>｜</MenuSpan>
            </MenuSection>
            <MenuSection>
              <MenuLink>가입하기</MenuLink>
              <MenuSpan>｜</MenuSpan>
            </MenuSection>
            <MenuSection>
              <MenuLink>로그인</MenuLink>
            </MenuSection>
          </UserMenu>
        </BrnadMenu>
      </BrandHeader>
      <CategoryWrapper>
        <NavNikeLogo>
          <NikeLogo src="/images/Nav/nike.png" />
        </NavNikeLogo>
        <CategoryList>
          {CATEGORY_DATA.map(category => {
            return <Category key={category.id}>{category.name}</Category>;
          })}
        </CategoryList>
        <LightBox>
          <SearchWrapper>
            <SearchBar type="text" placeholder="검색" />
            <SearchIcon src="/images/Nav/magnifier.png" />
          </SearchWrapper>
          <HeaderButton>
            <WishList>
              <WishListIcon src="/images/Nav/heart.png" />
            </WishList>
            <CartList>
              <CartListIcon src="/images/Nav/cart.png" />
            </CartList>
          </HeaderButton>
        </LightBox>
      </CategoryWrapper>
    </HeaderWrapper>
  );
};

export default Nav;

const HeaderWrapper = styled.div``;

const BrandHeader = styled.div`
  padding: 0.521vw 2.083vw;
  width: 100%;
  background-color: #f5f5f5;
`;

const BrnadMenu = styled.div`
  ${flexBox('space-between', 'center', '')}
`;

const BrandLink = styled.a`
  ${flexBox('', 'center', '')}
  cursor: pointer;
`;

const BrandIcon = styled.img`
  margin: 0 0.821vw;
  width: 24px;
`;

const UserMenu = styled.div`
  display: flex;
`;

const MenuSection = styled.div`
  display: flex;
`;

const MenuLink = styled.a`
  margin: 0 0.465vw;
  font-size: 0.765vw;
  font-weight: bold;
  cursor: pointer;
`;

const MenuSpan = styled.span`
  font-size: 0.765vw;
  font-weight: bold;
`;

const CategoryWrapper = styled.div`
  ${flexBox('space-between', 'center', '')}
  padding: 0.688vw 2.083vw;
  width: 100%;
`;

const NavNikeLogo = styled.div`
  width: 4.906vw;
`;

const NikeLogo = styled.img`
  margin: 0 0.821vw;
  width: 100%;
  height: fit-content;
`;

const CategoryList = styled.ul`
  ${flexBox('', 'center', '')}
`;

const Category = styled.li`
  margin: 0 15px;
  cursor: pointer;
`;

const LightBox = styled.div`
  ${flexBox('', 'center', '')}
  width: auto;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 180px;
`;

const SearchBar = styled.input`
  display: flex;
  padding: 15px;
  border: none;
  border-radius: 30px;
  width: 100%;
  background: #f5f5f5;
  text-indent: 30px;
  cursor: text;
  ::placeholder {
    color: #b4b4b4;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 14px;
  left: 18px;
  width: 18px;
`;

const HeaderButton = styled.div`
  width: auto;
`;

const WishList = styled.a``;

const WishListIcon = styled.img`
  margin: 0 25px;
  width: 20px;
  cursor: pointer;
`;

const CartList = styled.a``;

const CartListIcon = styled.img`
  width: 20px;
  cursor: pointer;
`;
