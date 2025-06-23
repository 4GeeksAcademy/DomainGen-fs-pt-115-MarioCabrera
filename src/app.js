import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pronoun = ['this', 'my', 'the', 'that'];
  const adj = ['great', 'big','small','huge'];
  const noun = ['jogger', 'racoon','murderer'];
  const domain = ['.com','.net','.info','.org','.biz','.edu']
  // for (const start of pronoun) {
  //   for (const mid of adj) {
  //     for (const end of noun) {
  //       for (const dom of domain) {
  //         result = start + mid + end + dom;
  //         console.log(result);
  //         result = ""
  //       }
  //     }
  //   }
  // }
  const generateNames = pronoun.flatMap(pronoun =>
  adj.flatMap(adj =>
    noun.flatMap(noun =>
      domain.map(domain => `${pronoun}${adj}${noun}${domain}`)
    )
  )
);
  console.log(generateNames);
};
