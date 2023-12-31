import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .TotalMarketsSize {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.014em;
    color: rgba(255, 255, 255, 0.8);

    @include respond-to(md) {
      padding-right: 0;
      margin-bottom: 10px;
    }
    @include respond-to(sm) {
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      padding: 15px 10px;
      width: calc(100% + 20px);
      position: relative;
      left: -10px;
    }
    p {
      font-size: 16px;
      margin-bottom: 6px;
      @include respond-to(xl) {
        font-size: 16px;
        margin-bottom: 3px;
      }
      @include respond-to(lg) {
        font-size: $medium;
      }
      @include respond-to(sm) {
        font-weight: 300;
        margin-bottom: 2px;
        font-size: $regular;
      }
    }
    h2 {
      white-space: nowrap;
      font-size: 19px;
      @include respond-to(xl) {
        font-size: 20px;
      }
      @include respond-to(md) {
        font-size: $regular;
      }
      @include respond-to(sm) {
        font-size: 30px;
      }
    }
  }
`;

export default staticStyles;
