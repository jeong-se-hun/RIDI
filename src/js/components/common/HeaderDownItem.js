const HeaderDownItem = ({ icon, iconClass }, isLogin) => `
  <li class="header-down__item">
    <a href="${isLogin ? '/mypage' : '/login'}" class="header-down__link ${icon}" aria-label="마이페이지 이동 링크">
      <i class="${iconClass}"></i>
    </a>
  </li>
`;

export default HeaderDownItem;
