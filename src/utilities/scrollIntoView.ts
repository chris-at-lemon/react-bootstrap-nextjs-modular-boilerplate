export const scrollIntoView = (scrolltoId: string) => { // pass Interface into function
  const scrollto = document.getElementById(scrolltoId);

  if (scrollto !== null) {
    scrollto.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
