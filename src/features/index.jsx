import { useEffect, useState } from "react";
import Logo from "../components/logo";

export default function Index() {
  const [desktopMenu, setDesktopMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [accountModal, setAccountModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") {
        setDesktopMenu(false);
        setMobileMenu(false);
        setAccountModal(false);
        setLoginModal(false);
      }
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  return (
    <div className="min-h-screen text-[#171717] bg-gradient-to-b from-white via-[#faf8f6] to-white">
      {/* Announcement */}
      <div className="bg-primary text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-3 justify-center text-center">
          <span>Announcement:</span>
          <span>
            Fresh wholesale inventory added weekly • Dealer access coming online
            • Transportation available
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-[78px]">
            {/* Brand */}
            <a href="#" className="flex items-center gap-3">
              <Logo />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-2 items-center">
              <a
                href="#inventory"
                className="px-4 py-2 rounded-sm border border-muted"
              >
                Inventory
              </a>
              <a
                href="#dealer-portal"
                className="px-4 py-2 rounded-sm border border-muted"
              >
                Dealer Portal
              </a>
              <a
                href="#employee-tools"
                className="px-4 py-2 rounded-sm border border-muted"
              >
                Employee Tools
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-sm border border-muted"
              >
                Contact Us
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 relative">
              <button
                onClick={() => setLoginModal(true)}
                className="px-4 py-2 rounded-full border border-black/10 hidden md:inline-block"
              >
                Login
              </button>

              {/* Menu */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setDesktopMenu((v) => !v)}
                  className="px-4 py-2 rounded-full border border-black/10"
                >
                  Menu ☰
                </button>

                {desktopMenu && (
                  <div className="absolute right-0 mt-3 w-72 bg-white border border-black/10 rounded-2xl shadow-xl p-2">
                    <button
                      onClick={() => setLoginModal(true)}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-orange-50 flex justify-between"
                    >
                      Dealer Login <span>→</span>
                    </button>
                    <a
                      href="/login"
                      className="block px-4 py-3 hover:bg-orange-50 rounded-xl"
                    >
                      Employee Login →
                    </a>
                    <button
                      onClick={() => setAccountModal(true)}
                      className="w-full text-left px-4 py-3 hover:bg-orange-50 rounded-xl flex justify-between"
                    >
                      Open an Account <span>→</span>
                    </button>
                    <a
                      href="#inventory"
                      className="block px-4 py-3 hover:bg-orange-50 rounded-xl"
                    >
                      Find Inventory →
                    </a>
                    <a
                      href="#contact"
                      className="block px-4 py-3 hover:bg-orange-50 rounded-xl"
                    >
                      Contact Us →
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile */}
              <button
                className="md:hidden px-4 py-2 rounded-full border border-black/10"
                onClick={() => setMobileMenu((v) => !v)}
              >
                ☰
              </button>
            </div>
          </div>

          {mobileMenu && (
            <div className="md:hidden border-t border-black/10 py-3 space-y-2">
              <a className="block p-3 border rounded-xl" href="#inventory">
                Inventory
              </a>
              <a className="block p-3 border rounded-xl" href="#dealer-portal">
                Dealer Portal
              </a>
              <a className="block p-3 border rounded-xl" href="#employee-tools">
                Employee Tools
              </a>
              <a className="block p-3 border rounded-xl" href="#contact">
                Contact
              </a>
              <button
                onClick={() => setLoginModal(true)}
                className="block p-3 border rounded-xl w-full text-left"
              >
                Dealer Login
              </button>
              <a className="block p-3 border rounded-xl" href="/login">
                Employee Login
              </a>
              <button
                onClick={() => setAccountModal(true)}
                className="block p-3 border rounded-xl w-full text-left"
              >
                Open Account
              </button>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8">
          {/* Left */}
          <div className="p-8 rounded-3xl border shadow-lg bg-white">
            <div className="inline-block px-4 py-2 rounded-full bg-orange-100 border text-sm mb-4">
              Wholesale inventory • Dealer-first platform
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Skip the auction fees. Buy direct from Copper State.
            </h1>

            <p className="text-gray-500 mb-6">
              Built for registered dealers and internal teams, this platform
              manages inventory, status workflow, and wholesale purchasing.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="#inventory"
                className="px-5 py-3 rounded-full bg-orange-600 text-white"
              >
                View Inventory
              </a>
              <button
                onClick={() => setAccountModal(true)}
                className="px-5 py-3 rounded-full border"
              >
                Create Account
              </button>
              <a href="/login" className="px-5 py-3 rounded-full border">
                Employee Login
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="p-4 border rounded-xl bg-orange-50">
                <strong className="block text-black">7-day confidence</strong>
                Early guarantee placeholder
              </div>
              <div className="p-4 border rounded-xl bg-orange-50">
                <strong className="block text-black">Weekly inventory</strong>
                Fresh uploads every week
              </div>
              <div className="p-4 border rounded-xl bg-orange-50">
                <strong className="block text-black">Retail-ready units</strong>
                Condition + pricing clarity
              </div>
              <div className="p-4 border rounded-xl bg-orange-50">
                <strong className="block text-black">
                  Transport available
                </strong>
                Delivery support ready
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="p-6 rounded-3xl border shadow-lg bg-white">
            <div className="flex justify-between text-sm text-gray-500 mb-4">
              <span>● ● ●</span>
              <span>Inventory preview</span>
            </div>

            <div className="p-4 border rounded-2xl bg-orange-50 space-y-4">
              <div className="flex justify-between">
                <span className="px-3 py-1 border rounded-full text-sm">
                  Search inventory
                </span>
                <span className="px-3 py-1 border rounded-full text-sm bg-green-50">
                  Live ready
                </span>
              </div>

              <div className="p-3 border rounded-xl text-gray-500">
                Search by VIN, model, stock number...
              </div>

              <div className="border rounded-2xl p-4 space-y-3 bg-white">
                <div className="flex justify-between">
                  <div>
                    <div className="font-bold">2020 Honda Passport</div>
                    <div className="text-xs text-gray-500">Stock #0120300</div>
                  </div>
                  <span className="px-3 py-1 border rounded-full text-sm">
                    Shop
                  </span>
                </div>

                <div className="h-40 rounded-xl bg-gradient-to-br from-orange-200 to-black/80" />

                <div className="flex justify-between text-xs text-gray-500">
                  <span>Location: Bayon 8</span>
                  <span>Sale: 04/26/26</span>
                </div>

                <div className="flex gap-2">
                  <button className="px-3 py-2 bg-orange-600 text-white rounded-full text-sm">
                    Open
                  </button>
                  <button className="px-3 py-2 border rounded-full text-sm">
                    Photos
                  </button>
                  <button className="px-3 py-2 border rounded-full text-sm">
                    History
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INVENTORY */}
      <section id="inventory" className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">
            Landing page + inventory interface
          </h2>
          <p className="text-gray-500 mb-6">
            Front-end shell for browsing inventory and managing workflow.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 border rounded-2xl">
              <div className="text-2xl mb-2">🔎</div>
              <h3 className="font-bold mb-2">Search</h3>
              <p className="text-gray-500 text-sm">
                Filters, VIN lookup, status tags.
              </p>
            </div>
            <div className="p-6 border rounded-2xl">
              <div className="text-2xl mb-2">📣</div>
              <h3 className="font-bold mb-2">Announcements</h3>
              <p className="text-gray-500 text-sm">
                Weekly updates and alerts.
              </p>
            </div>
            <div className="p-6 border rounded-2xl">
              <div className="text-2xl mb-2">📱</div>
              <h3 className="font-bold mb-2">Mobile ready</h3>
              <p className="text-gray-500 text-sm">Fully responsive layout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEALER */}
      <section id="dealer-portal" className="py-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-2xl">
            <h3 className="font-bold mb-4">Dealer actions</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between p-3 border rounded-xl">
                <span>Inventory</span>
                <span>Browse units</span>
              </div>
              <div className="flex justify-between p-3 border rounded-xl">
                <span>Purchase</span>
                <span>Checkout flow</span>
              </div>
              <div className="flex justify-between p-3 border rounded-xl">
                <span>Buyer portal</span>
                <span>Payments</span>
              </div>
              <div className="flex justify-between p-3 border rounded-xl">
                <span>Title status</span>
                <span>Tracking</span>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-2xl">
            <h3 className="font-bold mb-4">Metrics</h3>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-4 border rounded-xl">
                <div className="text-xl font-bold">148</div>
                <div className="text-xs text-gray-500">Units</div>
              </div>
              <div className="p-4 border rounded-xl">
                <div className="text-xl font-bold">23</div>
                <div className="text-xs text-gray-500">Titles</div>
              </div>
              <div className="p-4 border rounded-xl">
                <div className="text-xl font-bold">12</div>
                <div className="text-xs text-gray-500">Sales</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMPLOYEE */}
      <section id="employee-tools" className="py-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-4">
          {[
            ["🛠️", "Mechanical status"],
            ["🧾", "Tickets"],
            ["🚚", "Locations"],
            ["📅", "Sale workflow"],
          ].map(([i, t]) => (
            <div key={t} className="p-6 border rounded-2xl">
              <div className="text-2xl">{i}</div>
              <h3 className="font-bold mt-2">{t}</h3>
              <p className="text-gray-500 text-sm">
                Placeholder workflow module for internal operations.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="p-8 border rounded-3xl bg-orange-50 flex flex-wrap justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Backend ready to connect later
              </h2>
              <p className="text-gray-600 max-w-xl">
                Static front end designed for future API integration without
                redesign.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setAccountModal(true)}
                className="px-5 py-3 bg-orange-600 text-white rounded-full"
              >
                Open Account
              </button>
              <button
                onClick={() => setLoginModal(true)}
                className="px-5 py-3 border rounded-full"
              >
                Dealer Login
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex justify-between flex-wrap gap-2">
          <span>© 2026 Copper State Auto Wholesale</span>
          <span>Dealer • Inventory • Employee tools</span>
        </div>
      </footer>

      {/* ACCOUNT MODAL */}
      {accountModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg p-6 rounded-3xl">
            <div className="flex justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">Open account</h3>
                <p className="text-sm text-gray-500">Dealer registration</p>
              </div>
              <button onClick={() => setAccountModal(false)}>✕</button>
            </div>

            <div className="space-y-3">
              <input
                className="w-full p-3 border rounded-xl"
                placeholder="Business name"
              />
              <input
                className="w-full p-3 border rounded-xl"
                placeholder="Contact name"
              />
              <input
                className="w-full p-3 border rounded-xl"
                placeholder="Email"
              />
              <select className="w-full p-3 border rounded-xl">
                <option>Dealer</option>
                <option>Buyer</option>
                <option>Broker</option>
              </select>
              <input
                className="w-full p-3 border rounded-xl"
                placeholder="License ID"
              />
              <button className="w-full bg-orange-600 text-white py-3 rounded-full">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {loginModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md p-6 rounded-3xl">
            <div className="flex justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">Login</h3>
                <p className="text-sm text-gray-500">Dealer access</p>
              </div>
              <button onClick={() => setLoginModal(false)}>✕</button>
            </div>

            <div className="space-y-3">
              <input
                className="w-full p-3 border rounded-xl"
                placeholder="Email"
              />
              <input
                className="w-full p-3 border rounded-xl"
                type="password"
                placeholder="Password"
              />
              <button className="w-full bg-orange-600 text-white py-3 rounded-full">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
