import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .Table {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    h3 {
      font-size: $large;
      font-weight: 600;
      margin-bottom: 15px;
    }

    .GradientLine {
      margin: 10px 0;
    }

    &__header {
      display: flex;
      justify-content: space-between;
    }

    &__header-column {
      font-size: $medium;
      font-weight: 600;
      min-width: 50%;
    }

    &__body {
    }

    &__row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
    }

    &__column {
      font-size: $medium;
      min-width: 50%;
    }
    .Table__header {
      margin-top: 15px;
    }
  }
`;

export default staticStyles;
