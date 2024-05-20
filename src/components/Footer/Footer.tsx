import Copyright from "./FooterCopyright";
import Links from "./Links";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative mt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1">
          <div className="relative py-16">
            <div className="relative w-full">
              <div className="-mt-24 grid grid-cols-1 gap-[30px] md:grid-cols-12">
                <Logo />
                <Links />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
