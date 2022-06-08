import s from "./styles";
import { FunctionComponent, useEffect,  useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
const Footer: FunctionComponent = function () {
  return (
    <section {...s.footer}>
      <div {...s.contentLayer}>
        <div
          {...s.containerFooter}
          style={{ maxWidth: "1440px", width: "100%" }}
        >
          <div {...s.containerFooterBordered}>
            <div {...s.footerContent}>
              <div {...s.mediaBox}>
                <div style={{ cursor: "pointer" }}>
                  <Link passHref href="https://mobile.twitter.com/destoria_nft">
                    <a target="_blank" rel="noreferrer">
                    <Image
                      src="/media-TT.svg"
                      alt="Twitter"
                      width={27.98}
                      height={27.98}
                    />
                    </a>
                  </Link>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <Link passHref href="https://www.instagram.com/destorianft/">
                    <a target="_blank" rel="noreferrer">
                    <Image
                      src="/media-IG.svg"
                      alt="Twitter"
                      width={27.98}
                      height={27.98}
                    />
                    </a>
                  </Link>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <Link passHref href="https://discord.com/invite/Y7QSJcWqFH">
                    <a target="_blank" rel="noreferrer">
                    <Image
                      src="/media-DS.svg"
                      alt="Twitter"
                      width={27.98}
                      height={27.98}
                    />
                    </a>
                  </Link>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <Link passHref href="https://www.youtube.com/channel/UCt9yMDkZilkg7keYwOMZ_qA">
                    <a target="_blank" rel="noreferrer">
                    <Image
                      src="/media-YT.svg"
                      alt="Twitter"
                      width={27.98}
                      height={27.98}
                    />
                    </a>
                  </Link>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <Link passHref href="https://medium.com/@destorianft">
                    <a target="_blank" rel="noreferrer">
                    <Image
                      src="/media-MD.svg"
                      alt="Twitter"
                      width={27.98}
                      height={27.98}
                    />
                    </a>
                  </Link>
                </div>
              </div>
              <div {...s.destoria}>
                <Image
                  src="/media-footer-destoria.svg"
                  alt="Destoria"
                  width={168}
                  height={32}
                />
              </div>
              <div
                {...s.contactUs}
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us
              </div>
            </div>
            <div {...s.footerLower}>
              <div {...s.policyConditions}>
                <div {...s.footerLinks} onClick={() => (window.location.href = "/privacy")}>Privacy Policy</div>
                <div {...s.footerLinks} onClick={() => (window.location.href = "/tac")}>Terms & Conditions</div>
              </div>
              <div {...s.destoriaDescriptionInline}>
                © 2021 Destoria, LLC. All Rights Reserved.
              </div>
            </div>
            <div {...s.destoriaDescriptionOutline}>
              © 2021 Destoria, LLC. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
