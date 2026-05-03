import { useEffect, useState } from "react";
import Logo from "../components/logo";
import {
  RiMenuLine,
  RiCloseLine,
  RiArrowRightSLine,
  RiSearchLine,
  RiBellLine,
  RiSmartphoneLine,
  RiToolsLine,
  RiFileListLine,
  RiMapPinLine,
  RiCalendarView,
  RiShieldCheckLine,
  RiRefreshLine,
  RiCarLine,
  RiTruckLine,
  RiLineChartLine,
  RiArrowRightLine,
} from "@remixicon/react";

export default function Index() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [accountModal, setAccountModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") {
        setMobileMenu(false);
        setAccountModal(false);
        setLoginModal(false);
      }
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  return (
    <div className="min-h-screen bg-background text-black">
      {/* Announcement */}
      <div className="bg-primary py-2.5">
        <p className="text-center text-white text-sm">
          Fresh wholesale inventory added weekly &bull; Dealer access coming
          online &bull; Transportation available
        </p>
      </div>

      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-[68px]">
            <a href="#" className="hover:no-underline">
              <Logo />
            </a>

            <nav className="hidden md:flex items-center gap-7">
              {[
                ["Inventory", "#inventory"],
                ["Dealer Portal", "#dealer-portal"],
                ["Employee Tools", "#employee-tools"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-foreground hover:text-black hover:no-underline transition-colors text-sm"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setLoginModal(true)}
                className="px-3 py-2 rounded-sm border border-muted text-foreground hover:bg-subtle transition-colors text-sm"
              >
                Dealer Login
              </button>
              <a
                href="/login"
                className="flex items-center gap-1 px-3 py-2 rounded-sm bg-primary text-black hover:bg-primary/80 hover:no-underline transition-colors text-sm"
              >
                Employee Login
                <RiArrowRightSLine className="w-4 h-4" />
              </a>
            </div>

            <button
              className="md:hidden p-2 rounded-sm border border-muted text-foreground"
              onClick={() => setMobileMenu((v) => !v)}
            >
              {mobileMenu ? (
                <RiCloseLine className="w-5 h-5" />
              ) : (
                <RiMenuLine className="w-5 h-5" />
              )}
            </button>
          </div>

          {mobileMenu && (
            <div className="md:hidden border-t border-muted py-4 flex flex-col gap-2">
              {[
                ["Inventory", "#inventory"],
                ["Dealer Portal", "#dealer-portal"],
                ["Employee Tools", "#employee-tools"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileMenu(false)}
                  className="px-3 py-2.5 rounded-sm border border-muted text-foreground hover:bg-subtle hover:no-underline text-sm"
                >
                  {label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenu(false);
                  setLoginModal(true);
                }}
                className="px-3 py-2.5 rounded-sm border border-muted text-foreground text-left hover:bg-subtle text-sm"
              >
                Dealer Login
              </button>
              <a
                href="/login"
                className="px-3 py-2.5 rounded-sm bg-primary text-black text-center hover:bg-primary/80 hover:no-underline text-sm"
              >
                Employee Login
              </a>
              <button
                onClick={() => {
                  setMobileMenu(false);
                  setAccountModal(true);
                }}
                className="px-3 py-2.5 rounded-sm border border-primary text-primary text-left text-sm"
              >
                Open Account
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 border border-primary/20 text-primary text-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Wholesale inventory &bull; Dealer-first platform
          </div>

          <h1 className="text-black max-w-3xl mb-6">
            Skip the auction fees. Buy direct from Copper State.
          </h1>

          <p className="text-lg max-w-xl mb-10">
            Built for registered dealers and internal teams — manage inventory,
            status workflow, and wholesale purchasing all in one place.
          </p>

          <div className="flex flex-wrap gap-3 mb-24">
            <a
              href="#inventory"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-sm bg-primary text-black hover:bg-primary/80 hover:no-underline transition-colors text-sm"
            >
              View Inventory
              <RiArrowRightSLine className="w-4 h-4" />
            </a>
            <button
              onClick={() => setAccountModal(true)}
              className="px-4 py-2.5 rounded-sm border border-muted text-foreground hover:bg-subtle transition-colors text-sm"
            >
              Create Account
            </button>
            <a
              href="/login"
              className="px-4 py-2.5 rounded-sm border border-muted text-foreground hover:bg-subtle hover:no-underline transition-colors text-sm"
            >
              Employee Login
            </a>
          </div>

          {/* Feature tiles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-muted pt-12">
            {[
              [
                RiShieldCheckLine,
                "7-day confidence",
                "Early purchase guarantee on all units.",
              ],
              [
                RiRefreshLine,
                "Weekly inventory",
                "Fresh uploads every week, no gaps.",
              ],
              [
                RiCarLine,
                "Retail-ready units",
                "Full condition and pricing clarity.",
              ],
              [
                RiTruckLine,
                "Transport available",
                "Delivery support ready nationwide.",
              ],
            ].map(([Icon, title, desc]) => (
              <div key={title} className="flex flex-col gap-3 py-2">
                <Icon className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-black text-sm font-medium mb-0.5">
                    {title}
                  </p>
                  <p className="text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Platform Overview ─── */}
      <section id="inventory" className="py-24 border-t border-muted bg-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-primary text-xs uppercase tracking-widest mb-3">
              Platform
            </p>
            <h2 className="text-black mb-5">Built for the whole workflow.</h2>
            <p className="max-w-lg">
              A unified interface for browsing inventory, submitting tickets,
              and managing the full wholesale workflow from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              [
                RiSearchLine,
                "Search & Filter",
                "VIN lookup, status tags, and smart filters across your entire inventory.",
              ],
              [
                RiBellLine,
                "Announcements",
                "Weekly sale dates, alerts, and priority updates for registered dealers.",
              ],
              [
                RiSmartphoneLine,
                "Mobile Ready",
                "Fully responsive — works seamlessly on any screen or device.",
              ],
            ].map(([Icon, title, desc]) => (
              <div
                key={title}
                className="p-6 border border-muted rounded-md bg-background"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-sm bg-primary/10 mb-6">
                  <Icon className="w-[18px] h-[18px] text-primary" />
                </div>
                <h3 className="text-black mb-2">{title}</h3>
                <p className="text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Dealer Portal ─── */}
      <section id="dealer-portal" className="py-24 border-t border-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-primary text-xs uppercase tracking-widest mb-3">
              Dealer Portal
            </p>
            <h2 className="text-black mb-5">
              Everything a dealer needs, in one place.
            </h2>
            <p className="max-w-lg">
              Browse, purchase, and track units from acquisition to delivery
              inside a dedicated dealer workspace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Actions */}
            <div className="p-6 border border-muted rounded-md bg-background">
              <h3 className="text-black mb-5">Dealer Actions</h3>
              <div className="flex flex-col divide-y divide-muted border border-muted rounded-md overflow-hidden">
                {[
                  ["Inventory", "Browse available units"],
                  ["Purchase", "Checkout flow"],
                  ["Buyer Portal", "Payments & invoices"],
                  ["Title Status", "Real-time tracking"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between px-4 py-3.5 bg-background hover:bg-subtle transition-colors cursor-pointer group"
                  >
                    <span className="text-sm text-black">{label}</span>
                    <div className="flex items-center gap-1.5 text-foreground">
                      <span className="text-sm">{value}</span>
                      <RiArrowRightSLine className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="p-6 border border-muted rounded-md bg-background">
              <h3 className="text-black mb-5">Live Metrics</h3>
              <div className="grid grid-cols-3 gap-4 h-[calc(100%-52px)]">
                {[
                  [RiCarLine, "148", "Units"],
                  [RiFileListLine, "23", "Titles"],
                  [RiLineChartLine, "12", "Sales"],
                ].map(([Icon, value, label]) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center border border-muted rounded-md py-8 gap-2"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-4xl font-bold text-primary leading-none">
                      {value}
                    </span>
                    <span className="text-xs text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Employee Tools ─── */}
      <section
        id="employee-tools"
        className="py-24 border-t border-muted bg-subtle"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-primary text-xs uppercase tracking-widest mb-3">
              Employee Tools
            </p>
            <h2 className="text-black mb-5">
              Internal operations, simplified.
            </h2>
            <p className="max-w-lg">
              Workflow modules built for inspectors, mechanics, and managers to
              keep operations moving without friction.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              [
                RiToolsLine,
                "Mechanical Status",
                "Track repair and inspection states across all vehicles.",
              ],
              [
                RiFileListLine,
                "Tickets",
                "Create and manage service and inspection tickets.",
              ],
              [
                RiMapPinLine,
                "Locations",
                "Monitor vehicle lot placement and movement.",
              ],
              [
                RiCalendarView,
                "Sale Workflow",
                "Coordinate sale dates, readiness, and sign-off.",
              ],
            ].map(([Icon, title, desc]) => (
              <div
                key={title}
                className="p-6 border border-muted rounded-md bg-background"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-sm bg-primary/10 mb-6">
                  <Icon className="w-[18px] h-[18px] text-primary" />
                </div>
                <h3 className="text-black mb-2">{title}</h3>
                <p className="text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="contact" className="py-24 border-t border-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-10">
            <div>
              <p className="text-primary text-xs uppercase tracking-widest mb-3">
                Get started
              </p>
              <h2 className="text-black mb-5">Ready to get started?</h2>
              <p className="max-w-lg">
                Register as a dealer to access wholesale inventory, or log in as
                an employee to manage operations, tickets, and status workflow.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                onClick={() => setAccountModal(true)}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-sm bg-primary text-black hover:bg-primary/80 transition-colors text-sm"
              >
                Open Account
                <RiArrowRightLine className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLoginModal(true)}
                className="px-4 py-2.5 rounded-sm border border-muted text-foreground hover:bg-subtle transition-colors text-sm"
              >
                Dealer Login
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-muted py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between gap-4">
          <p className="text-sm text-foreground">
            © 2026 Copper State Auto Wholesale
          </p>
          <p className="text-sm text-foreground">
            Dealer &bull; Inventory &bull; Employee Tools
          </p>
        </div>
      </footer>

      {/* ─── Account Modal ─── */}
      {accountModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setAccountModal(false)}
          />
          <div className="relative z-10 w-full max-w-md bg-background rounded-md shadow-lg border border-muted flex flex-col">
            <div className="flex items-start justify-between px-5 py-4 border-b border-muted">
              <div>
                <h3 className="text-black">Open Account</h3>
                <p className="text-sm mt-0.5">Dealer registration</p>
              </div>
              <button
                onClick={() => setAccountModal(false)}
                className="p-1 rounded-sm hover:bg-subtle text-foreground"
              >
                <RiCloseLine className="w-5 h-5" />
              </button>
            </div>
            <div className="px-5 py-5 flex flex-col gap-3">
              {[
                { placeholder: "Business name", type: "text" },
                { placeholder: "Contact name", type: "text" },
                { placeholder: "Email address", type: "email" },
                { placeholder: "License ID", type: "text" },
              ].map(({ placeholder, type }) => (
                <input
                  key={placeholder}
                  type={type}
                  placeholder={placeholder}
                  className="w-full px-3 py-2.5 border border-muted rounded-sm text-sm placeholder:text-foreground focus:outline-none focus:border-primary bg-background"
                />
              ))}
              <select className="w-full px-3 py-2.5 border border-muted rounded-sm text-sm text-foreground focus:outline-none focus:border-primary bg-background">
                <option>Dealer</option>
                <option>Buyer</option>
                <option>Broker</option>
              </select>
              <button className="flex items-center justify-center gap-1.5 w-full px-3 py-2.5 rounded-sm bg-primary text-black text-sm hover:bg-primary/80 transition-colors mt-1">
                Submit
                <RiArrowRightSLine className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Login Modal ─── */}
      {loginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setLoginModal(false)}
          />
          <div className="relative z-10 w-full max-w-sm bg-background rounded-md shadow-lg border border-muted flex flex-col">
            <div className="flex items-start justify-between px-5 py-4 border-b border-muted">
              <div>
                <h3 className="text-black">Dealer Login</h3>
                <p className="text-sm mt-0.5">Access your dealer account</p>
              </div>
              <button
                onClick={() => setLoginModal(false)}
                className="p-1 rounded-sm hover:bg-subtle text-foreground"
              >
                <RiCloseLine className="w-5 h-5" />
              </button>
            </div>
            <div className="px-5 py-5 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2.5 border border-muted rounded-sm text-sm placeholder:text-foreground focus:outline-none focus:border-primary bg-background"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2.5 border border-muted rounded-sm text-sm placeholder:text-foreground focus:outline-none focus:border-primary bg-background"
              />
              <button className="flex items-center justify-center gap-1.5 w-full px-3 py-2.5 rounded-sm bg-primary text-black text-sm hover:bg-primary/80 transition-colors mt-1">
                Login
                <RiArrowRightSLine className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
