
import BrandFooter from "./BrandFooter";
import { CategoryFooter } from "./CategoryFooter";
import { CopyrightFooter } from "./CopyrightFooter";
import { ServiceFooter } from "./ServiceFooter";
import { SocialLinksFooter } from "./SocialLinksFooter";

function Footer() {

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Footer */}
          <BrandFooter />

          {/* Services */}
          <ServiceFooter />

          {/* Categorys */}
          <CategoryFooter />
          {/* SocialLinks */}
          <SocialLinksFooter />

        </div>
        {/* Copyright */}
        <CopyrightFooter />
      </div>
    </footer>
  );
}

export default Footer;
