import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getPhotos } from "../../apis/photo";
import { searchedPhoto } from "../../recoil/store";

const MainPage = () => {
  const setPhoto = useSetRecoilState(searchedPhoto);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const numberEvent = Number(e.target[0].value);
    console.log(numberEvent, e);
    if (!isNaN(numberEvent) && numberEvent > 0 && numberEvent <= 5000) {
      const photoData = async () => {
        const data = await getPhotos(numberEvent);
        setPhoto(data.url);
      };
      photoData();
      navigate("/labelselect");
    } else {
      alert("올바른 숫자를 입력해주세요");
      e.target.reset();
    }
  };
  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <PhotoSearch
          type={"text"}
          placeholder="1부터5000의 값을 입력해주세요!"
        ></PhotoSearch>
      </SearchForm>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchForm = styled.form``;

const PhotoSearch = styled.input`
  padding: 16px;
`;
