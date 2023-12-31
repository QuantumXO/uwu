import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .Row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: $regular;
    @include respond-to(xl) {
      font-size: $medium;
    }
    @include respond-to(lg) {
      font-size: $small;
    }
    @include respond-to(md) {
      font-size: $medium;
    }
    @include respond-to(sm) {
      font-size: $regular;
    }

    &__column {
      display: block;
      text-align: center;
      .Row__title-inner {
        margin-bottom: 3px;
      }
      .Row__title {
        padding-right: 0;
      }
      .Row__content {
        display: block;
      }
    }

    &__title-inner {
      color: rgba(255, 255, 255, 0.8);
      font-size: $regular;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    &__content {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
    }
    &__title {
      font-weight: 400;
      line-height: 20px;
      padding-right: 10px;
      color: rgba(255, 255, 255, 0.8);
    }
    &__subtitle {
      font-size: $small !important;
      @include respond-to(xl) {
        font-size: $extraSmall !important;
      }
    }

    &__normal {
      .Row__title-inner {
        font-weight: 400;
      }
    }

    &__light {
      .Row__title-inner {
        font-weight: 300;
      }
    }

    &__withMargin {
      margin-bottom: 12px;
      @include respond-to(lg) {
        margin-bottom: 10px;
      }
      @include respond-to(md) {
        margin-bottom: 15px;
      }
    }
  }
`;

export default staticStyles;
