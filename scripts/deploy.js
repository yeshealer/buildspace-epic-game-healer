const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Konohamaru", "Hinata", "Tenten", "Neji", "Lee", "Jiraiya", "Sarutobi", "Tobirama", "Hashirama", "Kakashi", "Sasuke", "Naruto", "Minato"],
        [
            "https://gateway.pinata.cloud/ipfs/QmXFYAgqUxAyCPA4MAvtoJ1xE8zgTvgKHHUJJMueuhmPys",
            "https://gateway.pinata.cloud/ipfs/QmaYanQbyhusAiVotusSPJhoJQgD1U1rkZ5hmySXffBW4z",
            "https://gateway.pinata.cloud/ipfs/QmeaQXfSwPEtd2JXd9LGf5b49MtzxEm24xDGYSo3MipqbF",
            "https://gateway.pinata.cloud/ipfs/Qmc9MDf2hFwEr7hECfHPZWhnZ6hHiunSWbE9xwoLrbi17z",
            "https://gateway.pinata.cloud/ipfs/QmYLzHe7Ws7UMai87NMxEf32k2UEnjqkVnJe9neYqti297",
            "https://gateway.pinata.cloud/ipfs/QmUJLjXwjUQjw3bGcypN8ujReP815Ydxkwx9NGw9tBBrTV",
            "https://gateway.pinata.cloud/ipfs/QmemAxguxCMsGhkL7XRn4XYsYsyu5bFWUNG4CveEJLvBAH",
            "https://gateway.pinata.cloud/ipfs/QmaXwzLi4vAH6JJREiUzqXTNm5S7wQn6y7NKzaciHQ6HN1",
            "https://gateway.pinata.cloud/ipfs/Qmduj864iXamC1x5Va9JWcMUokGGZEq7EqBy3tzNdAnBCa",
            "https://gateway.pinata.cloud/ipfs/QmSXFBtX1eYyz18v2idzo2A9WhrZV63gh4MJptXuWo6tir",
            "https://gateway.pinata.cloud/ipfs/QmexbpDt5jvhyuV8Hh11Yd6HDXobCYxC6o7AUzJvfiHGUw",
            "https://gateway.pinata.cloud/ipfs/QmXTXo3RJi72DNMq7GXHRBUb5B8jK4rXHmLMGY6zYQxzZQ",
            "https://gateway.pinata.cloud/ipfs/QmTda7ndgBJtmTBGfu7b2WN8fwFDxLi52kH562gsD6DRMo"
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

    txn = await gameContract.mintCharacterNFT(0)
    await txn.wait()

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