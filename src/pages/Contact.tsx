import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail } from "react-coolicons";
import { Instagram, Music2 } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen relative">
      {/* Dark gradient background */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: "linear-gradient(180deg, hsl(160 30% 12%) 0%, hsl(158 28% 16%) 30%, hsl(155 25% 20%) 60%, hsl(150 25% 97%) 100%)" 
        }} 
      />
      <Header />
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="gradient-text font-semibold text-sm uppercase tracking-wider">
              Hör av dig
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3">
              Kontakta oss
            </h1>
            <p className="text-white/70 mt-4 max-w-xl mx-auto">
              Har du frågor, feedback eller vill samarbeta? Vi finns här för dig!
            </p>
          </motion.div>

          <div className="max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              {/* Email */}
              <a
                href="mailto:klimavauf@gmail.com"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-elevated hover:bg-white/15 transition-all duration-300 border border-white/20 group"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">E-post</h3>
                  <p className="text-white/70">klimavauf@gmail.com</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/klimava.uf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-elevated hover:bg-white/15 transition-all duration-300 border border-white/20 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Instagram</h3>
                  <p className="text-white/70">@klimava.uf</p>
                </div>
              </a>

              {/* TikTok */}
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 opacity-60">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Music2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">TikTok</h3>
                  <p className="text-white/50">Kommer snart!</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
