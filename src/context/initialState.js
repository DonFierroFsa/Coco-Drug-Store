export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export function updateCartState(state) {
  window.localStorage.setItem("cart", JSON.stringify(state));
}

export const cashRegisterInitialState =
  JSON.parse(window.localStorage.getItem("cashRegister")) || [];

export function updateCashRegisterState(state) {
  window.localStorage.setItem("cashRegister", JSON.stringify(state));
}

export const operationInitialState =
  JSON.parse(window.localStorage.getItem("operationState")) || [];

export function updateOperationState(state) {
  window.localStorage.setItem("operationState", JSON.stringify(state));
}
