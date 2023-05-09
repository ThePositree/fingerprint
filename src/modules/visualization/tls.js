const nodeTlsVersion = document.querySelector(
  '.data-tls__version .for-replace',
);
const nodeTlsEphemeralKeysSupported = document.querySelector(
  '.data-tls__ephemeral-keys-supported .for-replace',
);
const nodeTlsCipherSuites = document.querySelector(
  '.data-tls__cipher-suites .for-replace',
);
const nodeTlsSessionTicketSupported = document.querySelector(
  '.data-tls__session-ticket-supported .for-replace',
);
const nodeTlsCompressionSupported = document.querySelector(
  '.data-tls__tls-compression-supported .for-replace',
);

export const setTlsVersion = (value) => {
  nodeTlsVersion.textContent = value;
  return nodeTlsVersion.textContent;
};
export const setTlsEphemeralKeysSupported = (value) => {
  nodeTlsEphemeralKeysSupported.textContent = value;
  return nodeTlsEphemeralKeysSupported.textContent;
};
export const setTlsCipherSuites = (value) => {
  nodeTlsCipherSuites.textContent = value.join(',\n');
  return nodeTlsCipherSuites.textContent;
};
export const setTlsSessionTicketSupported = (value) => {
  nodeTlsSessionTicketSupported.textContent = value;
  return nodeTlsSessionTicketSupported.textContent;
};
export const setTlsCompressionSupported = (value) => {
  nodeTlsCompressionSupported.textContent = value;
  return nodeTlsCompressionSupported.textContent;
};
