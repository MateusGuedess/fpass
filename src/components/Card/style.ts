import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  height: 300px;
  padding: 10px;
  margin: 20px;
  background-color: #fff;
  border-radius: 5px;

  .card__image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .card__title {
    font-size: 18px;
    color: #000;
  }

  .card__description {
    font-size: 12px;
    color: #000;
    text-align: justify;
  }
`;
