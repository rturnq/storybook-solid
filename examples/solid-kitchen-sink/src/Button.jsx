import { splitProps } from 'solid-js';

/**
 * The button component will render a clickable button
 */
const Button = (props) => {
  const [, rest] = splitProps(props, ['href', 'children']);

  return props.href ? (
    <a class="button" href={props.href} {...rest}>{props.children}</a>
  ) : (
    <button class="button" href={props.href} {...rest}>{props.children}</button>
  );
};

Button.defaultProps = {
  href: undefined,
};

export default Button;
