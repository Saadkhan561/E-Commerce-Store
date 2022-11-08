import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';
import Search from './search';

const Layout = ({ categories }) => {
  const renderCategories = () => {
    return categories.data.map((c) => {
      return (
        <ul key={c.id}>
          <Link to={`/categories/${c.id}`}>{c.title}</Link>
        </ul>
      );
    });
  };

  return (
    <div className='App'>
      <Header>
        <HeaderTitle>
          <HeaderH1>E-COMMMERCE STORE</HeaderH1>
        </HeaderTitle>
        <Search />
        <Icon>
          <Home>
            <Link to={`/home`}>
              <img src='/assets/home_icon.png' alt='' height={40} width={40} />
            </Link>
          </Home>
          <ImgDiv>
            <Link to={`/basket`}>
              <Img
                src='/assets/cart2.png.png'
                alt=''
                height='40px'
                width='40px'
              ></Img>
            </Link>
          </ImgDiv>
        </Icon>
      </Header>

      <section>
        <nav>
          <div>{categories.errorMessage}</div>
          <ul>{renderCategories()}</ul>
        </nav>
        <Main>
          <Outlet />
        </Main>
      </section>
      <footer>
        <Link to='/'>Home</Link>
      </footer>
    </div>
  );
};

export default Layout;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  justify-content: space-between;
`;

const HeaderTitle = styled.div`
  margin-left: 30px;
`;

const HeaderH1 = styled.h1`
  color: white;
`;

const Main = styled.div`
  width: 100%;
`;

const Icon = styled.div`
  display: grid;
  grid-template-columns: 80px 80px;
`;

const Home = styled.div`
  margin-right: 35px;
  margin-top: 20px;
`;

const ImgDiv = styled.div`
  margin-right: 35px;
`;

const Img = styled.img`
  margin-top: 20px;
`;
