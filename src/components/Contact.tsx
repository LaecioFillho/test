import emailjs from "@emailjs/browser"
import { FormEvent, useRef, useState } from "react"
import { FaSpinner, FaWhatsapp } from "react-icons/fa"
import { HiCheckCircle, HiOutlineEnvelope, HiOutlineMapPin, } from "react-icons/hi2"
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form.current) return

    setLoading(true)

    emailjs
      .sendForm(
        "service_i7kvts9",
        "template_wggbd44",
        form.current,
        "BxeVp4EHUwWj3biXB"
      )
      .then(
        () => {
          setSuccess(true)
          setLoading(false)
        },
        (error) => {
          setError(true)
          setLoading(false)
          console.error(error)
        }
      )
  }

  const wapMensseger = "Olá, tudo bem? Gostaria de combinar um projeto para o meu trabalho."

  const contacts = [
    {
      name: "WhatsApp",
      description: "+55 88 9 9200-4177",
      link: `https://wa.me/5588992004177?text=${wapMensseger}`,
      icon: <FaWhatsapp className="h-10 w-10" />,
    },

    {
      name: "Instagram",
      description: "Siga-me LaecioSoft",
      link: "https://www.instagram.com/laeciosoft/",
      icon: <IoLogoInstagram className="h-10 w-10" />,
    },

    {
      name: "Email",
      description: "laeciofillho@gmail.com",
      link: "mailto:laeciofillho@gmail.com?subject=Olá...",
      icon: <HiOutlineEnvelope className="h-10 w-10" />,
    },

    {
      name: "Juazeiro do Norte",
      description: "Ceará BR",
      link: "https://www.google.com.br/maps/@-7.2155136,-39.2822784,14z?hl=pt-BR&entry=ttu",
      icon: <HiOutlineMapPin className="h-10 w-10" />,
    },

    {
      name: "Linkedin",
      description: "Perfil social",
      link: "https://www.linkedin.com/in/laeciofillho/",
      icon: <CiLinkedin className="h-10 w-10" />,
    },

    {
      name: "GitHub",
      description: "/LaecioFillho",
      link: "https://github.com/LaecioFillho",
      icon: <IoLogoGithub className="h-10 w-10" />,
    },
  ]

  return (
    <section id="contact" className="bg-blue-700 text-white">
      <div className="container mx-auto max-w-6xl p-4 py-8">
        <div className="mb-6">
          <h2 className="z-50 mb-2">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Fale
            </span>
            <span className="font-handwriting text-4xl">Comigo</span>
          </h2>
          <p className="text-sm">
            Entre em contato por formulário ou WhatsApp, com certeza irei poder
            te ajudar.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="basis-2/3 md:basis-1/2">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="mb-2 block ps-4 font-headline font-semibold"
                >
                  Mensagem:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-36 w-full rounded-lg border border-white bg-transparent p-3 outline-none"
                  placeholder="Ex: Olá, Laecio, tudo bom? Gostaria de realizar um projeto para o meu negócio."
                  required
                />
              </div>
              <div className="mb-6 flex flex-col gap-4 md:flex-row">
                <div className="flex-grow">
                  <label
                    htmlFor="fullName"
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    Seu nome:
                  </label>
                  <input
                    className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Ex: Cliente"
                    required
                  />
                </div>
                <div className="flex-grow">
                  <label
                    htmlFor="email"
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    Seu email:
                  </label>
                  <input
                    className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Ex: Cliente@gmail.com..."
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="button flex items-center gap-2 text-blue-700"
                  disabled={loading}
                >
                  {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
                  {success && <HiCheckCircle className="h-4 w-4" />}
                  Enviar mensagem
                </button>

                {error && (
                  <p className="mt-2">
                    Ocorreu um erro ao enviar a mensagem, tente novamente mais
                    tarde.
                  </p>
                )}
              </div>
            </form>
          </div>
          <div className="basis-1/2 grid grid-cols-1 md:grid-cols-2 gap-2">
            {contacts.map((contact, index) => (
              <div
                key={`contact-${index}`}
                className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4"
              >
                {contact.icon}
                <div>
                  <p className="font-headline font-semibold">{contact.name}</p>
                  <a
                    href={contact.link}
                    target="_blank"
                    className="text-gray-300 underline underline-offset-2"
                  >
                    {contact.description}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
