import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .DashboardMobileCardsWrapper {
    width: calc(100% - 10px);
    padding: 0 10px;
  }
`;

export default staticStyles;
