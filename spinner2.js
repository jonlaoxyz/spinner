process.stdout.write('hello from spinner2.js... \rheyyy\n');
let symbols = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r\\   "];
let delay = 100;

for (let sym of symbols) {
  setTimeout(() => {
    process.stdout.write(sym);
  }, delay);
  delay += 100;
}