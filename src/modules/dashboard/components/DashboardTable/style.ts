import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .DashboardTable {
    display: flex;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    width: 100%;
    @include respond-to(sm) {
      background: transparent !important;
      border-radius: 0;
      box-shadow: none;
      display: block;
    }

    &__content {
      display: flex;
      flex-direction: column;
      width: inherit;
      @include respond-to(sm) {
        padding: 0 10px;
      }
    }
  }

  @media (max-height: 750px) {
    .DashboardTable {
      display: block;
    }
  }
`;

export default staticStyles;
