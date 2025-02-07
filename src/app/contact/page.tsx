import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
export const metadata = {
  title: "Contact Us | Bluewind Apts",
  description: "Contact Us for anything regarding our rooms",
};
export default function ContactUs() {
  return (
    <div className="bg-neutral-white">
      <div className="relative isolate ">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-neutral-sandy ring-1 ring-primary/10 lg:w-1/2"></div>
              <h2 className="text-3xl font-bold tracking-tight text-primary">
                Contact Us
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-slate">
                We are here to help you with your accommodation needs! Whether
                you are looking for more information about our apartments, need
                help with bookings, or have specific requests, we are just a
                message away. Fill out the contact form, and our friendly team
                will get back to you as soon as possible. Alternatively, feel
                free to reach us via phone or email. Thank you for considering
                Bluewind Apartments, and we look forward to hosting you soon!
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-neutral-slate">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <MapPinIcon
                      className="h-7 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    Iroon Politechniou,
                    <br />
                    Kissamos 734 00
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-primary text-neutral-slate"
                      href="tel:+301234567890"
                    >
                      +30 6945226609
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-primary text-neutral-slate"
                      href="mailto:harris@example.com"
                    >
                      bluewindapts@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            action="#"
            method="POST"
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-primary"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-neutral-slate shadow-sm ring-1 ring-inset ring-primary placeholder:text-neutral-slate focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-primary"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-neutral-slate shadow-sm ring-1 ring-inset ring-primary placeholder:text-neutral-slate focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-primary"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-neutral-slate shadow-sm ring-1 ring-inset ring-primary placeholder:text-neutral-slate focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-primary"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-neutral-slate shadow-sm ring-1 ring-inset ring-primary placeholder:text-neutral-slate focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-primary"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-neutral-slate shadow-sm ring-1 ring-inset ring-primary placeholder:text-neutral-slate focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="inline-block bg-primary text-neutral-white border-2 border-primary font-bold px-8 py-3 rounded-xl text-lg shadow-md hover:bg-primary-coral hover:text-primary hover:shadow-lg focus:ring-1 focus:ring-neutral-slate transition-transform duration-300 transform hover:scale-95"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Google Map Section */}
      <section className="pt-24 pb-24 px-6 bg-neutral-white">
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4740.714371868296!2d23.6463736638657!3d35.49880660403997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149cf7852e4dd6cb%3A0xad8decc401942676!2sBluewind%20Apartments!5e0!3m2!1sen!2sgr!4v1738051311307!5m2!1sen!2sgr"
            width="50%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
