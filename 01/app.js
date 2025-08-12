const randomNumber = Math.round(Math.random() * 21);
console.log("Wylosowana liczba:", randomNumber);

  if (randomNumber < 5) {
    console.log("Wylosowana liczba jest za mała, aby użyć pętli");
  } else {
        for (let i = 5; i <= randomNumber; i++) {
            console.log(i)
        }
  }
