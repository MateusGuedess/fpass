import styled from "styled-components";

export const Container = styled.section`
  width: 1058px;
  height: 100%;

  display: flex;
  align-items: center;
  position: relative;

  .home__description {
    flex: 1;
    display: flex;
    justify-content: left;
    flex-direction: column;

    .home__title {
      font-size: 48px;
      width: 350px;
      padding: 0;
      margin: 0;
      text-align: left;
    }

    .home__text {
      font-size: 16px;
      width: 350px;
      padding: 0;
      margin: 15px 0 0 0;
      text-align: justify;
    }

    .home__searchButton {
      width: 150px;
      height: 40px;
      margin-top: 15px;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      color: #fff;
      background-color: #ee0000;
      transition: 0.5s;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 2px 10px 0px #ee0000;
      }
    }
  }
`;
