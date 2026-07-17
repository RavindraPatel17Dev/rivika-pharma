"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { NAV_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const getHref = (href: string) => {
    if (pathname === "/") {
      return href;
    }

    if (href.startsWith("#")) {
      return `/${href}`;
    }

    return href;
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">

        {/* LOGO */}

        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Rivika Pharma Home"
        >
          <Image
            src="/images/rivika-pharma-logo.jpg"
            alt="Rivika Pharma"
            width={168}
            height={56}
            priority
            className="h-11 w-auto object-contain sm:h-12"
          />
        </Link>

        {/* Desktop Menu */}

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={getHref(link.href)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                pathname === "/" && link.href.startsWith("#")
                  ? "text-foreground/80 hover:bg-secondary hover:text-primary"
                  : "text-foreground/80 hover:bg-secondary hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:9826440373"
            className="flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Phone className="size-4 text-accent-orange" />
            9826440373
          </a>

          <ButtonLink
            href={getHref("#contact")}
            className="rounded-full bg-accent-orange text-accent-foreground hover:bg-accent-orange/90"
          >
            Get in Touch
          </ButtonLink>
        </div>

        {/* Mobile Button */}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-full text-primary lg:hidden"
          aria-label={open ? "Close Menu" : "Open Menu"}
          aria-expanded={open}
        >
          {open ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={cn(
          "origin-top overflow-hidden border-t border-border bg-background transition-all duration-300 lg:hidden",
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
  {NAV_LINKS.map((link) => {
    const isActive =
      pathname === link.href ||
      (pathname === "/" && link.href.startsWith("#"));

    return (
      <Link
        key={link.href}
        href={getHref(link.href)}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-all",
          isActive
            ? "bg-primary text-white shadow-lg ring-2 ring-primary/30"
            : "text-foreground/80 hover:bg-secondary hover:text-primary"
        )}
      >
        {link.label}
      </Link>
    );
  })}
</nav>

{/* Mobile Menu */}
<nav className="flex flex-col gap-1 px-4 py-4 lg:hidden" aria-label="Mobile">
  {NAV_LINKS.map((link) => {
    const isActive =
      pathname === link.href ||
      (pathname === "/" && link.href.startsWith("#"));

    return (
      <Link
        key={link.href}
        href={getHref(link.href)}
        onClick={() => setOpen(false)}
        className={cn(
          "rounded-xl px-4 py-3 text-base font-medium transition-all",
          isActive
            ? "bg-primary text-white"
            : "text-foreground/80 hover:bg-secondary hover:text-primary"
        )}
      >
        {link.label}
      </Link>
    );
  })}

  <ButtonLink
    href={getHref("#contact")}
    onClick={() => setOpen(false)}
    className="mt-2 rounded-full bg-accent-orange text-accent-foreground hover:bg-accent-orange/90"
  >
    Get in Touch
  </ButtonLink>
</nav>
      </div>
    </header>
  );
}