
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4" style={{ color: '#d59d18' }}>HUSH</div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Where every cup tells a story. Experience the perfect blend of artisanal coffee,
              cozy atmosphere, and exceptional service.
            </p>
            <div className="text-sm text-primary-foreground/60">
              © 2025 Hush Coffee. All rights reserved 
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="https://www.instagram.com/hush__eg/" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@hush__eg?_t=ZS-8zmdeSAFkTY&_r=1" className="hover:text-white transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>Made by <a href="https://mohamed-eid.vercel.app/" target="_blank">Mohamed Eid</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
