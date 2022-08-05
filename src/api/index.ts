
const apiUrl =  (name:string)=> `https://api.factoryfour.com/${name}/health/status`;

export const API_ENDPOINTS = {
  accounts: apiUrl('accounts'),
  assets: apiUrl('assets'),
  customers: apiUrl('customers'),
  datapoints: apiUrl('datapoints'),
  devices: apiUrl('devices'),
  documents: apiUrl('documents'),
  forms: apiUrl('forms'),
  media: apiUrl('media'),
  invites: apiUrl('invites'),
  messages: apiUrl('messages'),
  namespaces: apiUrl('namespaces'),
  orders: apiUrl('orders'),
  patients: apiUrl('patients'),
  relationships: apiUrl('relationships'),
  rules: apiUrl('rules'),
  templates: apiUrl('templates'),
  users: apiUrl('users'),
  workflows: apiUrl('workflows'),
};

export const fetcher = async (url:string) => {
  try {
    const res = await fetch(url)
    return res.json()
  } catch (error:any) {
    error.code =  403
    error.message = "Forbidden"
    throw error
  }

}