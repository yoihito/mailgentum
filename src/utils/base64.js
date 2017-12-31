export const decodeBase64ToUnicode = (encodedStr) => 
    decodeURIComponent(escape(atob(encodedStr.replace(/-/g, '+').replace(/_/g, '/') )));