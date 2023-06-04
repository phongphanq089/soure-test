
import LogoDark from "@assets/images/logos/logo-dark.svg";
import LogoLight from "@assets/images/logos/logo-white.svg";
import { selectorCustomizer } from "@slices/customizer";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const LogoIcon = () => {
  const customizer = useSelector( selectorCustomizer );
  return (
    <Link href="/" passHref >
      { customizer.activeMode === "dark" ? (
        <Image src={ LogoLight } alt={ LogoLight } />
      ) : (
        <Image src={ LogoDark } alt={ LogoDark } />
      ) }
    </Link>
  );
};

export default LogoIcon;
