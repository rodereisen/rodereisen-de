import * as React from "react"
import { useEffect, useState } from "react"
import ModalBooking from "./modal-booking"
import SingleOffer from "./single-offer"

const SectionOffers = ({ offers }) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [url, setUrl] = useState("")
  const open = offer => {
    const BASE_URL = "https://www.meinereiseangebote.de"
    const url = `${BASE_URL}/${offer.basketId}/${offer.offerId}`
    setUrl(`${BASE_URL}/${offer.basketId}/${offer.offerId}`)
    setIsOpen(true)
  }

  const close = () => {
    setUrl("")
    setIsOpen(false)
  }

  return (
    <section className="w-full mt-16 bg-white">
      <div className="container rounded-lg overflow-hidden">
        <div className="grid grid-flow-row grid-cols-4">
          {offers.map((offer, index) => (
            <button onClick={() => open(offer)} key={`${offer.id}-${index}`}>
              <SingleOffer offer={offer} />
            </button>
          ))}
        </div>
        {modalIsOpen && url !== "" ? (
          <ModalBooking onClose={() => close()} src={url} />
        ) : null}
      </div>
    </section>
  )
}

export default SectionOffers
