import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { createdLabelArray, searchedPhoto } from "../../recoil/store";
import theme from "../../styles/theme";

const LabelCreate = () => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [isDraw, setIsDraw] = useState(false);
  const [pos, setPos] = useState([]);
  const [createdLabel, setCreatedLabel] = useRecoilState(createdLabelArray);
  const currentPhoto = useRecoilValue(searchedPhoto);

  useEffect(() => {
    const canvas = canvasRef.current;
    setCtx(canvas?.getContext("2d"));
  }, []);

  function drawStart(e) {
    setIsDraw(true);
    setPos([e.clientX, e.clientY]);
  }

  function drawEnd(e) {
    setIsDraw(false);
    let currentX = e.clientX;
    let currentY = e.clientY;
    setCreatedLabel([
      ...createdLabel,
      {
        left: pos[0],
        top: pos[1],
        width: currentX - pos[0],
        height: currentY - pos[1],
        id: createdLabel.length,
        isClicked: false,
      },
    ]);
  }

  function drawSquare(e) {
    if (!isDraw) return;
  }

  return (
    <Container>
      <ImgLayout src={currentPhoto}></ImgLayout>
      <canvas
        style={{
          width: "100%",
          height: "100%",
          borderBottom: "1px solid black",
          position: "absolute",
          zIndex: 1000,
        }}
        onMouseDown={drawStart}
        onMouseMove={drawSquare}
        onMouseUp={drawEnd}
      ></canvas>
      {createdLabel?.map((item) => (
        <div
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
        ></div>
      ))}
    </Container>
  );
};

export default LabelCreate;

const Container = styled.div`
  cursor: crosshair;
`;

const ImgLayout = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;
