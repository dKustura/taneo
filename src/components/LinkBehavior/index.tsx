import { forwardRef } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

// Component used to configure MUI Link component to use React-Router Link component
// https://mui.com/material-ui/guides/routing/#global-theme-link

const LinkBehavior = forwardRef<any, Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }>(
  (props, ref) => {
    const { href, ...other } = props;
    // Map href (MUI) -> to (react-router)
    return <RouterLink ref={ref} to={href} {...other} />;
  }
);

export default LinkBehavior;
