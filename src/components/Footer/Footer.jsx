import React from "react";
import { IconGooglemaps } from "../Icons";

export default function Footer() {
  return (
    <footer
      id="Contact"
      className="gap- relative bottom-0 mb-3 mt-5 flex w-full flex-col items-center justify-center"
    >
      <a
        className="my-3 flex w-40 flex-col items-center justify-items-start gap-2 duration-300 hover:scale-150 hover:font-bold"
        href="https://maps.app.goo.gl/XHBhjb3f411gNs7m9"
        target="_blank"
      >
        <IconGooglemaps className="text-3xl" />
        <span className="hover:font-bold">Brandsen 3294</span>
      </a>

      <small>Copyright © 2024 DonFierroDevs. All Rights Reserved</small>
    </footer>
  );
}
