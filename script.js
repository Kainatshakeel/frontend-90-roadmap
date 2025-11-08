const greet = (name = "Guest") => {
  return `👋 Hello, ${name}! Welcome to my portfolio.`;
};

console.log(greet());


const profile = {
  myname: "Kainat Shakeel",
  role: "Frontend Developer",
  city: "Pakistan"
};

const { myname, role, city } = profile;
console.log(`I'm👩‍💻 ${myname} a ${role} based in ${city}.`);