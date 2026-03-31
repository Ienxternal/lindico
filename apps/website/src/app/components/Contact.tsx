import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock3 } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-[#f8f4ec] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.24em] text-[#8c7c69]">
              Contact
            </p>
            <h2 className="mb-6 mt-5 text-4xl tracking-[-0.04em] text-[#1d1b18] md:text-6xl font-serif">
              Let&apos;s shape something intentional.
            </h2>
            <p className="mb-12 text-lg leading-8 text-[#5a4f44]">
              Tell us whether you are planning a custom home, a renovation, an
              outdoor living upgrade, or a smarter whole-home experience. We&apos;ll
              guide the next step with clarity.
            </p>

            <div className="grid gap-px bg-[#d9cdbd]">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 bg-[#fbf8f2] p-5 text-[#3f352c]"
              >
                <Mail className="h-6 w-6" />
                <span>studio@lindico.com</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 bg-[#fbf8f2] p-5 text-[#3f352c]"
              >
                <Phone className="h-6 w-6" />
                <span>(555) 123-4567</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 bg-[#fbf8f2] p-5 text-[#3f352c]"
              >
                <MapPin className="h-6 w-6" />
                <span>Serving clients around the Twin Cities</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 bg-[#fbf8f2] p-5 text-[#3f352c]"
              >
                <Clock3 className="h-6 w-6" />
                <span>Consultations by appointment only</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6 border border-[#d9cdbd] bg-[#fbf8f2] p-8 md:p-10">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8c7c69]">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full border border-[#d9cdbd] bg-[#f8f1e6] px-4 py-4 text-[#201c17] placeholder-[#9d8e7c] outline-none transition-colors focus:border-[#8c7c69]"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8c7c69]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full border border-[#d9cdbd] bg-[#f8f1e6] px-4 py-4 text-[#201c17] placeholder-[#9d8e7c] outline-none transition-colors focus:border-[#8c7c69]"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8c7c69]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="w-full border border-[#d9cdbd] bg-[#f8f1e6] px-4 py-4 text-[#201c17] placeholder-[#9d8e7c] outline-none transition-colors focus:border-[#8c7c69]"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8c7c69]">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full border border-[#d9cdbd] bg-[#f8f1e6] px-4 py-4 text-[#201c17] placeholder-[#9d8e7c] outline-none transition-colors focus:border-[#8c7c69]"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8c7c69]">
                  Project Type
                </label>
                <input
                  type="text"
                  placeholder="Custom home, remodel, deck build, automation..."
                  className="w-full border border-[#d9cdbd] bg-[#f8f1e6] px-4 py-4 text-[#201c17] placeholder-[#9d8e7c] outline-none transition-colors focus:border-[#8c7c69]"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8c7c69]">
                  Project Vision
                </label>
                <textarea
                  placeholder="Tell us about your vision for the project, your must-haves, and any other details you want us to know."
                  rows={5}
                  className="w-full resize-none border border-[#d9cdbd] bg-[#f8f1e6] px-4 py-4 text-[#201c17] placeholder-[#9d8e7c] outline-none transition-colors focus:border-[#8c7c69]"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#201c17] px-12 py-4 text-sm uppercase tracking-[0.2em] text-[#f4efe6] transition-all hover:bg-[#3a3129]"
              >
                Request Consultation
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
