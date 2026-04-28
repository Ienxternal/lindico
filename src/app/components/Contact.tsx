import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock3, Copy, Check, ArrowUpRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('studio@lindico.com');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="bg-[#f8f4ec] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
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

            <div className="grid gap-px overflow-hidden bg-[#d9cdbd]">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group relative w-full cursor-pointer bg-[#fbf8f2] p-5 text-left text-[#3f352c]"
                  >
                    <span className="pointer-events-none absolute bottom-0 left-0 top-0 w-1 bg-[#b6a58e] opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100" />
                    <span className="flex items-center gap-4 transition-transform duration-150 ease-out group-hover:translate-x-[5px]">
                      <Mail className="h-6 w-6" />
                      <span>studio@lindico.com</span>
                    </span>
                    <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#8c7c69] opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="border-[#d9cdbd] bg-[#fbf8f2] p-8 text-[#201c17] shadow-[0_24px_60px_rgba(32,28,23,0.12)] sm:max-w-md">
                  <DialogHeader className="gap-2 text-left">
                    <DialogTitle className="font-serif text-[2rem] tracking-[-0.03em] text-[#1d1b18]">
                      Email Studio
                    </DialogTitle>
                    <DialogDescription className="text-sm leading-6 text-[#6c6156]">
                      Choose how you want to start your message.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <a
                      href="mailto:studio@lindico.com"
                      className="flex h-[84px] w-full items-center justify-center border border-[#d9cdbd] bg-[#fcf8f1] p-2 text-center transition-colors hover:border-[#8c7c69] hover:bg-[#f4ecdf]"
                    >
                      <div className="flex flex-col items-center gap-1.5">
                        <Mail className="h-3 w-3" />
                        <span className="text-[9px] uppercase tracking-[0.14em] text-[#201c17]">
                          Mail
                        </span>
                      </div>
                    </a>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=studio@lindico.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-[84px] w-full items-center justify-center border border-[#d9cdbd] bg-[#fcf8f1] p-2 text-center transition-colors hover:border-[#8c7c69] hover:bg-[#f4ecdf]"
                    >
                      <div className="flex flex-col items-center gap-1.5">
                        <Mail className="h-3 w-3" />
                        <span className="text-[9px] uppercase tracking-[0.14em] text-[#201c17]">
                          Gmail
                        </span>
                      </div>
                    </a>
                    <a
                      href="https://outlook.live.com/mail/deeplink/compose?to=studio@lindico.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-[84px] w-full items-center justify-center border border-[#d9cdbd] bg-[#fcf8f1] p-2 text-center transition-colors hover:border-[#8c7c69] hover:bg-[#f4ecdf]"
                    >
                      <div className="flex flex-col items-center gap-1.5">
                        <Mail className="h-3 w-3" />
                        <span className="text-[9px] uppercase tracking-[0.14em] text-[#201c17]">
                          Outlook
                        </span>
                      </div>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="mt-1 flex items-center justify-between border border-[#d9cdbd] bg-[#fcf8f1] px-4 py-2.5 text-left transition-colors hover:border-[#8c7c69] hover:bg-[#f4ecdf]"
                  >
                    <span className="text-[15px] text-[#201c17]">studio@lindico.com</span>
                    <span className="inline-flex items-center text-[#5a4f44]">
                      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                </DialogContent>
              </Dialog>
              <div className="group relative bg-[#fbf8f2] p-5 text-[#3f352c]">
                <span className="pointer-events-none absolute bottom-0 left-0 top-0 w-1 bg-[#b6a58e] opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100" />
                <div className="flex items-center gap-4 transition-transform duration-150 ease-out group-hover:translate-x-[5px]">
                  <Phone className="h-6 w-6" />
                  <span>(555) 123-4567</span>
                </div>
              </div>
              <div className="group relative bg-[#fbf8f2] p-5 text-[#3f352c]">
                <span className="pointer-events-none absolute bottom-0 left-0 top-0 w-1 bg-[#b6a58e] opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100" />
                <div className="flex items-center gap-4 transition-transform duration-150 ease-out group-hover:translate-x-[5px]">
                  <MapPin className="h-6 w-6" />
                  <span>Serving clients around the Twin Cities</span>
                </div>
              </div>
              <div className="group relative bg-[#fbf8f2] p-5 text-[#3f352c]">
                <span className="pointer-events-none absolute bottom-0 left-0 top-0 w-1 bg-[#b6a58e] opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100" />
                <div className="flex items-center gap-4 transition-transform duration-150 ease-out group-hover:translate-x-[5px]">
                  <Clock3 className="h-6 w-6" />
                  <span>Consultations by appointment only</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
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
