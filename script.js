document.getElementById("loveButton").addEventListener("click", function() {
    const lovePage = window.open("", "", "width=600,height=600");

    lovePage.document.write(`
        <html>
        <head>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #ffe6e6;
                    font-family: Arial, sans-serif;
                    overflow: hidden;
                }
                .love-counter {
                    font-size: 100px; /* বড় ❤️ ইমোজির জন্য সাইজ */
                    color: red;
                }
                .text {
                    font-size: 20px;
                    color: #333;
                }
                @keyframes fallingHearts {
                    from {
                        transform: translateY(-100%);
                    }
                    to {
                        transform: translateY(100%);
                    }
                }
                .falling-heart {
                    position: absolute;
                    font-size: 50px;
                    animation: fallingHearts 2s linear infinite;
                    opacity: 0.7;
                }
                .falling-heart:nth-child(1) { left: 10%; animation-duration: 1.8s; }
                .falling-heart:nth-child(2) { left: 30%; animation-duration: 1.5s; }
                .falling-heart:nth-child(3) { left: 50%; animation-duration: 2.2s; }
                .falling-heart:nth-child(4) { left: 70%; animation-duration: 1.9s; }
                .falling-heart:nth-child(5) { left: 90%; animation-duration: 2s; }
            </style>
        </head>
        <body>
            <div class="love-counter">❤️</div>
            <div class="text">Ami Tomay Unlimited Valobashi Ela</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <div class="falling-heart">❤️</div>
            <script>
                let counter = 1;
                setInterval(() => {
                    document.querySelector('.love-counter').innerText = "❤️ " + counter++;
                }, 50); // প্রতি 50 মিলিসেকেন্ডে সংখ্যা বাড়বে
            </script>
        </body>
        </html>
    `);
});
