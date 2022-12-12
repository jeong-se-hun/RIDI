const CarouselButton = (datasLength, type) => {
  let leftButtonDisplay = 'inherit';
  let rightButtonDisplay = 'inherit';
  if (datasLength) {
    Math.floor(datasLength / type) < 1 ? (rightButtonDisplay = 'none') : (rightButtonDisplay = 'flex');
    leftButtonDisplay = 'none';
  }

  return `
  <div class="carousel__button">
    <button aria-label="좌측 이동 버튼" class="prev" style="display: ${leftButtonDisplay}">
      <i class="bx bx-chevron-left"></i>
    </button>
    <button aria-label="우측 이동 버튼" class="next" style="display: ${rightButtonDisplay}">
      <i class="bx bx-chevron-right"></i>
    </button>
  </div>  
`;
};

export default CarouselButton;
