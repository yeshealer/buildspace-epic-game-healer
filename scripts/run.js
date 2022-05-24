const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Konohamaru", "Hinata", "Tenten", "Neji", "Lee", "Jiraiya", "Sarutobi", "Tobirama", "Hashirama", "Kakashi", "Sasuke", "Naruto", "Minato"],
        [
            "QmXFYAgqUxAyCPA4MAvtoJ1xE8zgTvgKHHUJJMueuhmPys",
            "QmaYanQbyhusAiVotusSPJhoJQgD1U1rkZ5hmySXffBW4z",
            "QmeaQXfSwPEtd2JXd9LGf5b49MtzxEm24xDGYSo3MipqbF",
            "Qmc9MDf2hFwEr7hECfHPZWhnZ6hHiunSWbE9xwoLrbi17z",
            "QmYLzHe7Ws7UMai87NMxEf32k2UEnjqkVnJe9neYqti297",
            "QmUJLjXwjUQjw3bGcypN8ujReP815Ydxkwx9NGw9tBBrTV",
            "QmemAxguxCMsGhkL7XRn4XYsYsyu5bFWUNG4CveEJLvBAH",
            "QmaXwzLi4vAH6JJREiUzqXTNm5S7wQn6y7NKzaciHQ6HN1",
            "Qmduj864iXamC1x5Va9JWcMUokGGZEq7EqBy3tzNdAnBCa",
            "QmSXFBtX1eYyz18v2idzo2A9WhrZV63gh4MJptXuWo6tir",
            "QmexbpDt5jvhyuV8Hh11Yd6HDXobCYxC6o7AUzJvfiHGUw",
            "QmXTXo3RJi72DNMq7GXHRBUb5B8jK4rXHmLMGY6zYQxzZQ",
            "QmTda7ndgBJtmTBGfu7b2WN8fwFDxLi52kH562gsD6DRMo"
        ],
        [1000, 1250, 1100, 1400, 1500, 1800, 1700, 1900, 2000, 2100, 2500, 2400, 3000],
        [20, 30, 40, 25, 24, 45, 50, 40, 45, 50, 50, 50, 100],
        [
            "normal", "normal", "normal", "normal", "normal", "rare", "rare", "rare", "rare", "hero", "hero", "hero", "legend"
        ],
        "Madara",
        "https://raw.githubusercontent.com/yeshealer/buildspace-intern-whole-site/main/public/avatar/madara.png",
        99999,
        100
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn = await gameContract.mintCharacterNFT(6)
    await txn.wait()

    txn = await gameContract.mintCharacterNFT(2)
    await txn.wait()

    txn = await gameContract.mintCharacterNFT(10)
    await txn.wait()

    let holdNFT = await gameContract.checkIfUserHasNFT()
    console.log(holdNFT)

    console.log("done!")
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

runMain();