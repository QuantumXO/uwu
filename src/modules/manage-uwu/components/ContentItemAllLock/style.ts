import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .ManageRadiant__content-all-lock {
    background: #120d48;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 2px 4px 0 #0000000f;
    padding: 20px 20px;

    h3 {
      font-weight: 400;
      color: white;
      margin-bottom: 20px;

      span {
        font-weight: 700;
      }
    }

    .button-container {
      display: flex;
      justify-content: center;

      button {
        width: 240px;
      }
    }
  }
`;

export default staticStyles;
