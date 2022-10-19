import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Select } from "../assets/Toolbar_select.svg";
import { ReactComponent as BoxCreate } from "../assets/Bounding_Box_Create.svg";
import labelModeArray from "../constant/Constant";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const [labelMode, setLabelMode] = useState([
    { title: "select", active: true },
    { title: "create", active: false },
  ]);
  const navigate = useNavigate();

  const handleMode = (modeIndex, currentMode) => {
    if (labelMode[modeIndex]?.active === false) {
      const currentMode = [...labelMode].map((v, i) => {
        const copyObject = { ...v };
        modeIndex === i
          ? (copyObject.active = true)
          : (copyObject.active = false);
        return copyObject;
      });
      setLabelMode(currentMode);
    }
    currentMode === "create"
      ? navigate("labelcreate")
      : navigate("labelselect");
  };
  return (
    <Container>
      <Header>Dataset Label</Header>
      <MainWrapper>
        <SideBar>
          {labelModeArray.map((mode, i) => {
            return (
              <Selected
                key={i}
                onClick={() => handleMode(i, mode)}
                labelMode={labelMode[i]}
              >
                {mode === "create" ? <LabelCreate /> : <LabelSelect />}
              </Selected>
            );
          })}
        </SideBar>
        <Main>
          <Outlet />
        </Main>
      </MainWrapper>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Header = styled.header`
  padding: 22px 0 15px 56px;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
  font-size: ${({ theme }) => theme.fontSize.SEMI_M};
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.LAYOUT_BORDER_COLOR};
`;

const MainWrapper = styled.div`
  height: 100%;
  display: flex;
`;

const SideBar = styled.div`
  height: 100%;
  width: 56px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.LAYOUT_BORDER_COLOR};
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
`;

const Selected = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.labelMode.active ? "White" : "transparent"};
  cursor: pointer;
  &:hover {
    background-color: white;
  }
  transition: all 150ms ease-in;
`;

const LabelSelect = styled(Select)``;

const LabelCreate = styled(BoxCreate)``;
