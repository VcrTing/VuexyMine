import{af as i,a5 as t}from"./index-8830fac0.js";const o=i("InvoiceStore",{actions:{fetchInvoices(e){return t.get("apps/invoices",{params:e})},fetchInvoice(e){return t.get(`/apps/invoices/${e}`)},fetchClients(){return t.get("/apps/invoice/clients")},deleteInvoice(e){return t.delete(`/apps/invoices/${e}`)}}});export{o as u};
