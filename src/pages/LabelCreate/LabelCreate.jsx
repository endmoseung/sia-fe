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
    const width = currentX - pos[0];
    const height = currentY - pos[1];
    console.log(width, height);

    setCreatedLabel([
      ...createdLabel,
      {
        left: width > 0 ? pos[0] : pos[0] + width,
        top: height > 0 ? pos[1] : pos[1] + height,
        width: width > 0 ? width : -width,
        height: height > 0 ? height : -height,
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
      {createdLabel?.map((item, index) => (
        <div
          key={index}
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
