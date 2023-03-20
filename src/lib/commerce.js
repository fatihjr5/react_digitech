import Commerce from "@chec/commerce.js";

const api = import.meta.env.VITE_REACT_APP_CHEC_PUBLIC_KEY

export const commerce = new Commerce(api, true);