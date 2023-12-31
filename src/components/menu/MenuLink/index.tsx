import classNames from 'classnames';
import { useThemeContext } from '../../../libs/aave-ui-kit';

import goToTop from '../../../helpers/goToTop';
import Link from '../../basic/Link';

import staticStyles from './style';

interface MenuLinkProps {
  to: string;
  title: string;
  isActive: boolean;
  hidden?: boolean;
}

export default function MenuLink({ to, title, isActive, hidden }: MenuLinkProps) {
  const { currentTheme } = useThemeContext();

  return (
    <Link
      to={to}
      className={classNames('MenuLink ButtonLink', {
        MenuLink__active: isActive,
        MenuLink__hidden: hidden,
      })}
      onClick={() => goToTop()}
    >
      <div className="MenuLink__title">
        <p>
          <b>{title}</b> <strong>{title}</strong>
        </p>{' '}
        <i />
      </div>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true} global={true}>{`
        .MenuLink {
          color: ${currentTheme.white.hex} !important;
          .MenuLink__title {
            i {
              background: #8079cb !important;
            }
          }
        }
      `}</style>
    </Link>
  );
}
