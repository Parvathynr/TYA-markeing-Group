export const handleChatClick = () => {
  window.open("https://wa.me/971523365001", "_blank");
};

// export const handleQuoteRequest = (location, destination, contact, message) => {
//   const whatsappNumber = "971523365001";
//   const url = `https://wa.me/${whatsappNumber}?text=📌 Quote Request:%0A
//   🌍 Location: ${encodeURIComponent(location)}%0A
//   🏝️ Destination: ${encodeURIComponent(destination)}%0A
//   📧 Contact: ${encodeURIComponent(contact)}%0A
//   📝 Message: ${encodeURIComponent(message)}`;

//   window.open(url, "_blank");
// };
export const handleQuoteRequest = ({
  location,
  destination,
  contact,
  message,
}) => {
  const phoneNumber = "971523365001"; // your WhatsApp number

  const text = `Quote Request:\n\n Location: ${location}\n Destination: ${destination}\n Contact: ${contact}\n Message: ${message}`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
};
