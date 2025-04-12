import Image from "next/image";
import { NewsletterForm } from "./NewsletterForm";
import Link from "next/link";
import { LiaFacebook, LiaInstagram } from "react-icons/lia";

export default function Footer() {
  return (
    <footer className="bg-white text-sm  border-t border-gray-200 px-4 md:px-20 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-semibold mb-3">CONTACT US</h3>
            <ul className="space-y-2">
              <li>Book Appointment</li>
              <li>Visit Our Stores</li>
              <li>Email Us</li>
              <li>Contact Us</li>
              <li>Schedule a consultation</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">THE ART OF GIFTING</h3>
            <ul className="space-y-2">
              <li>Luxury Gift Wrapping</li>
              <li>Gift Cards</li>
              <li>Private & White-Glove Delivery</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">BESPOKE & SERVICES</h3>
            <ul className="space-y-2">
              <li>Custom Jewelry Design</li>
              <li>Private Jewelry Consultations</li>
              <li>Jewelry Restoration & Care</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">{`Let's Keep In Touch`}</h3>
            <NewsletterForm />

            <h4 className="font-medium text-gray-700 mb-2">Payment Methods</h4>
            <div className="flex space-x-2">
              <Image
                width={20}
                height={20}
                src="/images/visa.svg"
                alt="Visa"
                className="h-6 grayscale"
              />
              <Image
                width={20}
                height={20}
                src="/images/mastercard.svg"
                alt="MasterCard"
                className="h-6 grayscale"
              />
              <Image
                width={20}
                height={20}
                src="/images/amex.svg"
                alt="Amex"
                className="h-6 grayscale"
              />
              <Image
                width={20}
                height={20}
                src="/images/applepay.svg"
                alt="Apple Pay"
                className="h-6 grayscale"
              />
              <Image
                width={10}
                height={10}
                src="/images/teddy.svg"
                alt="Tether"
                className="h-6 grayscale"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-xs">
          <p>© 2025, All Rights Reserved - MyJewel</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Site Map</Link>
            <Link href="#">
              <LiaInstagram className="text-2xl" />
            </Link>
            <Link href="#">
              <LiaFacebook className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
