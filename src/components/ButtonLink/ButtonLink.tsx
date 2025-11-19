interface ButtonLinkProps {
  label: string;
  handleClick?: () => void;
  href?: string;
}

export const ButtonLink = ({ label, href }: ButtonLinkProps) => {
  return (
    <a
      className="button-links"
      href={href}
    >
      {label}
    </a>
  );
};
