import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Instagram, Music2 } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-page)" }}>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Hör av dig
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
              Kontakta oss
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
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
                className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border group"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">E-post</h3>
                  <p className="text-muted-foreground">klimavauf@gmail.com</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/klimava.uf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Instagram</h3>
                  <p className="text-muted-foreground">@klimava.uf</p>
                </div>
              </a>

              {/* TikTok */}
              <div className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-soft border border-border opacity-60">
                <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center">
                  <Music2 className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">TikTok</h3>
                  <p className="text-muted-foreground">Kommer snart!</p>
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
