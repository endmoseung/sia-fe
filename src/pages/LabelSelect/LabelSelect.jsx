import React, { useEffect } from "react";
import theme from "../../styles/theme";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { createdLabelArray, searchedPhoto } from "../../recoil/store";

const LabelSelect = () => {
  const currentPhoto = useRecoilValue(searchedPhoto);
  const [createdLabel, setCreatedLabel] = useRecoilState(createdLabelArray);

  useEffect(() => {
    const escKeyModalClose = (e) => {
      console.log(e.key);
      if (e.keyCode === 27 || e.keyCode === 8) {
        deleteThing();
      }
    };
    window.addEventListener("keydown", escKeyModalClose);
    return () => window.removeEventListener("keydown", escKeyModalClose);
  }, [createdLabel]);

  const deleteThing = () => {
    const deleteLabel = createdLabel.filter((item) =>
      item.isClicked ? "" : item
    );
    console.log(deleteLabel);
    setCreatedLabel(deleteLabel);
  };

  const dragStartFunction = (e) => {
    console.log("start", e);
  };

  const dragEndFunction = (e, index) => {
    let copyCreatedLabel = Array.from(createdLabel);
    console.log(copyCreatedLabel[index]);
    let changed = {
      ...copyCreatedLabel[index],
      left: e.clientX - createdLabel[index].width / 2, //커서한곳을 중간지점으로 이동시키기위해
      top: e.clientY - createdLabel[index].height / 2,
    };
    copyCreatedLabel[index] = changed;
    setCreatedLabel(copyCreatedLabel);
  };

  const clickFunction = (index) => {
    let copyCreatedLabel = Array.from(createdLabel);
    let changed = {
      ...copyCreatedLabel[index],
      isClicked: !copyCreatedLabel[index].isClicked ? true : "",
    };
    copyCreatedLabel[index] = changed;
    setCreatedLabel(copyCreatedLabel);
  };

  return (
    <Container>
      <ImgLayout src={currentPhoto}></ImgLayout>
      {createdLabel?.map((item, index) => (
        <Label
          draggable={true}
          onClick={() => clickFunction(index)}
          onDragStart={dragStartFunction}
          onDragEnd={(e) => dragEndFunction(e, index)}
          key={index}
          item={item}
          style={{
            width: item.width,
            height: item.height,
            position: "absolute",
            left: item.left,
            top: item.top,
            backgroundColor: `${theme.colors.LABEL_COLOR}`,
            zIndex: 9999,
            border: `3px solid ${theme.colors.LABEL_BORDER_COLOR}`,
          }}
        >
          {item.isClicked ? (
            <div>
              <TopLeftLabel left={-8} top={-8} className="size"></TopLeftLabel>
              <TopLabel left={item.width / 2 - 8} className="size"></TopLabel>
              <TopLabelLine left={item.width / 2 - 8}></TopLabelLine>
              <TopLabelRotate left={item.width / 2}></TopLabelRotate>
              <TopRightLabel
                left={item.width - 12}
                className="size"
              ></TopRightLabel>
              <RightLabel
                left={item.width - 12}
                top={item.height / 2 - 12}
                className="size"
              ></RightLabel>
              <BottomRightLabel
                left={item.width - 12}
                top={item.height - 12}
                className="size"
              ></BottomRightLabel>
              <BottomLabel
                left={item.width / 2 - 8}
                top={item.height - 12}
                className="size"
              ></BottomLabel>
              <BottomLeftLabel
                left={-8}
                top={item.height - 12}
                className="size"
              ></BottomLeftLabel>
              <LeftLabel
                left={-8}
                top={item.height / 2 - 12}
                className="size"
              ></LeftLabel>
            </div>
          ) : (
            ""
          )}
        </Label>
      ))}
    </Container>
  );
};

export default LabelSelect;

const Container = styled.div`
  z-index: -3;
`;

const ImgLayout = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

const Label = styled.div`
  .size {
    width: 16px;
    height: 16px;
    background-color: white;
    border: 3px solid ${({ theme }) => theme.colors.LABEL_BORDER_COLOR};
    position: absolute;
  }
`;

const TopLeftLabel = styled.div`
  ${(props) => `left: ${props.left}px;`};
  ${(props) => `top: ${props.top}px;`};
  cursor: nwse-resize;
`;

const TopLabel = styled.div`
  ${(props) => `left: ${props.left}px;`}
  top: ${(props) => props.top}-8px;
  cursor: ns-resize;
`;

const TopLabelLine = styled.div`
  width: 16px;
  height: 16px;
  border: 3px solid ${({ theme }) => theme.colors.LABEL_BORDER_COLOR};
  position: absolute;
  border-radius: 50%;
  ${(props) => `left: ${props.left}px;`}
  top:-48px;
`;

const TopLabelRotate = styled.div`
  width: 3px;
  height: 26px;
  position: absolute;
  ${(props) => `left: ${props.left}px;`}
  top:-32px;
  background-color: ${({ theme }) => theme.colors.LABEL_BORDER_COLOR};
`;

const TopRightLabel = styled.div`
  ${(props) => `left: ${props.left}px;`};
  top: ${(props) => props.top}-8px;
  cursor: nesw-resize;
`;

const RightLabel = styled.div`
  ${(props) => `left: ${props.left}px;`};
  ${(props) => `top: ${props.top}px;`};
  cursor: ew-resize;
`;

const BottomRightLabel = styled.div`
  ${(props) => `left: ${props.left}px;`};
  ${(props) => `top: ${props.top}px;`};
  cursor: nwse-resize;
`;

const BottomLabel = styled.div`
  ${(props) => `left: ${props.left}px;`};
  ${(props) => `top: ${props.top}px;`};
  cursor: ns-resize;
`;

const BottomLeftLabel = styled.div`
  ${(props) => `left: ${props.left}px;`};
  ${(props) => `top: ${props.top}px;`};
  cursor: nesw-resize;
`;

const LeftLabel = styled.div`
  ${(props) => `left: ${props.left}px;`};
  ${(props) => `top: ${props.top}px;`};
  cursor: ew-resize;
`;
